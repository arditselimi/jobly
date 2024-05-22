const allJobs = [
  {
    id: 1,
    company: "ADT",
    jobPosition: "React Native Application",
    jobType: "Remote",
    jobSalary: ["74k", "112k"],
    desc: "ADT has been in the business of helping save lives since 1874. As the #1 smart home security provider in the U.S., we help protect and connect families, businesses and larger commercial customer every day.",
    youWillDo: [
      "Update project dependencies as needed",
      "Research and communicate recommendations to improve code quality product architecture",
      "Develop, maintain, and support the applications",
    ],
    yourSkills: ["React Native", "GraphQL", "CSS", "REST"],
    requiredSkills: ["3-5 Years Experience", "Bachelor's Degree in CSE"],
    logo: "https://media.glassdoor.com/sql/8014/cognizant-technology-solutions-squareLogo-1651131366751.png",
  },
  {
    id: 2,
    company: "Squint",
    jobPosition: "Ios Developer",
    jobType: "Hybrid",
    jobSalary: ["80k", "120k"],
    desc: "Squint is searching for a Software Engineer. In this role, you’ll help build the Squint platform as a primary contributor to Squint's mobile projects.",
    youWillDo: [
      "Contribute across all technical aspects of development at Squint.",
      "Create scalable architecture, review code, and perform all phases of the development life cycle.",
      "Collaborate with product management, design, and customers as stakeholders for your work.",
    ],
    yourSkills: ["Swift", "React Native", "SQL"],
    requiredSkills: ["At least 5 Years Experience", "Bachelor's Degree in CSE"],
    logo: "https://media.glassdoor.com/sql/1158985/seakeeper-squarelogo-1512630902905.png",
  },
  {
    id: 3,
    company: "FullSteam",
    jobPosition: "Software Developer",
    jobType: "Alabama",
    jobSalary: ["75k", "115k"],
    desc: "We're committed to bringing passion and customer focus to the business. SOS Inventory a Fullsteam organization is a cloud-based inventory management system designed to help businesses efficiently manage their inventory, orders, and manufacturing processes.",
    youWillDo: [
      "Working on our established .NET framework application to expand functionality and stability.",
      "Extend our current API backend to support our next generation of application capabilities.",
      "Extend our current integrations to additional third-party partners.",
    ],
    yourSkills: ["Vue.js", "GraphQL", "SQL", "REST"],
    requiredSkills: ["1-3 Years Experience", "Bachelor's Degree in CSE"],
    logo: "https://media.glassdoor.com/sql/13956/adt-security-services-squarelogo-1531502718004.png",
  },
  {
    id: 4,
    company: "Seakeeper",
    jobPosition: "Junior Business System Sofware Developer",
    jobType: "Leesport, PA",
    jobSalary: ["74k", "115k"],
    desc: "As our Junior Business Systems Software Developer, you’ll be a shared resource throughout the organization supporting both Seakeeper Ride and Seakeeper business systems projects.",
    youWillDo: [
      "Maintaining and optimizing custom-built solutions that come in the form of React Full-Stack Applications or SuiteScript stack (Clientscript, UserEvent, Suitelet, Restlet, Map/Reduce)",
      "Setting up our own custom integrations and API connections if the third-party tools allow",
      "Develop, maintain, and support the applications",
    ],
    yourSkills: ["JavaScript", "React", "CSS", "Git"],
    requiredSkills: ["1-2 Years Experience"],
    logo: "https://media.glassdoor.com/sql/18654/icf-squareLogo-1611666188823.png",
  },
  {
    id: 5,
    company: "ICF",
    jobPosition: ".Net Developer",
    jobType: "Remote",
    jobSalary: ["74k", "120k"],
    desc: "ICF is a rapidly growing, entrepreneurial, multi-faceted consulting company, seeking a .NET Developer to support our Department of Defense (DoD) Child and Youth Programs (CYP) project. ICF works with government representatives and users to build and enhance CYP systems.",
    youWillDo: [
      "Collaborate with others to define and implement optimal, complete solutions based on stakeholder needs.",
      "Design backend and frontend web-based software or customize software for client use with the aim of optimizing operational efficiency.",
      "Analyze and design databases within a solution stack, working individually or coordinating database development as part of a team.",
    ],
    yourSkills: ["React Native", "GraphQL", "CSS", "REST"],
    requiredSkills: ["2 Years Experience", "Bachelor's Degree in CSE"],
    logo: "https://media.glassdoor.com/sql/2577529/red-cedar-consultancy-squarelogo-1629793763143.png",
  },
];

const JobBoard = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        {allJobs.map((job) => {
          return (
            <div
              key={job.id}
              className="py-2 border-b cursor-pointer px-4 hover:bg-green-100 transition-all"
            >
              <div className="flex items-center gap-2">
                <img
                  src={job.logo}
                  alt={job.company}
                  style={{ width: "30px" }}
                  className="rounded-full border"
                />
                <span className="text-sm font-light">{job.company}</span>
              </div>
              <div className="flex justify-between gap-4">
                <div>
                  <h4 className="text-xl font-semibold mt-2">
                    {job.jobPosition}
                  </h4>
                  <span className="text-[14px] font-light">{job.jobType}</span>
                </div>
                <span className="text-[12px] text-green-900">24h</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobBoard;
