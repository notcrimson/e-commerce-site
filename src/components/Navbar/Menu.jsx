import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MenuElement = ({ name }) => {
  return (
    <li>
      <Link
        className="max-xl:py-[29px] max-xl:px-[59px] transition max-xl:hover:bg-secondary duration-200 ease-in"
        to={"/" + `${name}`}
      >
        {name}
      </Link>
    </li>
  );
};

MenuElement.propTypes = {
  name: PropTypes.string.isRequired,
};

const Menu = () => {
  return (
    <>
      <ul className="w-full flex max-xl:flex-col justify-between items-center xl:gap-9 ">
        <MenuElement name="Store" />
        <MenuElement name="Store" />
      </ul>
    </>
  );
};

export default Menu;
