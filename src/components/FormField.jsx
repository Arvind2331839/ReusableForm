// components/FormField.jsx
import { Field, ErrorMessage } from "formik";

function FormField({ type, name, label, options }) {
  const renderField = () => {
    switch (type) {
      case "text":
      case "email":
      case "password":
      case "url":
      case "tel":
      case "search":
      case "number":
      case "color":
        return <Field  type={type} name={name} className="input bg-gray-300 p-2 m-1 rounded-xl" />;

      case "textarea":
        return <Field as="textarea" name={name} className="input" />;

      case "checkbox":
        return (
          <label>
            <Field type="checkbox" name={name} />
            {label}
          </label>
        );

      case "radio":
        return options?.map((opt) => (
          <label key={opt.value}>
            <Field type="radio" name={name} value={opt.value} />
            {opt.label}
          </label>
        ));

      case "select":
        return (
          <Field as="select" name={name} className="input">
            <option value="">Select {label}</option>
            {options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Field>
        );

      case "multiselect":
        return (
          <Field as="select" name={name} multiple className="input">
            {options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Field>
        );

      case "date":
      case "time":
      case "datetime-local":
        return <Field type={type} name={name} className="input" />;

      case "range":
        return <Field type="range" name={name} min="0" max="100" className="input" />;

      case "file":
        return (
          <Field name={name}>
            {({ form }) => (
              <input
                type="file"
                onChange={(event) =>
                  form.setFieldValue(name, event.currentTarget.files[0])
                }
                className="input"
              />
            )}
          </Field>
        );

      case "hidden":
        return <Field type="hidden" name={name} />;

      default:
        return <Field type="text" name={name} className="input" />;
    }
  };

  return (
    <div className="form-group">
      {type !== "checkbox" && type !== "hidden" && <label>{label}</label>}
      {renderField()}
      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );
}

export default FormField;
