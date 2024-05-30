import { Link } from "react-router-dom";
import { CreateScrapForm } from "../../Components/forms/CreateScrapForm";

export const CreateScrapPage = (): JSX.Element => {
  return (
    <main>
      <h1>Create scrap page</h1>
      <div>
        <Link to="/user">Voltar</Link>

        <CreateScrapForm />
      </div>
    </main>
  );
};
