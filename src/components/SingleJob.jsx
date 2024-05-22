const singleJob = {
  id: 1,
  company: "ADT",
  jobPosition: "React Native Application",
  jobType: "Remote",
  jobSalary: ["74k", "112k"],
  desc: "ADT has been in the business of helping save lives since 1874. As the #1 smart home security provider in the U.S., we help protect and connect families, businesses and larger commercial customer every day.",
  youWillDo: [
    "Update project dependencies as needed",
    "Research and communicate recommendations to improve code quality product architecture",
    "Develop, maintain, and support the applications",
  ],
  yourSkills: ["React Native", "GraphQL", "CSS", "REST"],
  requiredSkills: ["3-5 Years Experience", "Bachelor's Degree in CSE"],
  logo: "https://media.glassdoor.com/sql/8014/cognizant-technology-solutions-squareLogo-1651131366751.png",
};

const SingleJob = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="w-full">
      <div className="w-full border rounded-lg border-neutral-200">
        <div key={singleJob.id} className="px-5 py-4">
          <div className="flex items-center gap-4">
            <img
              src={singleJob.logo}
              alt={singleJob.company}
              className="rounded-full"
              style={{ width: "40px" }}
            />
            <span className="font-semibold">{singleJob.company}</span>
          </div>
          <h4 className="text-2xl">{singleJob.jobPosition}</h4>
          <span className="font-light text-sm">{singleJob.jobType}</span>

          <div className="mt-8">
            <span>Company Overview: </span>
            <p className="text-sm mt-3 text-neutral-600">{singleJob.desc}</p>

            <span className="font-semibold inline-block mt-4">
              What You'll Do:
              <ul className="mt-4">
                {singleJob.youWillDo.map((txt) => (
                  <li className="list-disc ml-6">
                    <p className="inline font-normal">{txt}</p>
                  </li>
                ))}
              </ul>
            </span>

            <div>
              <span className="font-semibold inline-block mt-4">
                Required:
                <ul className="mt-4">
                  {singleJob.requiredSkills.map((txt) => (
                    <li className="ml-6">
                      - <p className="inline font-normal">{txt}</p>
                    </li>
                  ))}
                </ul>
              </span>
            </div>

            <div>
              <span className="font-semibold inline-block mt-4">
                Skills you need to have:
                <ul className="mt-4 flex">
                  {singleJob.yourSkills.map((txt) => (
                    <li className="ml-6">
                      <p className="inline font-normal border px-2 p-1 rounded  text-neutral-700">
                        {txt}
                      </p>
                    </li>
                  ))}
                </ul>
              </span>
            </div>
          </div>

          <button
            className="bg-green-500 text-white w-full text-xl py-2 px-16 rounded inline-block mt-8 hover:bg-green-600 transition-all"
            onClick={handleClick}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
