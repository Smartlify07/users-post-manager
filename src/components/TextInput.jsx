/* eslint-disable react/prop-types */
import { useField } from "formik";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col w-10/12 gap-1 font-rubik relative lg:w-2/3">
      <label className="text-lg" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input
        className="py-3 px-4 rounded-sm capitalize focus:outline-none text-4xl placeholder:text-4xl"
        {...props}
        {...field}
      />
      {meta.touched && meta.error && (
        <p className="text-xs font-semibold text-red-500 absolute left-0 -top-3">
          {meta.error}
        </p>
      )}
    </div>
  );
};

export default TextInput;
