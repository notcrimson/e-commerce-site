import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MenuElement = ({ name, click }) => {
  return (
    <li onClick={click}>
      <Link
        className="max-xl:p-[29px] transition max-xl:hover:underline duration-200 ease-in"
        to={"/" + `${name}`}
      >
        {name}
      </Link>
    </li>
  );
};

MenuElement.propTypes = {
  name: PropTypes.string.isRequired,
  click: PropTypes.func,
};

const Menu = ({ onClick }) => {
  return (
    <>
      <ul className="flex max-xl:flex-col items-center xl:gap-9 xl:w-full max-xl:w-screen relative max-xl:bg-secondary-300 z-20">
        <MenuElement click={onClick} name="Store" />
        <MenuElement click={onClick} name="Store" />
      </ul>
    </>
  );
};

Menu.propTypes = {
  onClick: PropTypes.func,
};

export default Menu;
