import './search-box.styles.css';

const SearchBox = ({ placeholder, handleChange }) => ( 
  <input type="search" placeholder={placeholder}
    className="search"
    onChange={handleChange}
  />
);

export default SearchBox;
