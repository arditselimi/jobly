import { useEffect, useState } from "react";
import axios from "axios";

import MaxWidthWrapper from "./MaxWidWrapper";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeT, setActiveT] = useState(1);

  function nextSlide() {
    if (activeT > testimonials.length - 1) {
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
  }, [activeT, testimonials]);

  useEffect(() => {
    const token = import.meta.env.VITE_API_TOKEN;

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/testimonials?populate=*",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTestimonials(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
          {testimonials.map((t) => {
            let activeId = activeT === t.id;

            const { author, jobOfTheAuthor, review } = t.attributes;

            const { url } =
              t.attributes.imageOfAuthor.data.attributes.formats.small;

            return (
              <div key={t.id}>
                {activeId && (
                  <div
                    key={t.id}
                    className="flex flex-col items-center gap-2 shadow-lg px-8 py-6 rounded-md  h-[300px] w-[1000px]"
                  >
                    <img
                      src={`http://localhost:1337${url}`}
                      alt={author}
                      className="rounded-full"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />

                    <p className="text-lg text-green-800 text-center md:text-2xl py-2">
                      "{review}"
                    </p>
                    <span className="text-green-800 font-bold text-sm">
                      {author}
                    </span>
                    <p className="text-green-800 font-semibold text-sm">
                      {jobOfTheAuthor}
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
