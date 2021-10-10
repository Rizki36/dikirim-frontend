import * as yup from "yup";
import Input from "@/components/baseInput/Input";
// import { login } from "@/configs/redux/actions/userAction";
// import { useDispatch } from "react-redux";
// import { useRouter } from "next/router";
import { useFormik } from "formik";

const Login = () => {
  // const router = useRouter();
  // const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (value) => {
      // dispatch(
      //   login({ username: value.username, password: value.password }, router)
      // );
    },
    validationSchema: yup.object({
      username: yup.string().min(5).max(255).required(),
      password: yup.string().min(5).max(255).required(),
    }),
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Input
          label="Username"
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
          stage={formik.errors.username ? "error" : "default"}
          inputDescription={formik.errors.username}
        />
        <Input
          label="Password"
          id="password"
          name="password"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.password}
          stage={formik.errors.password ? "error" : "default"}
          inputDescription={formik.errors.password}
        />
        <button type="submit" className="bg-indigo-800 text-white py-2 px-3">
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
