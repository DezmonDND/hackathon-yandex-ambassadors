import SearchButtons from "../SearchButtons/SearchButtons";
import SearchForm from "../SearchForm/SearchForm";
import "./SearchBlock.css";

function SearchBlock() {
  return (
    <section className="searchBlock">
      <SearchForm></SearchForm>
      <SearchButtons></SearchButtons>
    </section>
  );
}

export default SearchBlock;
