/* node modules */
import React from "react";
import { useSelector } from "react-redux";

/* app imports */
import useNumberName from "../hooks/use-number-name";
import getCounter from "../../redux-store/selectors/get-counter";

/* component */
function Counter(): JSX.Element {
  /* from redux */
  const counter = useSelector(getCounter);
  /* from custom hooks */
  const { numberName } = useNumberName(counter);

  return (
    <>
      <div className="posContainer text-center">
        {/* value the counter */}
        <span className="num">{ counter }</span>
        {/* name of the counter value in words */}
        <span className="name">{ numberName }</span>
      </div>
    </>
  );
}

/* exports */
export default Counter;
