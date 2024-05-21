import MaxWidthWrapper from "./MaxWidWrapper";
import FeaturedJobs from "./FeaturedJobs";
import HowItWorks from "./HowItWorks";
import Faq from "./Faq";
import Testimonials from "./Testimonials";

const HomeGuest = () => {
  return (
    <>
      <div className="bg-green-100">
        <MaxWidthWrapper>
          <div className="py-12 md:py-32">
            <div className="flex flex-col items-center md:items-start">
              <span className="bg-white shadow-sm px-4 py-2 rounded text-green-800 text-[12px] font-semibold">
                Build your future with us
              </span>
              <h1 className="text-4xl md:text-6xl text-green-800 font-bold mt-4 text-center md:text-start">
                Get your dream job with{" "}
                <span className="border-b-4 border-green-400">Jobly.</span>
              </h1>
              <p className="text-green-800 font-semibold mt-4 text-center">
                Find jobs, create trackable resumes and enrich your
                applications.
              </p>
              <form className="w-full mt-4 md:mt-8">
                <div className="w-full">
                  <input
                    placeholder="Job title"
                    className="px-4 py-2 md:py-4 outline-none shadow-sm w-full rounded md:w-[600px] focus:shadow-lg"
                  />
                  <button className="bg-green-700 font-bold text-white px-8 py-2 md:py-4 md:ml-2 rounded w-full mt-4 md:w-[150px] hover:bg-green-600">
                    Find Job
                  </button>
                </div>
              </form>
              <div className="flex gap-4 mt-4">
                <p className="text-neutral-400 text-[12px] md:text-sm">
                  Popular Categories:{" "}
                </p>
                <ul className="flex flex-wrap gap-2 text-neutral-500 text-[12px] md:text-sm">
                  <li className="hover:underline">
                    <a href="/">Customer Services</a>
                  </li>
                  <li className="hover:underline">
                    <a href="/">Project Managment</a>
                  </li>
                  <li className="hover:underline">
                    <a href="/">Development</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <HowItWorks />
      <FeaturedJobs />
      <Faq />
      <Testimonials />
    </>
  );
};

export default HomeGuest;
