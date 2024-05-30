import { useEffect, useState } from "react";
import { sliceParagraphs } from "../utils/slice";
import axios from "axios";

const SingleJob = ({ jobClickedId }) => {
  const [jobs, setJobs] = useState();
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
        setLoading(false);
        setJobs(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const mostRecentJobs = jobs.sort(
    (a, b) =>
      new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt)
  );

  const lastJob = mostRecentJobs[0];
  const jobClicked = mostRecentJobs.filter((job) => job.id === jobClickedId);

  const singleJob = jobClicked.length === 0 ? lastJob : jobClicked[0];

  const {
    company,
    companyReview,
    endSalary,
    startSalary,
    jobTitle,
    jobType,
    youWillDo,
    mustHave,
    requiredSkills,
  } = singleJob.attributes;

  return (
    <div className="w-full">
      <div className="w-full border rounded-lg border-neutral-200">
        <div className="px-5 py-4">
          <div className="flex items-center gap-4">
            <span className="font-semibold">{company}</span>
          </div>
          <h4 className="text-2xl mt-2">{jobTitle}</h4>
          <span className="font-light text-sm">{jobType}</span>

          <div className="mt-8">
            <span>Company Overview: </span>
            <p className="text-sm mt-3 text-neutral-600">{companyReview}</p>

            <span className="font-semibold inline-block mt-4">
              What You'll Do:
              <ul className="mt-4">
                {sliceParagraphs(youWillDo).map((text, index) => {
                  return (
                    <li
                      key={index}
                      className="list-disc ml-6 font-normal text-neutral-700"
                    >
                      {text}
                    </li>
                  );
                })}
              </ul>
            </span>

            <div>
              <span className="font-semibold inline-block mt-4">
                Must have:
                <ul className="mt-4">
                  {sliceParagraphs(mustHave).map((skill, index) => {
                    return (
                      <li key={index} className="ml-6 list-disc">
                        <p className="font-normal">{skill}</p>
                      </li>
                    );
                  })}
                </ul>
              </span>
            </div>

            <div>
              <span className="font-semibold inline-block mt-4">
                Skills you need to have:
                <ul className="mt-4 flex">
                  {sliceParagraphs(requiredSkills).map((skill, index) => {
                    return (
                      <li key={index} className="ml-6">
                        <p className="inline font-normal border px-2 p-1 rounded  text-neutral-700">
                          {skill}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </span>
            </div>
          </div>

          <button className="bg-green-500 text-white w-full text-xl py-2 px-16 rounded inline-block mt-8 hover:bg-green-600 transition-all">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
