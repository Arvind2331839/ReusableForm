// import FormWizard from "react-form-wizard-component";
// import "react-form-wizard-component/dist/style.css";

// function WizardForm() {
//   const handleComplete = () => {
//     console.log("Form completed!");
//     // Handle form completion logic here
//   };
//   const tabChanged = ({
//     prevIndex,
//     nextIndex,
//   }) => {
//     console.log("prevIndex", prevIndex);
//     console.log("nextIndex", nextIndex);
//   };

//   return (
//     <>
//       <FormWizard
//         shape="circle"
//         color="#008000"
//         onComplete={handleComplete}
//         onTabChange={tabChanged}
//       >
//         <FormWizard.TabContent title="Personal details" icon="ti-user">
//           {/* Add your form inputs and components for the frst step */}
//           <h1>First Tab</h1>
//   <div class="flex flex-col items-center justify-center px-6 py-2 mx-auto lg:py-0">
    
//       <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//           <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              
//               <form class="space-y-4 md:space-y-6" action="#">
//                   <div>
//                       <label for="firstName" class="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
//                       <input type="firstName" name="firstName" id="firstName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Arvind " required=""/>
//                   </div>
//                   <div>
//                       <label for="lastName" class="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">last Name</label>
//                       <input type="lastName" name="lastName" id="lastName" placeholder="Kumar" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
//                   </div>
                 
//                 <div>
//                       <label for="age" class="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
//                       <input type="age" name="age" id="age" placeholder="Age" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
//                   </div>
//               </form>
//           </div>
//       </div>
//   </div>

//         </FormWizard.TabContent>
//         <FormWizard.TabContent title="contact Info" icon="ti-settings">
//           <h1>Second Tab</h1>
//         <div class="flex flex-col items-center justify-center px-6 py-2 mx-auto lg:py-0">
    
//       <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//           <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              
//               <form class="space-y-4 md:space-y-6" action="#">
//                  <div>
//                       <label for="mobile" class="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile no</label>
//                       <input type="mobile" name="mobile" id="mobile" placeholder="+91**********" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
//                   </div>
//                   <div>
//                       <label for="email" class="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
//                       <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
//                   </div>
                 
//                   <div>
//                       <label for="password" class="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//                       <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
//                   </div>
//               </form>
//           </div>
//       </div>
//   </div>
//         </FormWizard.TabContent>
//         <FormWizard.TabContent title="Additional info" icon="ti-check">
//           <h1>Third Tab</h1>
//          <div class="flex flex-col items-center justify-center px-6 py-2 mx-auto lg:py-0">
    
//       <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//           <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              
//               <form class="space-y-4 md:space-y-6" action="#">
//                   <div>
//                       <label for="experience" class="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Experience</label>
//                       <input type="experience" name="experience" id="experience" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
//                   </div>
//                   <div>
//                       <label for="role" class="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
//                       <input type="role" name="role" id="role" placeholder="React Developer" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
//                   </div>
                 
//                 <div>
//                       <label for="companyName" class="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Name</label>
//                       <input type="companyName" name="companyName" id="companyName" placeholder="Amazon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
//                   </div>
//               </form>
//           </div>
//       </div>
//   </div>
//         </FormWizard.TabContent>
//           <FormWizard.TabContent title="Additional info" icon="ti-check">
//           <h1>Last Tab</h1>
//          <h1>Submitted</h1>
//         </FormWizard.TabContent>
//       </FormWizard>
//       {/* add style */}
//       <style>{`
//         @import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
//       `}</style>
//     </>
//   );
// }


// export default WizardForm;


import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";

const personalSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  age: Yup.number().required("Age is required").positive().integer(),
});

const contactSchema = Yup.object({
  mobile: Yup.string().required("Mobile is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Min 6 characters").required("Password is required"),
});

const additionalSchema = Yup.object({
  experience: Yup.string().required("Experience is required"),
  role: Yup.string().required("Role is required"),
  companyName: Yup.string().required("Company name is required"),
});

const combinedSchema = personalSchema.concat(contactSchema).concat(additionalSchema);

function WizardForm() {
  const methods = useForm({
    resolver: yupResolver(combinedSchema),
    mode: "onBlur",
  });

  const { register, handleSubmit, trigger, getValues, formState: { errors } } = methods;

  const onComplete = (data) => {
    console.log("Final Submitted Data:", getValues());
    alert("Form submitted successfully!");
  };

  const handleTabChange = async ({ prevIndex, nextIndex }) => {
    let stepFields = [];
    if (prevIndex === 0) stepFields = ["firstName", "lastName", "age"];
    if (prevIndex === 1) stepFields = ["mobile", "email", "password"];
    if (prevIndex === 2) stepFields = ["experience", "role", "companyName"];
    const valid = await trigger(stepFields);
    return valid;
  };

  return (
    <FormProvider {...methods}>
      <FormWizard color="#2E8B57" shape="circle" onComplete={handleSubmit(onComplete)} onTabChange={handleTabChange}>
        <FormWizard.TabContent title="Personal details" icon="ti-user">
          <Input name="firstName" label="First Name" />
          <Input name="lastName" label="Last Name" />
          <Input name="age" label="Age" type="number" />
        </FormWizard.TabContent>

        <FormWizard.TabContent title="Contact Info" icon="ti-settings">
          <Input name="mobile" label="Mobile" />
          <Input name="email" label="Email" />
          <Input name="password" label="Password" type="password" />
        </FormWizard.TabContent>

        <FormWizard.TabContent title="Additional Info" icon="ti-check">
          <Input name="experience" label="Experience" />
          <Input name="role" label="Role" />
          <Input name="companyName" label="Company Name" />
        </FormWizard.TabContent>

        <FormWizard.TabContent title="Review & Submit" icon="ti-check">
          <pre className="bg-gray-100 p-4 rounded">
            {JSON.stringify(getValues(), null, 2)}
          </pre>
        </FormWizard.TabContent>
      </FormWizard>
    </FormProvider>
  );
}

function Input({ name, label, type = "text" }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="mb-4">
      <label className="block font-medium mb-1">{label}</label>
      <input
        {...register(name)}
        type={type}
        className="w-full p-2 border border-gray-300 rounded"
      />
      {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>}
    </div>
  );
}

export default WizardForm;

