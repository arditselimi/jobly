import { useEffect, useState } from "react";
import MaxWidthWrapper from "./MaxWidWrapper";

const tst = [
  {
    id: 1,
    imgSrc:
      "https://assets.website-files.com/61139ac7385e74ae2ca2c6fd/6113dc40d989d6cb18ee9c69_team-4.jpg",
    name: "John Doe",
    job: "Designer at Slack",
    text: "Amazing. Getting my job a week after applied here on Jobly. Give it a try, you will be amazed.",
  },
  {
    id: 2,
    imgSrc:
      "https://assets.website-files.com/61139ac7385e74ae2ca2c6fd/6113dc40a4c62aae3e4fe14c_team-6.jpg",
    name: "Jane Doe",
    job: "Frontend Dev at Slack",
    text: "Really great. I got my dreaaam job after applied here on Jobly. Really shocked, for good.",
  },
  {
    id: 3,
    imgSrc:
      "https://assets.website-files.com/61139ac7385e74ae2ca2c6fd/6113dc3e97d71de2a1efd0e0_team-2.jpg",
    name: "Lisa John",
    job: "Designer at Slack",
    text: "This is gold. Getting your dream job by justing applying here on Jobly looks a dream but it is reality. I have no idea why you are still waitinggg!",
  },
];

const Testimonials = () => {
  const [activeT, setActiveT] = useState(1);

  function nextSlide() {
    console.log(activeT);
    if (activeT > tst.length - 1) {
      return setActiveT(1);
    }

    setActiveT(activeT + 1);
  }

  useEffect(() => {
    const delay = 5000;

    setTimeout(() => {
      nextSlide();
    }, delay);

    return () => clearTimeout(delay);
  }, [activeT]);

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col items-center gap-6 py-8 md:py-24">
        <span className="text-sm bg-green-100 px-2 py-1 shadow-xl text-green-800 rounded">
          What People Think
        </span>
        <h2 className="text-2xl md:text-5xl text-green-800 font-bold text-center">
          Testimonials
        </h2>
        <div>
          {tst.map((t) => {
            let activeId = activeT === t.id;

            return (
              <div key={t.id}>
                {activeId && (
                  <div
                    key={t.id}
                    className="flex flex-col items-center gap-2 shadow-lg px-8 py-6 rounded-md"
                  >
                    <img
                      src={t.imgSrc}
                      alt={t.name}
                      className="rounded-full"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />

                    <p className="text-lg text-green-800 text-center md:text-2xl py-2">
                      "{t.text}"
                    </p>
                    <span className="text-green-800 font-bold text-sm">
                      {t.name}
                    </span>
                    <p className="text-green-800 font-semibold text-sm">
                      {t.job}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Testimonials;
