import MaxWidthWrapper from "../components/MaxWidWrapper";
import SearchJobForm from "../components/SearchJobForm";
import JobBoard from "../components/JobBoard";
import SingleJob from "../components/SingleJob";

const Jobs = () => {
  return (
    <>
      <div className="bg-green-50 py-4">
        <MaxWidthWrapper>
          <SearchJobForm />
        </MaxWidthWrapper>
      </div>

      <MaxWidthWrapper>
        <div className="flex flex-col gap-4 md:flex-row md:justify-between mt-6 h-screen">
          <div className="basis-2/6">
            <JobBoard />
          </div>
          <div className="basis-4/6	hidden md:flex">
            <SingleJob />
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Jobs;
