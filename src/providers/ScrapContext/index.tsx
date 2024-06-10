import { AxiosError, AxiosRequestConfig } from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { UserContext } from "../UserContext";
import {
  IScrap,
  TScrapCreateForm,
  TScrapProviderValues,
  TScrapUpdateForm,
} from "./interfaces";

export const ScrapContext = createContext({} as TScrapProviderValues);

export const ScrapProvider = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  const { authHeader } = useContext(UserContext);

  const [scrapList, setScrapList] = useState<IScrap[]>([]);
  const [editScrap, setEditScrap] = useState<IScrap | null>(null);
  const [viewScrap, setViewScrap] = useState<IScrap | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const setScraps = async (): Promise<void> => {
      try {
        const { data } = await api.get<IScrap[]>("/scraps");
        setScrapList(data);
      } catch (error) {
        console.log(error);
      }
    };

    setScraps();
  }, []);

  const scrapCreate = async (payload: TScrapCreateForm): Promise<void> => {
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

  const selectScrapToEdit = (scrap: IScrap): void => {
    setEditScrap(scrap);
    navigate("/scraps/edit");
  };

  const selectScrapToView = (scrap: IScrap): void => {
    setViewScrap(scrap);
    navigate("/scraps/view");
    console.log("cliquei nessa scrap:", viewScrap);
  };

  const updateScrap = async (scrap: IScrap): Promise<void> => {
    try {
      const newEditScrap = { ...editScrap, ...scrap };

      const { data } = await api.patch(
        `/scraps/${newEditScrap.id}`,
        newEditScrap,
        authHeader
      );

      const newScraps = scrapList.map((scrap) =>
        scrap.id === newEditScrap.id ? data : scrap
      );

      setEditScrap(null);
      setScrapList(newScraps);
      toast.success("Scrap Editada com sucesso!");
      navigate("/user");
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

  const deleteScrap = async (scrapId: number): Promise<void> => {
    try {
      await api.delete(`/scraps/${scrapId}`, authHeader);

      const filteredScraps = scrapList.filter((scrap) => scrap.id !== scrapId);
      setScrapList(filteredScraps);

      toast.success("Scrap excluída com sucesso!");
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
    <ScrapContext.Provider
      value={{
        scrapList,
        viewScrap,
        scrapCreate,
        deleteScrap,
        selectScrapToEdit,
        selectScrapToView,
        updateScrap,
        editScrap,
      }}
    >
      {children}
    </ScrapContext.Provider>
  );
};
