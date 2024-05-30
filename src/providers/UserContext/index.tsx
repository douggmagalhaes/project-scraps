import { AxiosError, AxiosRequestConfig } from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import {
  UserCreateForm,
  UserLoginForm,
  UserProviderValues,
} from "./interfaces";

export const UserContext = createContext({} as UserProviderValues);

export const UserProvider = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  // talvez eu precise deixar o id do user salvo no token e mudar esse nome aqui
  //tokenLocalId
  const userTokenLocal = "@USERSCRAPS:TOKEN";
  const tokenLocal = localStorage.getItem(userTokenLocal);

  const userIdLocal = "@USERCRAPS:USERID";

  const [token, setToken] = useState(tokenLocal ? tokenLocal : "");
  const [loading, setLoading] = useState(false);

  const authHeader: AxiosRequestConfig = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const navigate = useNavigate();

  useEffect((): void => {
    const userId = localStorage.getItem(userIdLocal);
    //console.log(userId);

    const getUser = async (): Promise<void> => {
      try {
        setLoading(true);
        await api.get(`/users/${userId}`, authHeader);
        navigate("/user");
      } catch (error) {
        if (error instanceof AxiosError) {
          setToken("");
          localStorage.removeItem(userTokenLocal);
          localStorage.removeItem(userIdLocal);
          navigate("/");
          toast.error(error.response?.data);
        }
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      getUser();
    }
  }, []);

  const userRegister = async (payload: UserCreateForm): Promise<void> => {
    try {
      await api.post("/users", payload);
      toast.success("Usuário registrado com sucesso!");
      navigate("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data);
      }
    }
  };

  const userLogin = async (payload: UserLoginForm): Promise<void> => {
    try {
      const { data } = await api.post("/login", payload);

      localStorage.setItem(userTokenLocal, data.accessToken);
      setToken(data.accessToken);

      localStorage.setItem(userIdLocal, data.user.id);

      navigate("/user");
      toast.success("Você foi logado com sucesso!");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data);
      }
      console.log(error);
    }
  };

  const userLogout = (): void => {
    setToken("");
    localStorage.removeItem(userTokenLocal);
    localStorage.removeItem(userIdLocal);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        authHeader,
        loading,
        token,
        userLogin,
        userLogout,
        userRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
