/* node modules */
import { useState, useEffect } from "react";
import numberToWords from "number-to-words";

/* hook */
function useNumberName(props: number) {
  const [numberName, setNumberName] = useState<string>("");

  useEffect(() => {
    const name = numberToWords.toWords(props);
    setNumberName(() => name);
  }, [props]);

  return { numberName };
}

/* exports */
export default useNumberName;
