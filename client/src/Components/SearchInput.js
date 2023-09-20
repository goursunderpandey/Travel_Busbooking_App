import React from "react";

const SearchInput = (props) => {
  const { setVal, data, placeholder } = props;
  return (
    <div>
      <input
        list="data"
        onChange={(e) => setVal(e.target.value)}
        type="search"
        className="w-80 form-control relative flex-auto min-w-0 block w-full px-3 py-3 text-bold font-bold text-gray-700 bg-white bg-clip-padding   transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder={placeholder}
      />
      <datalist id="data">
        {data.map((op, id) => (
          <option key={id}>{op}</option>
        ))}
      </datalist>
    </div>
  );
};

export default SearchInput;
