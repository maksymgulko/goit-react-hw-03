import s from "./SearchBox.module.css";

const SearchBox = ({ inputValue, onFilter }) => {
  return (
    <div className={s.search}>
      <p>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={inputValue}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};
export default SearchBox;
