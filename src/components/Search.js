const Search = ({ search, setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div className="coin-search">
      <div className="coin-text">Search for a cryptocurrency</div>
      <form>
        <input
          type="text"
          placeholder="Search"
          className="coin-input"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Search;
