import { Link } from "react-router-dom";

const HeaderLoggedOut = ({ showLinks, handleShowLinks, handleHideLinks }) => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <Link
          to="/login"
          className="bg-green-600  md:block text-white px-4 md:px-12 py-1 md:py-2 rounded hover:bg-green-500 transition-all"
        >
          Log in
        </Link>
        <Link
          to="/register"
          className="hidden md:block border rounded px-4 md:px-12 py-1 md:py-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all"
        >
          Register
        </Link>
      </div>
    </div>
  );
};
export default HeaderLoggedOut;
