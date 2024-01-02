// import paginationCreation from "./paginationCreation";

export const TablePaginate = ({ length, totalLength, setPage }) => {
  const numberOfPage = Math.ceil(totalLength / length);
  const links = [];
  const creatLinks = () => {
    for (let i = 0; i < numberOfPage; i++) {
      const newPage = i + 1;
      links.push(
        <button key={i} onClick={() => setPage(newPage)}>
          {i + 1}
        </button>
      );
    }
    return links;
  };
  creatLinks();
  return (
    <div>
      <button href="">Previous</button>
      <span>{links}</span>
      <button href="">Next</button>
    </div>
  );
};
