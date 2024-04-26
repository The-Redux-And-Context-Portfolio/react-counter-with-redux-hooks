/* app imports */ 
import { AppReduxState } from "../types";

/* selector */
function getCounter(state: AppReduxState) {
    const { counter } = state;
    return counter;
}

/* exports */ 
export default getCounter;