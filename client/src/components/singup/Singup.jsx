import { useContext, useState } from "react";
import { Auth } from "../../firebase/firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { Context } from "../../main";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Singup = () => {
  const navigate = useNavigate();
  const { setUser, user } = useContext(Context);
  const [info, setInfo] = useState({});
  const [error, setError] = useState("");
  const OnchangeHundeler = (e) => {
    setError("");
    const { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const from = location?.state?.from?.pathname || "/";
  const SubmitHundler = (e) => {
    e.preventDefault();
    const { email, password, Cpassword, username, photoUrl } = info;
    let Password;
    if (password === Cpassword) {
      setError("");
      Password = password;
      createUserWithEmailAndPassword(Auth, email, Password)
        .then((response) => {
          updateProfile(Auth.currentUser, {
            displayName: username,
            photoURL: photoUrl,
          });
          const data = response.user;
          toast("Singup Success !");
          setUser(data);
          navigate("/");
        })
        .catch((err) => setError(err.message));
      setInfo("");
    } else {
      setError("Please Confrim Your Password");
    }
  };
  const googleSingupHundler = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(Auth, provider)
      .then((response) => {
        const data = response.user;
        toast("Singup Success !");
        setUser(data);
        navigate("/");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold  text-white mb-10">
            Sign up for an account
          </h2>
        </div>
        {error && (
          <div className="border border-red-600 w-full py-5 text-red-500 bg-red-100 text-center">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-6 " onSubmit={SubmitHundler}>
          <div className="rounded-md shadow-sm space-y-[15px]">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                onChange={OnchangeHundeler}
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                onChange={OnchangeHundeler}
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={OnchangeHundeler}
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="Cpassword" className="sr-only">
                Confrim Password
              </label>
              <input
                id="Cpassword"
                name="Cpassword"
                type="password"
                onChange={OnchangeHundeler}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder=" Confrim Password"
              />
            </div>
            <div>
              <label htmlFor="photoUrl" className="sr-only">
                Your Photo URL
              </label>
              <input
                id="photoUrl"
                name="photoUrl"
                type="text"
                onChange={OnchangeHundeler}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="  Your Photo URL"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#f1550c] hover:bg-[#d0541b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>
        <p>
          Already have an Account ?{" "}
          <Link to={"/user/singin"} className="underline text-blue-600">
            Login
          </Link>
        </p>
        <p className="my-5 text-center">Or</p>
        <div className="text-center">
          <button
            onClick={googleSingupHundler}
            className="btn flex w-full bg-[#f1550c82] hover:bg-[#d0541b] text-white"
          >
            <FcGoogle className="text-2xl" />
            &nbsp; Google
          </button>
        </div>
      </div>
    </div>
  );
};
export default Singup;
