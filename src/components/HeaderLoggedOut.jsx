import { useEffect, useState } from "react";
import MaxWidthWrapper from "./MaxWidWrapper";
import { Menu } from "lucide-react";

const navLinks = [
  {
    id: 1,
    label: "Home",
    url: "/",
  },
  {
    id: 2,
    label: "Jobs",
    url: "/jobs",
  },
  {
    id: 3,
    label: "Categories",
    url: "/categories",
    sublinks: [
      {
        id: 3.1,
        label: "Development",
        url: "/categories/development",
      },
      {
        id: 3.2,
        label: "Design",
        url: "/categories/design",
      },
      {
        id: 3.3,
        label: "Project Management",
        url: "/categories/project-management",
      },
    ],
  },
];

const HeaderLoggedOut = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);

    if (newWidth > 768) {
      setShowLinks(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSubmenu = (e) => {
    if (
      e.target.parentElement.children[0].innerHTML.toLowerCase() ===
      "categories"
    ) {
      setShowSubmenu(true);
    } else {
      setShowSubmenu(false);
    }
  };

  return (
    <MaxWidthWrapper>
      <header className="flex items-center justify-between">
        <div>
          <h2 className="font-light text-green-700 text-xl">
            <a href="/">Jobly</a>
          </h2>
        </div>
        <div>
          <ul
            className={
              showLinks
                ? "block  bg-white absolute top-12 left-[50%] translate-x-[-50%] border w-full flex flex-col gap-2 items-center"
                : "hidden md:flex gap-8"
            }
          >
            {navLinks.map((link) => {
              return (
                <li
                  key={link.id}
                  className={
                    showLinks
                      ? "border-b w-full text-center py-1  last-of-type:border-b-0  cursor-pointer"
                      : ""
                  }
                >
                  <a
                    href="/"
                    className="text-green-900 hover:text-green-600"
                    onMouseEnter={handleSubmenu}
                  >
                    {link.label}
                  </a>

                  {link.sublinks && (
                    <ul
                      className={
                        showSubmenu
                          ? " md:bg-white md:block md:absolute md:border md:rounded md:px-4 md:py-4 md:flex md:flex-col md:gap-2"
                          : "hidden"
                      }
                      onMouseLeave={() => setShowSubmenu(false)}
                    >
                      {link.sublinks.map((sublink) => (
                        <li
                          key={sublink.id}
                          className="bg-green-100 px-4 rounded mt-2 py-1 hover:bg-green-200"
                        >
                          <a
                            href={sublink.url}
                            className="text-green-800 px-2 py-1 "
                          >
                            {sublink.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex gap-4">
          <button className="bg-green-600 hidden md:block text-white px-4 md:px-12 py-1 md:py-2 rounded hover:bg-green-500">
            Log in
          </button>
          <button className="hidden md:block border rounded px-4 md:px-12 py-1 md:py-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
            Register
          </button>
          <Menu
            className="text-green-800 hover:text-green-600 cursor-pointer md:hidden"
            onClick={() => setShowLinks(!showLinks)}
          />
        </div>
      </header>
    </MaxWidthWrapper>
  );
};
export default HeaderLoggedOut;
