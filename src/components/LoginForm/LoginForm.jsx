import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

import { login } from "../../redux/auth/operations.js";

import css from "./LoginForm.module.css";

const INITIAL_LOGIN_FORM_VALUES = {
  email: "",
  password: "",
};

const LOGIN_FORM_VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login({ ...values }))
      .unwrap()
      .then((authState) => {
        toast.success(`Welcome to app: ${authState.user.name}`);
        actions.resetForm();
      })
      .catch(() => {
        toast.error("Unable to login");
      });
  };

  return (
    <Formik
      initialValues={INITIAL_LOGIN_FORM_VALUES}
      validationSchema={LOGIN_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
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
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
