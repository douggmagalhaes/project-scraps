import { useContext } from "react";
import { Link } from "react-router-dom";
import { ScrapContext } from "../../../providers/ScrapContext";
import { IScrap } from "../../../providers/ScrapContext/interfaces";
import { UserContext } from "../../../providers/UserContext";
import { ButtonScrapCard } from "../../Buttons/ButtonScrapCard";
import { MdDelete, MdEdit, MdVisibility } from "react-icons/md";

interface IScrapCardProps {
  scrap: IScrap;
}

//<button onClick={() => selectScrapToEdit(scrap)}>Editar</button>
//<button onClick={() => deleteScrap(scrap.id)}>Deletar</button>
export const ScrapCard = ({ scrap }: IScrapCardProps): JSX.Element => {
  const { user } = useContext(UserContext);
  const { deleteScrap, selectScrapToEdit, selectScrapToView } =
    useContext(ScrapContext);
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
            <ButtonScrapCard
              onClick={() => selectScrapToEdit(scrap)}
              icon={MdEdit}
            />

            <ButtonScrapCard
              onClick={() => deleteScrap(scrap.id)}
              icon={MdDelete}
            />
          </>
        ) : null}

        <ButtonScrapCard
          onClick={() => selectScrapToView(scrap)}
          icon={MdVisibility}
        />
      </div>
    </li>
  );
};
