import { Link } from "react-router-dom";
import { useState } from "react";
import useSigup from "../../hooks/useSigup";

const Signup = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [seletedGender, setSelectedGender] = useState("");

  const inputs = {
    fullname: "",
    username: "",
    password: "",
    confirmpassword: "",
    gender: "",
  };

  const { loading, signup } = useSigup();

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    inputs.confirmpassword = confirmpassword;
    inputs.fullname = fullname;
    inputs.username = username;
    inputs.password = password;
    inputs.gender = seletedGender;

    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding 
                        backdrop-filter backdrop-blur-lg bg-opacity-0"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">UserName</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Re-Enter Password"
              className="w-full input input-bordered h-10"
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
          </div>

          {/* //gender checkbox */}

          <div className="flex">
            <div className="form-control">
              <label className={`label gap-2 cursor-pointer `}>
                <span className="label-text">Male</span>
                <input
                  type="radio"
                  className="checkbox border-slate-900"
                  value="male"
                  onChange={handleGenderChange}
                  checked={seletedGender === "male"}
                />
              </label>
            </div>
            <div className="form-control">
              <label className={`label gap-2 cursor-pointer `}>
                <span className="label-text">Female</span>
                <input
                  type="radio"
                  value="female"
                  className="checkbox border-slate-900"
                  onChange={handleGenderChange}
                  checked={seletedGender === "female"}
                />
              </label>
            </div>
          </div>

          {/* //gender checkbox end */}

          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block"
          >
            Already have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
