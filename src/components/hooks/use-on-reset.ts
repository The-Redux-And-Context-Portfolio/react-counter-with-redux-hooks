/* node modules */
import { useSelector, useDispatch } from "react-redux";

/* app imports */
import getSound from "../../redux-store/selectors/get-sound";
import { counterReset } from "../../redux-store/actions/counter";
import playResetSound from "../utils/reset-sound";

/**
 * @returns - an event handler that helps to send a reset command to the redux store. it makes the
 * value of the counter as 'zero'
 */
function useOnReset() {
  const sound = useSelector(getSound);
  const reduxDispatch = useDispatch();

  /* event handler */
  function handleOnReset() {
    reduxDispatch(counterReset());
    sound && playResetSound();
  }

  return { handleOnReset };
}

/* exports */
export default useOnReset;
