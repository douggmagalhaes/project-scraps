import { useContext } from "react";
import { UserContext } from "./providers/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouterMain } from "./routes/RouterMain";

export const App = () => {
  const { loading } = useContext(UserContext);
  return (
    <>
      <ToastContainer theme="dark" />
      {loading ? null : (
        <>
          <RouterMain />
        </>
      )}
    </>
  );
};
