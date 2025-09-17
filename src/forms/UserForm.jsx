import { Formik, Form } from "formik";
import { userSchema } from "../utils/validationSchema";
import FormField from "../components/formFields/FormField";

function UserForm() {
  const initialValues = {
    name: "",
    email: "",
    agree: false,
    gender: "",
    skill: "",
    resume: null,
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100  px-4">
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={(values) => console.log("Submitted: ", values)}
      >
        <Form className="w-full max-w-lg bg-white p-8 shadow-2xl rounded-xl space-y-6 my-2">
          <h2 className="text-3xl font-bold text-center text-purple-600 mb-4">Sign Up</h2>

          <FormField
            type="text"
            name="name"
            label="Name"
            placeholder="Enter your name"
            className="rounded-md"
          />
          <FormField
            type="email"
            name="email"
            label="Email"
            placeholder="Enter your email"
            className="rounded-md"
          />
          <FormField
            type="select"
            name="gender"
            label="Gender"
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
            className="rounded-md"
          />
          <FormField
            type="select"
            name="skill"
            label="Skill"
            options={[
              { label: "React", value: "react" },
              { label: "Node", value: "node" },
            ]}
            className="rounded-md"
          />
          <FormField
            type="file"
            name="resume"
            label="Upload Resume"
            className="rounded-md"
          />
          <FormField
            type="checkbox"
            name="agree"
            label="I agree to the terms and conditions"
          />

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-purple-700 transition duration-300 shadow-md"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default UserForm;
