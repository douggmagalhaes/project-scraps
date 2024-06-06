import { useContext } from "react";
import { Scrap } from "../../../providers/ScrapContext/interfaces";
import { UserContext } from "../../../providers/UserContext";

interface IScrapCardProps {
  scrap: Scrap;
}

export const ScrapCard = ({ scrap }: IScrapCardProps): JSX.Element => {
  const { user } = useContext(UserContext);
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
      <div>oxi</div>
    </li>
  );
};
