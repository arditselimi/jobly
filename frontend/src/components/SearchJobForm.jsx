import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { useEffect, useState } from "react";

const SearchJobForm = ({ handleRemote, onSalary }) => {
  const [isRemote, setIsRemote] = useState(false);
  const [filterSalary, setFilterSalary] = useState(false);

  const [salaryValue, setSalaryValue] = useState(null);

  const handleRemoteClick = () => {
    setIsRemote(!isRemote);
  };

  const handleSalaryClick = () => {
    setFilterSalary(!filterSalary);
    setSalaryValue("high");
  };

  useEffect(() => {
    handleRemote(isRemote);
  }, [isRemote]);

  useEffect(() => {
    onSalary(salaryValue);
  }, [salaryValue]);

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
        <div className="flex flex-wrap items-start gap-3">
          <div
            className={
              isRemote
                ? "bg-green-400 px-4 p-1 rounded-full"
                : "bg-green-100 px-4 p-1 rounded-full"
            }
          >
            <p
              className={"text-green-900 hover:text-green-700 cursor-pointer"}
              onClick={handleRemoteClick}
            >
              Remote only
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchJobForm;
