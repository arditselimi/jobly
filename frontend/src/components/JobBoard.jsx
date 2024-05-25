import { timeSincePost } from "../utils/timePost";

// icons
import { ChevronDown } from "lucide-react";

const JobBoard = () => {
  const jobs = [
    {
      id: 1,
      company: "Rio",
      jobTitle: "Software Developer",
      jobType: "Remote",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4 px-4">
        <p className="text-[12px]">{jobs.length} jobs finded.</p>
        <div className="flex gap-2 justify-between hover:bg-neutral-200 rounded-full cursor-pointer px-2">
          <p className="text-[14px]">
            <a>Most relevant</a>
          </p>
          <ChevronDown width={16} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {jobs.map((job) => {
          const { company, jobTitle, jobType, createdAt } = job;
          const { id } = job;

          const postTime = new Date(createdAt);

          return (
            <div
              key={id}
              className="py-2 border-b cursor-pointer px-4 hover:bg-neutral-100 transition-all"
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
