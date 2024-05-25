import { useEffect } from "react";
import axios from "axios";

// components
import MaxWidthWrapper from "../components/MaxWidWrapper";
import SearchJobForm from "../components/SearchJobForm";
import JobBoard from "../components/JobBoard";
import SingleJob from "../components/SingleJob";

const Jobs = () => {
  useEffect(() => {
    const token = import.meta.env.VITE_API_TOKEN;

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/jobs?populate=*",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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
