import MaxWidthWrapper from "../components/MaxWidWrapper";

const categories = [
  {
    id: 1,
    label: "Software Development",
    activeJobs: 1000,
    avgSalary: "80k",
  },
  {
    id: 2,
    label: "Design",
    activeJobs: 800,
    avgSalary: "70k",
  },
  {
    id: 3,
    label: "Accounting",
    activeJobs: 1000,
    avgSalary: "80k",
  },
  {
    id: 4,
    label: "Project Management",
    activeJobs: 1000,
    avgSalary: "80k",
  },
];

const Categories = () => {
  return (
    <>
      <div className="bg-green-50">
        <MaxWidthWrapper>
          <div>
            <h2 className="text-2xl font-bold text-green-800">Categories</h2>
            <p className="text-sm text-green-800 mt-1">
              Find out which is the category that has your dream job
            </p>
          </div>
        </MaxWidthWrapper>
      </div>

      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((c) => (
            <div className="bg-green-400 border border-green-900 rounded-xl px-4 py-6 text-white cursor-pointer hover:scale-110 transition-all">
              <h3 className="text-2xl border  pb-1 border-green-500 px-2 rounded-full text-center mb-4">
                {c.label}
              </h3>
              <div className="border border-green-800 px-2 py-4 bg-green-300 rounded">
                <p className="text-sm mt-2 text-green-800">
                  Over{" "}
                  <span className="border px-1 rounded border-green-800">
                    {c.activeJobs} +
                  </span>{" "}
                  active jobs currently...
                </p>
                <span className="inline-block mt-3 bg-green-800   px-2 rounded">
                  Avg. salary: {c.avgSalary} / year
                </span>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Categories;
