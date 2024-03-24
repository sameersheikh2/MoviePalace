import React from "react";

const SearchList = () => {
  return (
    <div className="h-auto hidden absolute z-10 w-96 bg-black bg-opacity-[90%] rounded-lg mt-2 bg-transparent text-white">
      <ul className="flex flex-col justify-center pt-1 items-left px-4  w-full">
        <li className="py-1 my-2 cursor-pointer px-2 hover:bg-gray-700 hover:bg-opacity-[40%]">
          hello
        </li>
        <hr className="w-full m-auto bg-gray-600 border-0 h-[1px]" />
        <li className="py-1 my-2 cursor-pointer px-2 hover:bg-gray-700 hover:bg-opacity-[40%]">
          list
        </li>
      </ul>
    </div>
  );
};

export default SearchList;
