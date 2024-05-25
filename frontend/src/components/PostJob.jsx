import MaxWidthWrapper from "./MaxWidWrapper";

const PostJob = () => {
  return (
    <>
      <div className="bg-green-50">
        <MaxWidthWrapper>
          <div>
            <h2 className="text-2xl font-semibold text-green-800 md:text-4xl">
              Post a job
            </h2>
            <p className="text-green-800 mt-2">
              Matter of minutes to post a job on the best platform on internet.
            </p>
          </div>
        </MaxWidthWrapper>
      </div>

      <MaxWidthWrapper>
        <div>
          <form>
            <div className="flex flex-col">
              <label className="text-sm text-neutral-400">Company name</label>
              <input
                type="text"
                placeholder="Enter the company name"
                className="border px-2 py-2 mt-2 rounded outline-none md:w-[650px] focus:border-neutral-400"
              />
            </div>

            <div className="flex flex-col mt-5">
              <label className="text-sm text-neutral-400">
                Company Overview
              </label>
              <textarea
                minLength={10}
                maxLength={200}
                type="text"
                placeholder="Enter the company overview"
                className="border px-2 py-2 mt-2 rounded outline-none md:w-[650px] focus:border-neutral-400"
              />
            </div>

            <div className="flex flex-col mt-5">
              <label className="text-sm text-neutral-400">Job title</label>
              <input
                type="text"
                placeholder="Enter the job title"
                className="border px-2 py-2 mt-2 rounded outline-none md:w-[650px] focus:border-neutral-400"
              />
            </div>

            <div className="flex flex-col mt-5">
              <label className="text-sm text-neutral-400">
                Responsibilities:
              </label>
              <textarea
                type="text"
                placeholder="Ex: Develop, maintain and support the applications"
                className="border px-2 py-2 mt-2 rounded outline-none md:w-[650px] focus:border-neutral-400"
              />
            </div>

            <div className="flex flex-col mt-5">
              <label className="text-sm text-neutral-400">Required:</label>
              <textarea
                type="text"
                placeholder="Ex: experience, degree..."
                className="border px-2 py-2 mt-2 rounded outline-none md:w-[650px] focus:border-neutral-400"
              />
            </div>

            <div className="flex flex-col mt-5">
              <label className="text-sm text-neutral-400">
                Must have skills:
              </label>
              <textarea
                type="text"
                placeholder="Ex: HTML, CSS, React.."
                className="border px-2 py-2 mt-2 rounded outline-none md:w-[650px] focus:border-neutral-400"
              />
            </div>

            <div className="flex flex-col mt-5">
              <label className="text-sm text-neutral-400">Job type</label>
              <select className="mt-4 border px-4 py-2 rounded w-[250px] appearance-none outline-none">
                <option value="remote">Remote</option>
                <option value="hybrid">Hybrid</option>
                <option value="office">Office</option>
              </select>
            </div>

            <button className="bg-green-800 text-white py-2 w-full md:w-[650px] rounded mt-4 hover:bg-green-700">
              Post
            </button>
          </form>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default PostJob;
