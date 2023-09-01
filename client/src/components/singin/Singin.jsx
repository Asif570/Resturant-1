import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import{ useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "../../firebase/firebase";
import { Context } from "../../main";
import { toast } from "react-toastify";
import Loader from "../loader/Loader";

const SignInPage = () => {
  const navigate = useNavigate();
  const { setUser ,user,loadding} = useContext(Context);
  const [info, setInfo] = useState({});
  const [error, setError] = useState("");
  if(!user && loadding ){
    return <Loader />
  }
  if(user){
    navigate("/");
    return
  }
  const ChangeHundler = (e) => {
    setError("");
    const { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const submitHundler = (e) => {
    e.preventDefault();
    const { email, password } = info;
    signInWithEmailAndPassword(Auth, email, password)
      .then((res) => {
        toast("Login Success !");
        setUser(res.user);
        navigate("/");
      })
      .catch((err) => setError(err.message));
  };
  const googleLoginHundler = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(Auth, provider).then((res) => {
      toast("Login Success !");
      setUser(res.user);
      navigate("/");
    });
  };
  const githubLoginHundler = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(Auth, provider).then((res) => {
      toast("Login Success !");
      setUser(res.user);
      navigate("/");
    });
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" shadow-md rounded px-8 py-6">
        <h2 className="text-2xl font-bold mb-5 text-white text-center">
          Log In
        </h2>
        {error && (
          <div className="border text-center border-red-500 bg-red-100 text-red-700 py-3 px-2">
            {error}
          </div>
        )}

        <form onSubmit={submitHundler}>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              onChange={ChangeHundler}
              required
              className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              onChange={ChangeHundler}
              required
              className="appearance-none border rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#f1550c] hover:bg-[#cc5a25] text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline  w-full  block"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
        <p>
          Dont have an account ?{" "}
          <Link to={"/user/register"} className="text-blue-600 underline">
            Register
          </Link>
        </p>
        <p className="text-center my-2">Or</p>
        <button
          onClick={googleLoginHundler}
          className="btn flex w-full bg-[#f1550c82] hover:bg-[#d0541b] text-white"
        >
          <FcGoogle className="text-2xl" />
          &nbsp; Google
        </button>
        <p className="text-center my-2">Or</p>
        <button
          onClick={githubLoginHundler}
          className="btn flex w-full bg-[#f1550c82] hover:bg-[#d0541b] text-white"
        >
          <BsGithub className="text-2xl" />
          &nbsp; Github
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
