// assumes very basic card format

const TimesTableCard = (numA, numB) => ({
  question: `What does ${numA} * ${numB} equal?`,
  answer: `${numA * numB}`
});

export default TimesTableCard;