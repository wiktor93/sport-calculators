export default (prevState = "", action) => {
  switch (action.type) {
    case "CHOSEN_CALCULATOR":
      return action.payload;

    default:
      return prevState;
  }
};
