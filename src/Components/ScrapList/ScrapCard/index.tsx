import { useContext } from "react";
import { Link } from "react-router-dom";
import { ScrapContext } from "../../../providers/ScrapContext";
import { IScrap } from "../../../providers/ScrapContext/interfaces";
import { UserContext } from "../../../providers/UserContext";

interface IScrapCardProps {
  scrap: IScrap;
}

export const ScrapCard = ({ scrap }: IScrapCardProps): JSX.Element => {
  const { user } = useContext(UserContext);
  const { deleteScrap, selectScrapToEdit } = useContext(ScrapContext);
  return (
    <li>
      <div>
        <p>
          <strong>
            {scrap.author} | {scrap.email}
          </strong>
        </p>
        <p>{scrap?.content}</p>
      </div>
      <div>
        {user?.id === scrap.userId ? (
          <>
            <button onClick={() => selectScrapToEdit(scrap)}>Editar</button>

            <button onClick={() => deleteScrap(scrap.id)}>Deletar</button>
          </>
        ) : null}

        <Link to="">
          <button>Visualizar</button>
        </Link>
      </div>
    </li>
  );
};
