import { Link } from "react-router-dom";
import HeaderLoggedOut from "./HeaderLoggedOut";
import MaxWidthWrapper from "./MaxWidWrapper";
import { useEffect, useState } from "react";
import { Menu, SquareX } from "lucide-react";

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

const Header = () => {
  const loggedIn = false;

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

  const handleShowLinks = (bool) => {
    setShowLinks(bool);
  };

  const handleHideLinks = (bool) => {
    setShowLinks(bool);
  };

  return (
    <MaxWidthWrapper>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-light text-green-700 text-xl">
            <Link to="/">Jobly</Link>
          </h2>
        </div>
        <div onClick={() => setShowLinks(false)}>
          <ul
            className={
              showLinks
                ? "block bg-white absolute top-14 left-[50%] translate-x-[-50%] border w-full flex flex-col gap-2 items-center"
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
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <HeaderLoggedOut
            showLinks={showLinks}
            handleShowLinks={handleShowLinks}
            handleHideLinks={handleHideLinks}
          />
          <div>
            {showLinks ? (
              <SquareX className="text-green-800 hover:text-green-600 cursor-pointer" />
            ) : (
              <Menu className="text-green-800 hover:text-green-600 cursor-pointer md:hidden" />
            )}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Header;
