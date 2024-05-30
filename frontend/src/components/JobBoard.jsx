import { useEffect, useState } from "react";
import axios from "axios";

import { timeSincePost } from "../utils/timePost";

const JobBoard = ({ handleJobClicked, onRemote }) => {
  const [allJobs, setAllJobs] = useState([]);
  const [loading, setLoading] = useState([]);

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

        setAllJobs(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const mostRecentJobs = allJobs.sort(
    (a, b) =>
      new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt)
  );

  const remoteJobs = mostRecentJobs.filter(
    (job) => job.attributes.jobType === "Remote"
  );

  const jobs = onRemote ? remoteJobs : mostRecentJobs;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4 px-4">
        <p className="text-[12px]">{jobs.length} jobs finded.</p>
      </div>
      <div className="flex flex-col gap-2">
        {jobs.map((job) => {
          const { company, jobTitle, jobType, createdAt } = job.attributes;
          const { id } = job;
          const postTime = new Date(createdAt);

          return (
            <div
              key={id}
              className="py-2 border-b cursor-pointer px-4 hover:bg-neutral-100 transition-all"
              onClick={() => handleJobClicked(id)}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-light">{company}</span>
              </div>
              <div className="flex justify-between gap-4">
                <div>
                  <h4 className="text-xl font-semibold mt-2">{jobTitle}</h4>
                  <span className="text-[14px] font-light">{jobType}</span>
                </div>
                <span className="text-[12px] text-green-900">
                  {timeSincePost(postTime)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobBoard;
