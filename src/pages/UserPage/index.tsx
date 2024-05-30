import { Link } from "react-router-dom";
import { CreateScrapForm } from "../../Components/forms/CreateScrapForm";

export const UserPage = (): JSX.Element => {
  return (
    <main>
      <h1>User page</h1>
      <Link to="/scraps">Criar scraps</Link>
    </main>
  );
};
