import { Fragment } from "react";
import RouterApp from "./routes";
import Global from "./styles/Global";

function App() {
  return (
    <div>
      <Fragment>
      <RouterApp />
        <Global />
      </Fragment>
    </div>
  );
}

export default App;
