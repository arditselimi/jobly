import MaxWidthWrapper from "./MaxWidWrapper";

const Apply = () => {
  return (
    <div className="h-full w-full bg-black/50 absolute top-0 left-0 flex justify-center items-center">
      <MaxWidthWrapper>
        <div className="bg-white border px-8 py-12 rounded">
          <h3 className="text-3xl text-green-800 font-bold">
            Apply for this job
          </h3>
          <p className="text-green-800 mt-1 text-sm">
            Apply and wait for response. The company will contact you through
            the email
          </p>
          <form>
            <div className="flex flex-col gap-1 mt-6">
              <label className="text-neutral-400 text-sm">First name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="border rounded px-4 py-2 outline-none focus:border-green-900"
              />
            </div>
            <div className="flex flex-col gap-1 mt-4">
              <label className="text-neutral-400 text-sm">Last name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="border rounded px-4 py-2 outline-none focus:border-green-900"
              />
            </div>
            <div className="flex flex-col gap-1 mt-4">
              <label className="text-neutral-400 text-sm">Email</label>
              <input
                type="text"
                placeholder="Enter your email"
                className="border rounded px-4 py-2 outline-none focus:border-green-900"
              />
            </div>
            <div className="flex flex-col gap-1 mt-4">
              <label className="text-neutral-400 text-sm">Country</label>
              <input
                type="text"
                placeholder="Enter your country"
                className="border rounded px-4 py-2 outline-none focus:border-green-900"
              />
            </div>
            <div className="flex flex-col gap-1 mt-4">
              <label className="text-neutral-400 text-sm">CV / Resume</label>
              <input
                type="file"
                className="border rounded px-4 py-2 outline-none focus:border-green-900"
              />
            </div>
            <button className="mt-5 bg-green-800 text-white px-16 py-2 rounded hover:bg-green-700">
              Apply
            </button>
            <button className="ml-2 mt-5 bg-red-600 text-white px-16 py-2 rounded hover:bg-red-700">
              Cancel
            </button>
          </form>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Apply;
