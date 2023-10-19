import { useState, useContext } from "react";
import Icons from "../data/Icons";
import { ProductContext } from "../context/ProductContexxt";

const SearchBox = ({ setResults }) => {
  const { items } = useContext(ProductContext);
  const [input, setInput] = useState("");

  const filterProducts = (value) => {
    const searchresult = items?.filter((sitem) => {
      return value === ""
        ? sitem
        : sitem.name.toLowerCase().includes(value.toLowerCase());
    });
    setResults(searchresult);
  };

  const handleChange = (value) => {
    setInput(value);
    filterProducts(value);
  };

  return (
    <div class="search-box">
      <input
        type="text"
        class="form-control"
        placeholder="Search here.."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <img src={Icons.searchIcon} alt="" class="search_icon w-auto h-auto" />
    </div>
  );
};

export default SearchBox;
