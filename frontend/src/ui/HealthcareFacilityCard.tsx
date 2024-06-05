import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HealthcareFacility } from "@/utils/types";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GiPathDistance } from "react-icons/gi";
import { RiMapPinTimeLine } from "react-icons/ri";
import { API_URL } from "@/utils/API_URL";

export const HealthcareFacilityCard = ({
  healthcareFacility,
}: {
  healthcareFacility: HealthcareFacility;
}) => {
  const navigate = useNavigate();
  const [currentCoordinates, setCurrentCoordinates] =
    useState<GeolocationCoordinates | null>(null);
  const [distance, setDistance] = useState({
    distance: {
      value: 0,
    },
    duration: {
      value: 0,
    },
  });

  const getCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentCoordinates(position.coords);
      });
    } else {
      setCurrentCoordinates(null);
    }
  };

  const calculateDistance = async () => {
    getCurrentLocation();
    try {
      const response = await axios.get(`${API_URL}/distance`, {
        params: {
          origins: {
            latitude: currentCoordinates?.latitude,
            longitude: currentCoordinates?.longitude,
          },
          destinations: healthcareFacility.location.gps_coordinates,
        },
      });

      setDistance(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (currentCoordinates !== null) {
      calculateDistance();
    }
  }, []);
  return (
    <Card
      className="flex flex-wrap w-[250px] cursor-pointer"
      key={healthcareFacility.id}>
      <img
        src="https://www.eahealth.org/sites/www.eahealth.org/files/content/organisations/images/2018-02-25/Kenyata%20photos%201.jpg"
        className="w-[250px] p-2 rounded-2xl"
        alt={healthcareFacility.name}
      />
      <div className="w-fit">
        <CardHeader>
          <CardTitle>{healthcareFacility.name}</CardTitle>
          <CardDescription>{healthcareFacility.motto}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <div>
            <h2 className="font-semibold">Services </h2>
            {healthcareFacility.services
              .slice(0, 5)
              .map((service: string) => {
                return service;
              })
              .join(" , ")}
            .
          </div>

          <div className="flex items-center gap-5">
            <p className="flex items-center gap-1">
              <GiPathDistance />{" "}
              <span className="text-sm text-blue-500 italic">
                {distance?.distance.value > 1000
                  ? `${(distance?.distance.value / 1000).toPrecision(2)}KM`
                  : `${distance?.distance.value}M`}
              </span>
            </p>
            <p className="flex items-center gap-1">
              <RiMapPinTimeLine />{" "}
              <span className="text-sm text-blue-500 italic">
                {distance?.duration.value > 60
                  ? `${(distance?.duration.value / 60).toPrecision(1)}Min`
                  : `1 Min`}
              </span>
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap items-center justify-between gap-5">
          <Button>Contact Hospital</Button>
          <Button
            onClick={() =>
              navigate(`${healthcareFacility.id}`, {
                state: {
                  healthcareFacility: healthcareFacility,
                },
              })
            }>
            View Hospital Details
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};
