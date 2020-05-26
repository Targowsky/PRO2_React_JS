import React from "react";
import PropTypes from "prop-types";

export default function TableHeader({
  columnsNames,
  setSelectedHeader,
  selectedHeader,
}) {
  return (
    <thead>
      <tr>
        {columnsNames.map((c) => (
          <th
            style={{
              backgroundColor: c == selectedHeader ? "lightgray" : "white",
            }}
            onClick={() => setSelectedHeader(c)}
            key={c}
          >
            {c}
          </th>
        ))}
      </tr>
    </thead>
  );
}
TableHeader.propTypes = {
  columnsNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedHeader: PropTypes.func.isRequired,
  selectedHeader: PropTypes.string.isRequired,
};
