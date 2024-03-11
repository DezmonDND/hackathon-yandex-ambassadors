import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="search">
      <button className="search__button" type="submit"></button>
      <input className="search__input" placeholder="Поиск"></input>
    </form>
  );
}

export default SearchForm;
