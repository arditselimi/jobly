import { useEffect, useState } from "react";
import { sliceParagraphs } from "../utils/slice";
import axios from "axios";

const SingleJob = () => {
  const singleJob = [
    {
      id: 1,
      company: "Rio",
      jobTitle: "Software Developer",
      jobType: "Remote",
      companyOverview: "Lot of coffe lot of pingpong.",
      youWillDo: "Code",
      requiredSkills: "html css javascript",
      mustHave: "Degree and 2 years of experience",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full border rounded-lg border-neutral-200">
        <div className="px-5 py-4">
          <div className="flex items-center gap-4">
            <span className="font-semibold">{singleJob.company}</span>
          </div>
          <h4 className="text-2xl mt-2">{singleJob.jobTitle}</h4>
          <span className="font-light text-sm">{singleJob.jobType}</span>

          <div className="mt-8">
            <span>Company Overview: </span>
            <p className="text-sm mt-3 text-neutral-600">
              {singleJob.companyReview}
            </p>

            <span className="font-semibold inline-block mt-4">
              What You'll Do:
              <ul className="mt-4">
                <li className="list-disc ml-6">
                  <p className="inline font-normal">{singleJob.youWillDo}</p>
                </li>
              </ul>
            </span>

            <div>
              <span className="font-semibold inline-block mt-4">
                Required:
                <ul className="mt-4">
                  <li className="ml-6 list-disc">
                    <p className="font-normal">{singleJob.requiredSkills}</p>
                  </li>
                </ul>
              </span>
            </div>

            <div>
              <span className="font-semibold inline-block mt-4">
                Skills you need to have:
                <ul className="mt-4 flex">
                  <li className="ml-6">
                    <p className="inline font-normal border px-2 p-1 rounded  text-neutral-700">
                      {singleJob.mustHave}
                    </p>
                  </li>
                </ul>
              </span>
            </div>
          </div>

          <button className="bg-green-500 text-white w-full text-xl py-2 px-16 rounded inline-block mt-8 hover:bg-green-600 transition-all">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
