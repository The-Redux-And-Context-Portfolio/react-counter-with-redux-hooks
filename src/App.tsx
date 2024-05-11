/* node modules */
import React from "react";

/* app imports */
import "./common/css/common.scss";
import "./style.scss";
import Counter from "./components/counter/index";
import Buttons from "./components/buttons";
import Controls from "./components/controls";

/* component */
function App(): JSX.Element {
  return (
    <div className="mainContainer positionRelative">
      <Controls />
      <Counter />
      <Buttons />
    </div>
  );
}

/* exports */
export default App;
