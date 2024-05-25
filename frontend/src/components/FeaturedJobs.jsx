import MaxWidthWrapper from "./MaxWidWrapper";

import { useEffect, useState } from "react";
import axios from "axios";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState({});
  const [loading, setLoading] = useState(true);

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
        setJobs(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const featuredJobs = jobs
    .filter((job) =>
      job.attributes.categories.data.some(
        (category) => category.attributes.category === "Featured Jobs"
      )
    )
    .slice(0, 3);

  return (
    <div className="bg-green-100 py-4 md:py-12">
      <MaxWidthWrapper>
        <div>
          <div className="flex flex-col items-center gap-2 text-center md:text-start md:flex-row md:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-green-800 md:text-4xl">
                Featured Jobs
              </h3>
              <p className="mt-2 text-green-900 text-[12px] md:text-sm">
                Know your worth and find the job that qualify your life
              </p>
            </div>
            <button className="bg-green-800 text-white px-4 py-1 md:py-2 rounded hover:bg-green-600 transition-all">
              View All Listing
            </button>
          </div>

          <div className="flex justify-between flex-col gap-2 mt-6 md:flex-row md:mt-12">
            {featuredJobs.map((featuredJob) => {
              const {
                categories,
                company,
                jobTitle,
                jobType,
                startSalary,
                endSalary,
              } = featuredJob.attributes;

              const { category } =
                featuredJob.attributes.categories.data[0].attributes;

              return (
                <div
                  key={featuredJob.id}
                  className="bg-white px-4 py-4 rounded shadow-sm hover:shadow-lg transition-all flex flex-col items-center cursor-pointer"
                >
                  <div className="flex flex-col items-center">
                    <p className="text-green-800 text-sm mt-2">{company}</p>
                  </div>
                  <h4 className="text-green-800 font-bold text-2xl mt-4 mb-4">
                    {jobTitle}
                  </h4>

                  <div className="text-neutral-400 text-sm text-center">
                    <span className="text-neutral-400 text-sm">
                      ${startSalary}$ - {endSalary} / year
                    </span>{" "}
                    /{" "}
                    <span className="text-neutral-400 text-sm">{jobType}</span>{" "}
                    / <br />
                    <span className="text-neutral-400 text-sm">{category}</span>
                  </div>
                  <button className="bg-green-800 text-white px-8 py-2 mt-6 rounded hover:bg-green-700">
                    Apply For Job
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default FeaturedJobs;
