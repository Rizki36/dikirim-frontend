import * as yup from "yup";
import Input from "@/components/baseInput/Input";
import { useFormik } from "formik";
import { getSession, signIn } from "next-auth/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect } from "react";
import { AuthInterface } from "../../../index";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (value) => {
      try {
        const res = await signIn("credentials", { redirect: false });
        if (res.error) {
          // erro
          console.log(res.error);
          return;
        }
        console.log(res);
        window.location.replace("/order");
      } catch (error) {
        toast.error(error.msg ?? "Terjadi kesalahan.");
        console.log(error);
      }
    },
    validationSchema: yup.object({
      username: yup.string().min(5).max(255).required(),
      password: yup.string().min(5).max(255).required(),
    }),
  });

  return (
    <>
      <div className="flex items-center justify-center h-screen w-screen">
        <form onSubmit={formik.handleSubmit}>
          <Input
            id="username"
            label="Username"
            autoComplete="none"
            type="text"
            stage={
              formik.touched.username && formik.errors.username
                ? "error"
                : "default"
            }
            inputDescription={
              formik.touched.username && formik.errors.username
                ? formik.errors.username
                : null
            }
            {...formik.getFieldProps("username")}
          />

          <Input
            label="Password"
            id="password"
            type="text"
            name="password"
            stage={
              formik.touched.password && formik.errors.password
                ? "error"
                : "default"
            }
            inputDescription={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : null
            }
            {...formik.getFieldProps("password")}
          />
          <button
            type="submit"
            className="bg-indigo-800 text-white py-2 px-3 rounded-lg"
          >
            Submit
          </button>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
};

Login.auth = {
  authenticated: "/",
} as AuthInterface;

export default Login;
