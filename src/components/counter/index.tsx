/* node modules */
import React from "react";
import { useSelector } from "react-redux";

/* app imports */
import useNumberName from "../hooks/use-number-name";
import getCounter from "../../redux-store/selectors/get-counter";

/* component */
function Counter(): JSX.Element {
  const counter = useSelector(getCounter);
  const { numberName } = useNumberName(counter);

  return (
    <>
      <div className="posContainer text-center">
        <span className="num">{ counter }</span>
        <span className="name">{ numberName }</span>
      </div>
    </>
  );
}

/* exports */
export default Counter;
