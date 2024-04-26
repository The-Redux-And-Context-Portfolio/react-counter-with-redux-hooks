/* app imports */
import getCounter from "../../redux-store/selectors/get-counter";
import getSound from "../../redux-store/selectors/get-sound";

/* t-suite */
describe("Get Counter Selector Test Suite", () => {
  const dummyState = {
    counter: 0,
    sound: false
  };

  test("returns the 'sound' field value from the state object", () => {
    const result = getSound(dummyState);
    expect(result).toBe(dummyState.sound);
  });

  test("returns the 'counter' field value from the state object", () => {
    const result = getCounter(dummyState);
    expect(result).toBe(dummyState.counter);
  });
});
