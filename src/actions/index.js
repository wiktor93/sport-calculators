export const updateChosenCalculator = calculatorName => {
  return {
    type: "CHOSEN_CALCULATOR",
    payload: calculatorName
  };
};
