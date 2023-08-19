import { useEffect } from "react";
import PropTypes from "prop-types";

const Filters = ({
  data,
  selectedFilters,
  setSelectedFilters,
  filteredItems,
  setFilteredItems,
}) => {
  let types = [...new Set(data.map((card) => card.type))];

  const handleFilterChecked = (selectedType) => {
    if (selectedFilters.includes(selectedType)) {
      let filters = selectedFilters.filter((el) => el !== selectedType);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedType]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedType) => {
        let temp = data.filter((card) => card.type === selectedType);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...data]);
    }
  };

  Filters.propTypes = {
    data: PropTypes.any,
    selectedFilters: PropTypes.any,
    setSelectedFilters: PropTypes.any,
    filteredItems: PropTypes.any,
    setFilteredItems: PropTypes.any,
  };

  return (
    <div className="flex flex-col">
      {types?.map((type) => (
        <div key={type} className=" flex flex-row gap-2">
          <input onChange={() => handleFilterChecked(type)} type="checkbox" />
          <h1>{type}</h1>
          {/* <button>{type}</button> */}
        </div>
      ))}
    </div>
  );
};

export default Filters;
