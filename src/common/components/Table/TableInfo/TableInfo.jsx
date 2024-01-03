export const TableInfo = ({ displayLength, totalLength, numberOfPage }) => {
  let firstNumber;
  let secondNumber;
  if (numberOfPage === 1) {
    firstNumber = 1;
    secondNumber = displayLength;
  } else {
    firstNumber = (numberOfPage - 1) * displayLength + 1;
    secondNumber = firstNumber + displayLength - 1;
  }
  if (totalLength === 0) firstNumber = 0;
  return (
    <p>
      Showing {firstNumber} to
      {secondNumber < totalLength ? secondNumber : totalLength} of {totalLength}
      entries
    </p>
  );
};
