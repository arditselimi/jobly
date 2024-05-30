// components
import MaxWidthWrapper from "../components/MaxWidWrapper";
import SearchJobForm from "../components/SearchJobForm";
import JobBoard from "../components/JobBoard";
import SingleJob from "../components/SingleJob";
import { useState } from "react";

const Jobs = () => {
  const [jobClickedId, setJobClickedId] = useState(null);
  const [onlyRemoteJobs, setOnlyRemoteJobs] = useState(false);
  const [salaryFilter, setSalaryFilter] = useState(null);

  const handleJobClicked = (id) => {
    setJobClickedId(id);
  };

  const handleRemote = (bool) => {
    setOnlyRemoteJobs(bool);
  };

  const handleSalary = (item) => {
    setSalaryFilter(item);
  };

  return (
    <>
      <div className="bg-green-50 py-4">
        <MaxWidthWrapper>
          <SearchJobForm handleRemote={handleRemote} onSalary={handleSalary} />
        </MaxWidthWrapper>
      </div>

      <MaxWidthWrapper>
        <div className="flex flex-col gap-4 md:flex-row md:justify-between mt-6 h-screen">
          <div className="basis-2/6">
            <JobBoard
              handleJobClicked={handleJobClicked}
              onRemote={onlyRemoteJobs}
              salaryFilter={salaryFilter}
            />
          </div>
          <div className="basis-4/6	hidden md:flex">
            <SingleJob jobClickedId={jobClickedId} />
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Jobs;
