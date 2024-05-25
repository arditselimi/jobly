import { Link } from "react-router-dom";
import MaxWidthWrapper from "./MaxWidWrapper";

const Login = () => {
  return (
    <div className="bg-green-100 py-12">
      <MaxWidthWrapper>
        <div className="flex flex-col text-center md:items-center">
          <h4 className="text-2xl md:text-4xl text-green-800 font-bold">
            Create Account
          </h4>

          <div className="mt-2 md:mt-4">
            <form>
              <div>
                <input
                  placeholder="Email"
                  className="border w-full md:w-[400px] px-4 py-2 rounded mt-2 md:mt-4 outline-none focus:border-green-500 text-green-900"
                  autoComplete="none"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="border w-full md:w-[400px] px-4 py-2 rounded mt-2 md:mt-4 outline-none focus:border-green-500 text-green-900"
                  autoComplete="none"
                />
              </div>
              <button className="bg-green-800 w-full md:w-[400px] rounded py-2 text-white mt-4 hover:bg-green-600">
                Login
              </button>
            </form>
            <span className="text-green-800 inline-block mt-5">
              You dont't have an account?{" "}
              <Link
                to="/register"
                className="underline hover:text-green-500 transition-all"
              >
                Register
              </Link>
            </span>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Login;
