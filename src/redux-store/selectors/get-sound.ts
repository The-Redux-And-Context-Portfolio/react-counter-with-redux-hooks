/* app imports */
import { AppReduxState } from "../types";

/**
 * @selector - returns a 'slice' or a portion of the redux state object and returns to the caller
 */
function getSound(state: AppReduxState) {
    const { sound } = state;
    return sound;
}

/* exports */
export default getSound;
