import * as yup from "yup";
import Input from "@/components/baseInput/Input";
import { userLogin } from "@/configs/redux/userSlice";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "@/configs/redux/hooks";
import { persistor } from "@/configs/redux/store";

const Login = () => {
  const { user, isError, isFetching } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (value) => {
      dispatch(
        userLogin({ username: "eve.holt@reqres.in", password: "cityslicka" })
      );
    },
    validationSchema: yup.object({
      username: yup.string().min(5).max(255).required(),
      password: yup.string().min(5).max(255).required(),
    }),
  });

  return (
    <>
      <div>is error {isError && "error"} | </div>
      <div>is loading {isFetching && "loading"} | </div>
      <div>img : {user?.img}</div>
      <button
        type="button"
        onClick={() => persistor.purge().then(() => alert("purged"))}
      >
        purge
      </button>
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
