import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log("Category Data:", data);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200">
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50"
        onClick={toggleAccordion}
      >
        <span className="text-lg font-semibold">
          {data?.title}({data?.itemCards.length})
        </span>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ⬇️
        </span>
      </div>

      {/* Accordion Body */}
      {isOpen && (
        <div className="px-4 pb-4">
          {data?.itemCards?.map((item) => (
            <div
              key={item?.card?.info?.id}
              className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
            >
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">
                  {item?.card?.info?.name}
                </h3>
                <p className="text-sm text-gray-500">
                  ₹
                  {(item?.card?.info?.defaultPrice ?? item?.card?.info?.price) /
                    100}
                </p>
              </div>
              <div className="ml-4">
                <button className="px-4 py-2 text-sm font-medium text-green-600 border border-green-600 rounded-md hover:bg-green-50">
                  Add +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
