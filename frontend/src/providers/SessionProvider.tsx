import { Session } from "@supabase/supabase-js";
import { ReactNode, createContext, useContext } from "react";

const SessionContext = createContext<Session | null>(null);

export const SessionProvider = ({
  children,
  session,
}: {
  children: ReactNode;
  session: Session | null;
}) => {
  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(SessionContext);
  if (!ctx) {
    throw new Error("Context is not available");
  }

  return ctx;
};
