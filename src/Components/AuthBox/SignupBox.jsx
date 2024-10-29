import "./LogSign.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";



const userSchema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(6),
  })
  .required();

// eslint-disable-next-line react/prop-types
const SignupBox = ({ setBoxType }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

  const onSubmit = async(data) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/signup",
        data,)
        console.log(res.data);
        navigate("/user/login")
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Assuming 409 is the status code for "user already exists"
        setError("email", {
          type: "manual",
          message: "User already exists",
        });
      } else {
        setError("email", {
          type: "manual",
          message: "Registration failed",
        });
      }
      console.error(error);
    }
      
    }
  return (
    <div>
      <form className="AuthBox" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="input-field"
            {...register("firstName")}
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            className="input-field"
            {...register("lastName")}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            {...register("email")}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            {...register("password")}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <input type="submit" value="Sign Up" className="submit-btn" />
        <p>
          Already have an account{" "}
          <i onClick={() => setBoxType("login")}>login here</i>
        </p>
      </form>
    </div>
  );
};

export default SignupBox;
