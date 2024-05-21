import MaxWidthWrapper from "./MaxWidWrapper";

const featuredJobs = [
  {
    id: 1,
    company: "Dribble",
    companyImg:
      "https://assets.website-files.com/61139ac7385e7459f5a2c733/6113d825c83d2f268bba217b_icons8-dribbble-256.png",
    jobPosition: "Customer Support Agent",
    salaryPosition: ["40,000", "200,000"],
    jobType: "Remote",
    jobTime: "Full Time",
    category: "Project Management",
    location: "Miami, FL",
  },
  {
    id: 2,
    company: "Paypal",
    companyImg:
      "https://assets.website-files.com/61139ac7385e7459f5a2c733/6113d7fa595f5ae1a9e0495a_icons8-paypal-256.png",
    jobPosition: "General Ledger Accountant",
    salaryPosition: ["40,000", "200,000"],
    jobType: "Office",
    jobTime: "Part Time",
    category: ["Accounting", "Finance"],
    location: "London, UK",
  },
  {
    id: 3,
    company: "Apple",
    companyImg:
      "https://assets.website-files.com/61139ac7385e7459f5a2c733/6113d794a9ad5e00ca49f932_icons8-apple-logo-256.png",
    jobPosition: "Senior Product Designer",
    salaryPosition: ["40,000", "200,000"],
    jobType: "Office",
    jobTime: "Part Time",
    category: "Design",
    location: "Canada",
  },
];

const FeaturedJobs = () => {
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
            {featuredJobs.map((featuredJob) => (
              <div
                key={featuredJob.id}
                className="bg-white px-4 py-4 rounded shadow-sm hover:shadow-lg transition-all flex flex-col items-center cursor-pointer"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={featuredJob.companyImg}
                    alt={featuredJob.company}
                    width={50}
                  />
                  <p className="text-green-800 text-sm mt-2">
                    {featuredJob.company}
                  </p>
                </div>
                <h4 className="text-green-800 font-bold text-2xl mt-4 mb-4">
                  {featuredJob.jobPosition}
                </h4>

                <div className="text-neutral-400 text-sm text-center">
                  <span className="text-neutral-400 text-sm">
                    ${featuredJob.salaryPosition[0]}$ -{" "}
                    {featuredJob.salaryPosition[1]} / year
                  </span>{" "}
                  /{" "}
                  <span className="text-neutral-400 text-sm">
                    {featuredJob.jobType === "Office"
                      ? featuredJob.location
                      : featuredJob.jobType}
                  </span>{" "}
                  / <br />
                  <span className="text-neutral-400 text-sm">
                    {featuredJob.category} /{" "}
                  </span>
                  <span className="text-neutral-400 text-sm">
                    {featuredJob.jobTime}
                  </span>
                </div>
                <button className="bg-green-800 text-white px-8 py-2 mt-6 rounded hover:bg-green-700">
                  Apply For Job
                </button>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default FeaturedJobs;
