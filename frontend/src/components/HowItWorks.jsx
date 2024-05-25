import { CheckCheck, Loader, SearchCheck } from "lucide-react";
import MaxWidthWrapper from "./MaxWidWrapper";

const items = [
  {
    id: 1,
    icon: <SearchCheck />,
    title: "Search the job",
    text: "Search your dream job. There are top companies waiting for your amazing skills",
  },
  {
    id: 2,
    icon: <CheckCheck />,
    title: "Apply for the job",
    text: "After finding the job. You just apply. Add your amazing CV or portfolio.",
  },
  {
    id: 3,
    icon: <Loader />,
    title: "Wait for response",
    text: "Wait for the response. If the company you applied for like your resume, they will contact you through email.",
  },
];

const HowItWorks = () => {
  return (
    <MaxWidthWrapper>
      <div className="py-8 md:py-16">
        <h2 className="text-3xl font-semibold text-green-800 text-center mb-8 border-b-2 w-[250px] mx-auto border-green-200">
          How Jobly Works
        </h2>

        <div className="flex flex-col items-center gap-4 md:grid md:grid-cols-3">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col items-center gap-4">
              <span className="text-green-800">{item.icon}</span>
              <h3 className="text-2xl text-green-800 font-semibold text-center">
                {item.title}
              </h3>
              <p className="text-center text-sm text-green-800">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default HowItWorks;
