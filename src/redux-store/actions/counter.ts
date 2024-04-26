/* increment */
function counterIncrement() {
  return { type: "counter/increment" };
}

/* decrement */
function counterDecrement() {
  return { type: "counter/decrement" };
}

/* reset */
function counterReset() {
  return { type: "counter/reset" };
}

/* exports */
export {
  counterReset,
  counterDecrement,
  counterIncrement
};
