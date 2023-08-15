import { Link } from "react-router-dom";
import "./Navbar.css";
import shoppingCart from "../../assets/shoppingCart.png";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center bg-secondary w-full">
      <Link to="/">Home</Link>
      <div className="font-semibold text-xl text-[#2e2929] py-6 flex flex-row mx-6">
        <Link to="/store">Store</Link>
        <div className="shopping-cart">
          <img src={shoppingCart} alt="shoppingCart" className="w-7" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
