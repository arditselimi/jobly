import { Minus, Plus } from "lucide-react";
import MaxWidthWrapper from "./MaxWidWrapper";
import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "What's the cost to post a featured job opening on Jobly?",
    answer: "It depends on how many days. So the price per day is 20$.",
  },
  {
    id: 2,
    question: "Can you really get a job through Jobly?",
    answer:
      "For sure. There are many people who did it and you can be one of them also. So just apply.",
  },
  {
    id: 3,
    question: "How much cost to post a job on Jobly?",
    answer: "So at the moment it's free. But soon will be paid so hurry up.",
  },
];

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  function handleClick(id) {
    if (id === activeFaq) {
      return setActiveFaq(null);
    }
    setActiveFaq(id);
  }

  return (
    <div className="bg-green-100 py-8 md:py-16">
      <MaxWidthWrapper>
        <div>
          <h2 className="text-2xl text-green-800 font-bold text-center mb-12 md:text-4xl">
            Thing people usually ask
          </h2>
          <div>
            {questions.map((q) => {
              let activeId = activeFaq === q.id;
              return (
                <div
                  key={q.id}
                  className="cursor-pointer border-b border-green-900/10"
                  onClick={() => handleClick(q.id)}
                >
                  <div className="flex items-center gap-2">
                    {activeId ? (
                      <Minus className="text-green-900" width={15} />
                    ) : (
                      <Plus className="text-green-900" width={15} />
                    )}

                    <h4 className="text-lg font-semibold text-green-700 border-neutral-200 pb-4 mt-4">
                      {q.question}
                    </h4>
                  </div>
                  <div>
                    {activeId && (
                      <p className="text-neutral-500 font-light text-[16px] py-2">
                        {q.answer}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
export default Faq;
