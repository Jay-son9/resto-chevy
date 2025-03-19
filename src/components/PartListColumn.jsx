import React from 'react';

const PartListColumn = ({ items, columnIndex }) => {
  return (
    <div className="border rounded-md p-2 shadow-lg">
      <ul className="space-y-1 text-sm text-gray-300 list-disc marker:text-sky-400">
        {items.map((item, index) => (
          <li key={index} className="py-2 text-gray-300 mr-4 hover:text-sky-400">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PartListColumn;
