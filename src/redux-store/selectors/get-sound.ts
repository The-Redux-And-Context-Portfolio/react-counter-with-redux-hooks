/* app imports */ 
import { AppReduxState } from "../types";

/* selector */ 
function getSound(state: AppReduxState) {
    const { sound } = state;
    return sound;
}

/* exports */
export default getSound;