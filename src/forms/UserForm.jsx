// // forms Without useFomik Hook
// import { Formik, Form } from "formik";
// import { userSchema } from "../utils/validationSchema";
// import FormField from "../components/FormField";

// function UserForm() {
//   const initialValues = {
//     name: "",
//     email: "",
//     agree: false,
//     gender: "",
//     skill: "",     // ✅ this was missing earlier!
//     resume: null,
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={userSchema}
//       onSubmit={(values) => console.log("Submitted: ", values)}
//     >
//       <Form className="form bg-amber-200 p-4 space-y-4">
//         <FormField type="text" name="name" label="Name" />
//         <FormField type="email" name="email" label="Email" />
//         <FormField type="checkbox" name="agree" label="I Agree" />
//         <FormField
//           type="select"
//           name="gender"
//           label="Gender"
//           options={[
//             { label: "Male", value: "male" },
//             { label: "Female", value: "female" },
//           ]}
//         />
//         <FormField
//           type="select"
//           name="skill"
//           label="Skill"
//           options={[
//             { label: "React", value: "react" },
//             { label: "Node", value: "node" },
//           ]}
//         />
//         <FormField type="file" name="resume" label="Upload Resume" />
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Submit
//         </button>
//       </Form>
//     </Formik>
//   );
// }

// export default UserForm;



// forms With useFomik Hook

// forms/UserForm.jsx
import { useFormik } from "formik";
import { userSchema } from "../utils/validationSchema";

function UserForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      agree: false,
      gender: "",
      skill: "",
      resume: null,
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      console.log("Submitted: ", values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-white p-6 rounded-md shadow-2xl max-w-md mx-auto space-y-4"
    >
      {/* Name */}
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className="w-full border px-2 py-1"
        />
        {formik.touched.name && formik.errors.name && (
          <p className="text-red-500 text-sm">{formik.errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="w-full border px-2 py-1"
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-sm">{formik.errors.email}</p>
        )}
      </div>

      {/* Agree Checkbox */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="agree"
          onChange={formik.handleChange}
          checked={formik.values.agree}
        />
        <label>I Agree</label>
      </div>
      {formik.touched.agree && formik.errors.agree && (
        <p className="text-red-500 text-sm">{formik.errors.agree}</p>
      )}

      {/* Gender Select */}
      <div>
        <label>Gender</label>
        <select
          name="gender"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.gender}
          className="w-full border px-2 py-1"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {formik.touched.gender && formik.errors.gender && (
          <p className="text-red-500 text-sm">{formik.errors.gender}</p>
        )}
      </div>

      {/* Skill Select */}
      <div>
        <label>Skill</label>
        <select
          name="skill"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.skill}
          className="w-full border px-2 py-1"
        >
          <option value="">Select Skill</option>
          <option value="react">React</option>
          <option value="node">Node</option>
        </select>
        {formik.touched.skill && formik.errors.skill && (
          <p className="text-red-500 text-sm">{formik.errors.skill}</p>
        )}
      </div>

      {/* File Upload */}
      <div>
        <label>Resume</label>
        <input
          type="file"
          name="resume"
          onChange={(event) =>
            formik.setFieldValue("resume", event.currentTarget.files[0])
          }
          className="w-full"
        />
        {formik.touched.resume && formik.errors.resume && (
          <p className="text-red-500 text-sm">{formik.errors.resume}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}

export default UserForm;
