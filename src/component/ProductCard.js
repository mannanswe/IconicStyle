import { Link } from "react-router-dom";
import Icons from "../data/Icons";

const ProductCard = ({ item }) => {
  const { id, name, image, price } = item;
  return (
    <div className="col-md-3">
      <div className="product">
        <div className="card">
          <div className="product-img">
            <img src={image} alt={name} />
          </div>
          <div className="card-body d-flex flex-column gap-1">
            <p>{name} </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="product-price d-flex align-items-center gap-2">
                <p>${price} </p>
                <del>$2</del>
              </div>
              <div className="cart_action">
                <button className="btn btn-sm">
                  <img src={Icons.cart_btn_20} alt="" className="cart_btn_20" />
                  <img
                    src={Icons.cart_btn_20_hover}
                    alt=""
                    className="cart_btn_20_hover"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="quick-action">
            <div className="wishlist-icon">
              <img src={Icons.cardWishlist} alt="" className="w-auto h-auto" />
            </div>
            <Link to={`/productdetails/${id}`}>
              <div className="quick-view">
                <img src={Icons.cardEye} alt="" className="w-auto h-auto" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
