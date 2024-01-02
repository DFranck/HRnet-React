export const TableInfo = ({ length, totalLength }) => {
  return (
    <p>
      Showing 1 to {length < totalLength ? length : totalLength} of{" "}
      {totalLength} entries{" "}
    </p>
  );
};
