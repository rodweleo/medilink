import { Session } from "@supabase/supabase-js";
import { fetchAuthSession } from "@/functions/fetchAuthSession";
import { API_URL } from "@/utils/API_URL";
import axios from "axios";
import { useState, useEffect } from "react";
export const useSession = () => {
  const [session, setSession] = useState<Session>(
    JSON.parse(sessionStorage.getItem("MEDILINK_SESSION")!),
  );
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("CURRENT_USER_PROFILE")!),
  );
  const [error, setError] = useState<string[]>([]);
  const [isFetchingSession, setIsFetchingSession] = useState(true);
  useEffect(() => {
    if (sessionStorage.getItem("MEDILINK_SESSION")) {
      setSession(JSON.parse(sessionStorage.getItem("MEDILINK_SESSION")!));
    } else {
      fetchAuthSession()
        .then((response) => {
          setIsFetchingSession(false);
          setSession(response.session);
          sessionStorage.setItem(
            "MEDLINK_SESSION",
            JSON.stringify(response.data.session),
          );
          setUser(null);
        })
        .catch((error) => {
          setError(error);
          setIsFetchingSession(false);
        });
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/login`, {
      email: email,
      password: password,
    });
    sessionStorage.setItem(
      "MEDLINK_SESSION",
      JSON.stringify(response.data.session),
    );

    return response.data;
  };

  const signOut = async () => {
    try {
      const response = await axios.post(`${API_URL}/logout`);
      console.log(response.data);
      sessionStorage.removeItem("MEDLINK_SESSION");
      sessionStorage.removeItem("CURRENT_USER_PROFILE");
      return response.data;
    } catch (error) {
      return error;
    }
  };

  type SignUpProps = {
    name: string;
    email: string;
    hasAgreedToTerms: boolean;
    role: string;
    dob: Date;
    contact: string;
  };

  const signUp = async (userDetails: SignUpProps) => {
    const response = await axios.post(
      `${API_URL}/users/createUser`,
      userDetails,
    );

    return response.data;
  };

  /*const fetchUserById = async (userId: string) => {
    try {
      const response = await axios.get(`${API_URL}/users`, {
        params: {
          user_id: userId,
        },
      });
      const user = response.data.users[0];
      return user;
    } catch (error) {
      return null;
    }
  };*/
  return {
    session,
    user,
    error,
    isFetchingSession,
    signIn,
    signOut,
    signUp,
  };
};
