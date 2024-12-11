import React from "react";

const CasteCard = ({ name, photo, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md dp m-2 h-[400px]">
      <img
        src={photo}
        alt={name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-xl font-semibold mt-4">{name}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};  

export default CasteCard;
