// components/formFields/FormField.jsx
import { useField } from "formik";

const FormField = ({ label, className = "", ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-1">
      {props.type !== "checkbox" && (
        <label className="text-gray-700 font-medium">{label}</label>
      )}

      {props.type === "select" ? (
        <select
          {...field}
          {...props}
          className={`border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 ${className}`}
        >
          <option value="">Select {label}</option>
          {props.options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : props.type === "checkbox" ? (
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input
            {...field}
            {...props}
            checked={field.value}
            className="h-5 w-5 text-purple-600"
          />
          <span className="text-gray-700">{label}</span>
        </label>
      ) : (
        <input
          {...field}
          {...props}
          className={`border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 ${className}`}
        />
      )}

      {meta.touched && meta.error && (
        <p className="text-red-500 text-sm">{meta.error}</p>
      )}
    </div>
  );
};

export default FormField;
