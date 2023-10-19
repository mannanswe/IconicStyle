import { useState, useContext, useEffect } from "react";
import SearchBox from "../component/SearchBox";
import Icons from "../data/Icons";
import { ProductContext } from "../context/ProductContexxt";
import ProductCard from "../component/ProductCard";

const Home = () => {
  const { items } = useContext(ProductContext);

  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(items);
  }, [items]);

  return (
    <div className="common-wrapper">
      <div className="container-fluid">
        <div class="hero-bannar d-flex justify-content-between align-items-center">
          <div>
            <h3>
              Customize Your Dream Wardrobe <br />
              With Iconic Style.
            </h3>
          </div>
          <div>
            <img src={Icons.heroBannar} alt="" class="w-auto h-auto" />
          </div>
        </div>
        <div className="products-wrapper">
          <div className="categories-products d-flex">
            <div class="category-tab">
              <h5>Explore Category</h5>
            </div>
            <div className="products-tab-content">
              <div class="search-filter d-flex gap-4">
                <SearchBox setResults={setResults} />

                <div class="custom-dropdown">
                  <label for="" class="form-control">
                    Short By
                  </label>
                  <span class="arrow-icon"></span>
                  <ul id="myOptions" class="options-list">
                    <li>low to high</li>
                    <li>High to low</li>
                  </ul>
                </div>
              </div>
              <div className="productArea">
                <div className="row products">
                  {results.map((item) => {
                    return <ProductCard item={item} key={item.id} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
