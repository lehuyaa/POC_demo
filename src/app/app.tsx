import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import Pages from "routes/Pages";
import Layout from "./Layout";

const App = (): JSX.Element => {
  return (
    <Fragment>
      <BrowserRouter>
        <Layout>
          <Pages />
        </Layout>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
