import "./tableInfo.css";
export const TableInfo = ({ displayLength, totalLength, pageNumber, data }) => {
  const totalDataLength = data.length;
  let firstNumber;
  let secondNumber;
  if (pageNumber === 1) {
    firstNumber = 1;
    secondNumber = displayLength;
  } else {
    firstNumber = (pageNumber - 1) * displayLength + 1;
    secondNumber = firstNumber + displayLength - 1;
  }
  if (totalLength === 0) firstNumber = 0;
  return (
    <p>
      Showing {firstNumber} to
      {secondNumber < totalLength ? secondNumber : totalLength} of {totalLength}{" "}
      entries{" "}
      {totalDataLength > totalLength && (
        <span>(filtered from {totalDataLength} total entries)</span>
      )}
    </p>
  );
};
