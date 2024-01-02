export const TableInfo = ({ length, totalLength, page }) => {
  let firstNumber;
  let secondNumber;
  if (page === 1) {
    firstNumber = 1;
    secondNumber = length;
  } else {
    firstNumber = (page - 1) * length + 1;
    secondNumber = firstNumber + length - 1;
  }

  return (
    <p>
      Showing {firstNumber} to
      {secondNumber < totalLength ? secondNumber : totalLength} of {totalLength}
      entries
    </p>
  );
};
