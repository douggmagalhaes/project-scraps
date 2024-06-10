import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ScrapContext } from "../../providers/ScrapContext";

export const ViewScrapPage = (): JSX.Element => {
  const { viewScrap } = useContext(ScrapContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!viewScrap) {
      navigate("/user");
    }
  }, [viewScrap]);
  return (
    <div>
      <h1>View scrap page</h1>
      <Link to="/user">Voltar</Link>

      <div>
        <h2>Scrap de: {viewScrap?.author}</h2>
        <p>{viewScrap?.content}</p>
      </div>
    </div>
  );
};
