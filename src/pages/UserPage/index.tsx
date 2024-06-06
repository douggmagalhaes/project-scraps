import { useContext } from "react";
import { Link } from "react-router-dom";
import { CreateScrapForm } from "../../Components/forms/CreateScrapForm";
import { ScrapList } from "../../Components/ScrapList";
import { ScrapContext } from "../../providers/ScrapContext";

export const UserPage = (): JSX.Element => {
  const { scrapList } = useContext(ScrapContext);
  //console.log("scraps:", scrapList);
  return (
    <main>
      <h1>User page</h1>
      <ScrapList />
    </main>
  );
};
