import { useField } from 'formik';
import styles from './FormInput.module.css';

export const FormInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input {...field} {...props}></input>
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </>
  );
};

//este componente lo saqué haciendo el tutorial de formik
