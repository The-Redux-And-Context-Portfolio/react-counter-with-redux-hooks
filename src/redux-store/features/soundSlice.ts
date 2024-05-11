/* app imports */
import { ActionType } from "../types/action";

/**
 * the reducer that takes care of the value of the counter. this will be controlled based on the
 * action that we are sending into the reducer
 **/
function soundReducer(state = true, action: ActionType) {
  switch (action.type) {
    case 'sound/off': {
      return false;
    }

    case 'sound/on': {
      return true;
    }

    default:
      return state;
  }
}

/* exports */
export default soundReducer;
