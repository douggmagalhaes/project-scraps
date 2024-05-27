import { AxiosRequestConfig } from "axios";
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

    const getUser = async (): Promise<void> => {
      try {
        setLoading(true);
        await api.get(`/users/${userId}`, authHeader);
        navigate("/home");
      } catch (error) {
        toast.error("Deu erro no auto login!");
        console.log(error);
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
      navigate("/login");
    } catch (error) {
      toast.error("Deu erro no register!");
      console.log(error);
    }
  };

  const userLogin = async (payload: UserLoginForm): Promise<void> => {
    try {
      const { data } = await api.post("/login", payload);

      localStorage.setItem(userTokenLocal, data.accessToken);
      setToken(data.accessToken);

      localStorage.setItem(userIdLocal, data.user.id);

      navigate("/home");
      toast.success("Você foi logado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Deu erro no login");
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
