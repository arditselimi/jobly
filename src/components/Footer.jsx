import MaxWidthWrapper from "./MaxWidWrapper";

const footerLinks = [
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
    label: "Log in",
    url: "/login",
  },
  {
    id: 4,
    label: "Register",
    url: "/register",
  },
];

const footerLinks2 = [
  {
    id: 1,
    label: "About us",
    url: "/about-us",
  },
  {
    id: 2,
    label: "Contact us",
    url: "/contact-us",
  },
];

const Footer = () => {
  return (
    <MaxWidthWrapper>
      <footer>
        <h2 className="text-xl font-light text-green-700 border-b border-zinc-100 pb-4">
          <a href="/">Jobly</a>
        </h2>
        <div className="flex justify-between gap-4 flex-wrap  md:justify-start md:gap-48 mt-8 mb-8">
          <ul>
            {footerLinks.map((link) => (
              <li key={link.id}>
                <a className="text-green-800" href={link.url}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ul>
            {footerLinks2.map((link) => (
              <li key={link.id}>
                <a className="text-green-800" href={link.url}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-green-800 pt-8 border-t text-center">
          &copy; All Rights Reserved {new Date().getFullYear()}
        </p>
      </footer>
    </MaxWidthWrapper>
  );
};
export default Footer;
