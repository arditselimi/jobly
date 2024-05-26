import MaxWidthWrapper from "./MaxWidWrapper";
import FeaturedJobs from "./FeaturedJobs";
import HowItWorks from "./HowItWorks";
import Faq from "./Faq";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Hero from "./Hero";

const HomeGuest = () => {
  return (
    <>
      <div className="bg-green-100">
        <MaxWidthWrapper>
          <Hero />
        </MaxWidthWrapper>
      </div>
      <HowItWorks />
      <FeaturedJobs />
      <Faq />
      <Testimonials />
      <Blog />
    </>
  );
};

export default HomeGuest;
