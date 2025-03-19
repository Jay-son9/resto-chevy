import React, { useState } from "react";

const ReadMoreButton = ({ shortText, fullText }) => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="p-4">
      <p className="text-gray-300">
        {isReadMore ? fullText : shortText}
      </p>
      <button
        onClick={toggleReadMore}
        className="text-blue-500 mt-2 hover:underline focus:outline-none cursor-pointer"
      >
        {isReadMore ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default ReadMoreButton;
