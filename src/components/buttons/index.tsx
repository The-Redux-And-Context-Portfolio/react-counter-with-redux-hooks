/* node modules */
import React from "react";
import { useSelector, useDispatch } from "react-redux";

/* app imports */
import plusIconWhite from "../../assets/icons/plus-icon-ffffff.svg";
import minusIconWhite from "../../assets/icons/minus-icon-ffffff.svg";
import playClickSound from "../utils/click-sound";
import getSound from "../../redux-store/selectors/get-sound";
import {
  counterDecrement, counterIncrement
} from "../../redux-store/actions/counter";

/* component */
function Buttons(): JSX.Element {
  /* from the redux store */
  const sound = useSelector(getSound);
  const reduxDispatch = useDispatch();

  /* event handler */
  function handleOnIncrement() {
    reduxDispatch(counterIncrement())
    sound && playClickSound();
  }

  /* event handler */
  function handleOnDecrement() {
    reduxDispatch(counterDecrement());
    sound && playClickSound();
  }

  return (
    <>
      <div className="buttonContainer text-center customRow">
        {/* decrement button */}
        <button type="button" className="btn btn-default counterBtn white decrement"
        data-testid="decBtn"
        onClick={handleOnDecrement}>
          <img src={minusIconWhite} className="img-fluid center-block"
          alt="Decrement" title="Decrement"/>
        </button>

        {/* increment button */}
        <button type="button" className="btn btn-default counterBtn white increment"
        data-testid="incBtn"
        onClick={handleOnIncrement}>
          <img src={plusIconWhite} className="img-fluid center-block"
          alt="Increment" title="Increment"/>
        </button>
      </div>
    </>
  );
}

/* exports */
export default Buttons;
