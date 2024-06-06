import { AxiosError } from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { UserContext } from "../UserContext";
import { Scrap, ScrapCreateForm, ScrapProviderValues } from "./interfaces";

export const ScrapContext = createContext({} as ScrapProviderValues);

export const ScrapProvider = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  const { authHeader, user } = useContext(UserContext);
  const [scrapList, setScrapList] = useState<Scrap[]>([]);
  //console.log("scrap context:", user);

  useEffect(() => {
    const setScraps = async (): Promise<void> => {
      try {
        const { data } = await api.get<Scrap[]>("/scraps");
        setScrapList(data);
      } catch (error) {
        console.log(error);
      }
    };

    setScraps();
  }, []);

  const scrapCreate = async (payload: ScrapCreateForm): Promise<void> => {
    try {
      const { data } = await api.post("/scraps", payload, authHeader);

      setScrapList([...scrapList, data]);
      toast.success("Scrap criada com sucesso!");
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.data) {
          toast.error(error.response?.data);
        }

        if (error.message) {
          toast.error(error.message);
        }
      }
      console.log(error);
    }
  };

  return (
    <ScrapContext.Provider value={{ scrapList, scrapCreate }}>
      {children}
    </ScrapContext.Provider>
  );
};
