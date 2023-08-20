import { useEffect } from "react";
import PropTypes from "prop-types";

const Filters = ({
  data,
  selectedFilters,
  setSelectedFilters,
  filteredItems,
  setFilteredItems,
}) => {
  let types = [...new Set(data.map((card) => card.category))];

  const handleFilterChecked = (selectedType) => {
    if (selectedFilters.includes(selectedType)) {
      let filters = selectedFilters.filter((el) => el !== selectedType);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedType]);
    }
  };

  // console.log(selectedFilters);
  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedType) => {
        let temp = data.filter((card) => card.category === selectedType);
        return temp;
      });

      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...data]);
    }
  };

  const handleFilterToggle = () => {
    selectedFilters.forEach((type) => {
      document.getElementById(type).checked = false;
    });
    selectedFilters.length !== 0 && setSelectedFilters([]);
  };

  return (
    <div className="flex flex-col">
      <button
        type="button"
        className=" border border-solid border-black rounded-full px-2 mb-[2rem]"
        onClick={handleFilterToggle}
      >
        Turn off filters
      </button>
      <div className="grid grid-rows-4 grid-flow-col  gap-2">
        {types?.map((type) => (
          <div key={type} className=" flex flex-row items-center gap-2 px-2">
            <input value="0" id={type} onChange={() => handleFilterChecked(type)} type="checkbox" />
            <h1>{type}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

Filters.propTypes = {
  data: PropTypes.any,
  selectedFilters: PropTypes.any,
  setSelectedFilters: PropTypes.any,
  filteredItems: PropTypes.any,
  setFilteredItems: PropTypes.any,
};
export default Filters;
