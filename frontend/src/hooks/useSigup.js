import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSigup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullname,
    username,
    password,
    confirmpassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullname,
      username,
      password,
      confirmpassword,
      gender,
    });
    if (!success) return;

    try {
      console.log(
        "signup fields ",
        fullname,
        username,
        password,
        confirmpassword,
        gender
      );
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          username,
          password,
          confirmpassword,
          gender,
        }),
      });
      //   console.log(`res-> `, res);
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      //set the use to localstorage
        console.log(data);

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSigup;

function handleInputErrors({ fullname, username, password, confirmpassword }) {
  if (!fullname || !username || !password || !confirmpassword) {
    toast.error("Please fill all the fields");
    return false;
  }

  if (password !== confirmpassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
