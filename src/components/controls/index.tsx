/* node modules */
import React from "react";

/* app imports */
import useOnReset from "../hooks/use-on-reset";
import useSoundHook from "../hooks/use-sound-hook";
import resetIconWhite from "../../assets/icons/reset-icon-white.svg";

/* component */
function Controls(): JSX.Element {
  const { handleOnReset } = useOnReset();
  const { handleOnSound, soundIcon } = useSoundHook();

  return (
    <>
      <div className="controls customRow">
        {/* sound toggle button */}
        <button type="button" className="btn btn-default"
          data-testid="soundBtn"
          onClick={handleOnSound}>
          <img {...soundIcon} />
        </button>

        {/* counter reset button */}
        <button type="button" className="btn btn-default"
          data-testid="resetBtn"
          onClick={handleOnReset}>
          <img src={resetIconWhite} className="img-fluid center-block"
          alt="Counter - Reset" title="Counter - Reset"/>
        </button>
      </div>
    </>
  );
}

/* exports */
export default Controls;
