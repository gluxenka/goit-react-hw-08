import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

import { register } from "../../redux/auth/operations.js";

import css from "./RegistrationForm.module.css";

const INITIAL_REGISTRATION_FORM_VALUES = {
  name: "",
  email: "",
  password: "",
};

const REGISTRATION_FORM_VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register({ ...values }))
      .unwrap()
      .then((authState) => {
        toast.success(`Welcome to app: ${authState.user.name}`);
        actions.resetForm();
      })
      .catch(() => {
        toast.error("Unable to create account");
      });
  };

  return (
    <Formik
      initialValues={INITIAL_REGISTRATION_FORM_VALUES}
      validationSchema={REGISTRATION_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" />
          <ErrorMessage
            className={css.ErrorMessage}
            name="name"
            component="span"
          />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
          <ErrorMessage
            className={css.ErrorMessage}
            name="email"
            component="span"
          />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
          <ErrorMessage
            className={css.ErrorMessage}
            name="password"
            component="span"
          />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
