import { Link } from "react-router-dom";
import { EditScrapForm } from "../../Components/forms/EditScrapForm";

export const EditScrapPage = (): JSX.Element => {
  return (
    <main>
      <h1>Edit scrap page</h1>
      <div>
        <EditScrapForm />
        <Link to="/user">Voltar</Link>
      </div>
    </main>
  );
};
