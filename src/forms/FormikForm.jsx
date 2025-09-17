import React from "react";
import { Formik, Form, Field } from "formik";
import { userSchema } from "../utils/validationSchema";



const FormikForm = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-green-700 via-blue-500 to-red-500 px-4">
    <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Sign Up
      </h1>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={userSchema}
        onSubmit={(values, actions) => {
          console.log("Submitted Values:", values);
          actions.resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className="space-y-5">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <Field
                name="name"
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.name && touched.name
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                placeholder="Enter your name"
              />
              {errors.name && touched.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Field
                name="email"
                type="email"
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.email && touched.email
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                placeholder="Enter your email"
              />
              {errors.email && touched.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <Field
                name="password"
                type="password"
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.password && touched.password
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                placeholder="Enter your password"
              />
              {errors.password && touched.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  </div>
);

export default FormikForm;
