import { ChevronDown, SlidersHorizontal } from "lucide-react";

const SearchJobForm = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl md:text-4xl font-bold mb-2 text-green-800">
          Big opportunities are waiting for you.
        </h2>
        <p className="text-sm text-green-900 mb-5 md:text-[16px]">
          Search and find the job you always wanted.
        </p>
        <form className="flex gap-2">
          <input
            placeholder="Search your dream job"
            type="text"
            className="px-4  py-2 md:py-3 rounded w-full md:w-[670px] outline-none border focus:border-green-500 transition-all"
          />
          <button className="bg-green-800 text-white px-8 md:px-12 rounded py-2 md:py-3 hover:bg-green-700">
            Search
          </button>
        </form>
      </div>

      <div className="mt-8">
        <div className="flex flex-wrap gap-3">
          <div className="bg-green-100 px-4 p-1 rounded-full">
            <SlidersHorizontal className="text-green-900 hover:text-green-700 cursor-pointer" />
          </div>
          <div className="bg-green-100 px-4 p-1 rounded-full">
            <p className="text-green-900 hover:text-green-700 cursor-pointer">
              Remote only
            </p>
          </div>
          <div className="bg-green-100 text-green-900 px-4 py-1 rounded-full hover:text-green-700 cursor-pointer">
            <div className="flex gap-1">
              <p>Filter Salary</p>
              <ChevronDown style={{ width: "20px" }} />
            </div>
          </div>
          <div className="bg-green-100 text-green-900 px-4 py-1 rounded-full hover:text-green-700 cursor-pointer">
            <div className="flex gap-1">
              <p>Date posted</p>
              <ChevronDown style={{ width: "20px" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchJobForm;
