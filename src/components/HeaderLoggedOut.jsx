import { useEffect, useState } from "react";
import MaxWidthWrapper from "./MaxWidWrapper";
import { Menu, SquareX } from "lucide-react";
import { Link } from "react-router-dom";

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
  },
  {
    id: 4,
    label: "Post a job",
    url: "/post-job",
  },
];

const HeaderLoggedOut = () => {
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
            <Link to="/">Jobly</Link>
          </h2>
        </div>
        <div onClick={() => setShowLinks(false)}>
          <ul
            className={
              showLinks
                ? "block  bg-white absolute top-14 left-[50%] translate-x-[-50%] border w-full flex flex-col gap-2 items-center"
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
                  <Link
                    to={link.url}
                    className="text-green-900 hover:text-green-600"
                    onMouseEnter={handleSubmenu}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="bg-green-600  md:block text-white px-4 md:px-12 py-1 md:py-2 rounded hover:bg-green-500"
          >
            Log in
          </Link>
          <Link
            to="/register"
            className="hidden md:block border rounded px-4 md:px-12 py-1 md:py-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
          >
            Register
          </Link>
          {showLinks ? (
            <SquareX
              className="text-green-800 hover:text-green-600 cursor-pointer"
              onClick={() => setShowLinks(false)}
            />
          ) : (
            <Menu
              className="text-green-800 hover:text-green-600 cursor-pointer md:hidden"
              onClick={() => setShowLinks(true)}
            />
          )}
        </div>
      </header>
    </MaxWidthWrapper>
  );
};
export default HeaderLoggedOut;
