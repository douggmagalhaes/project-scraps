import { useContext } from "react";
import { Link } from "react-router-dom";
import { ScrapContext } from "../../providers/ScrapContext";
import { ScrapCard } from "./ScrapCard";

export const ScrapList = (): JSX.Element => {
  const { scrapList } = useContext(ScrapContext);
  return (
    <div>
      <div>
        <h1>Lista de Scraps</h1>
        <Link to="/scraps">Deixar Scrap</Link>
      </div>
      <ul>
        {scrapList.map((scrap) => (
          <ScrapCard key={scrap.id} scrap={scrap} />
        ))}
      </ul>
    </div>
  );
};
