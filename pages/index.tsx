import { Page } from "../components/page";
import { Welcome } from "../components/welcome";
import { Catalog } from "../components/catalog";

const Home = () => {
  return (
    <Page>
      <Welcome />
      <Catalog />
    </Page>
  );
};

export default Home;