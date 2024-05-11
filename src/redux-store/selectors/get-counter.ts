/* app imports */
import { AppReduxState } from "../types";

/**
 * @selector - returns a 'slice' or a portion of the redux state object and returns to the caller
 */
function getCounter(state: AppReduxState) {
    const { counter } = state;
    return counter;
}

/* exports */
export default getCounter;
