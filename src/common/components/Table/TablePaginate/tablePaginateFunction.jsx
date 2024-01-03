export const creatLinks = (numberOfPage, setPage) => {
  const links = [];
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

export const handleClick = (e, setPage, numberOfPage) => {
  const buttonCliked = e.target.textContent;
  switch (buttonCliked) {
    case "Previous":
      setPage((page) => (page > 1 ? page - 1 : 1));
      break;
    case "Next":
      setPage((page) => (page < numberOfPage ? page + 1 : numberOfPage));
      break;
    default:
  }
};
