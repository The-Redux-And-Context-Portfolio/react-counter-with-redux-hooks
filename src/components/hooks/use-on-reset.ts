/* node modules */
import { useSelector, useDispatch } from "react-redux";

/* app imports */
import getSound from "../../redux-store/selectors/get-sound";
import { counterReset } from "../../redux-store/actions/counter";
import playResetSound from "../utils/reset-sound";

/* hook */
function useOnReset() {
  const sound = useSelector(getSound);
  const reduxDispatch = useDispatch();

  function handleOnReset() {
    reduxDispatch(counterReset());
    sound && playResetSound();
  }

  return { handleOnReset };
}

/* exports */
export default useOnReset;
