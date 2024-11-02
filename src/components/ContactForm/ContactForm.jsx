import s from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d+$/, "Must be a number")
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const nameId = nanoid(2);
const numberId = nanoid(2);

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    onAdd({
      id: nanoid(2),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" name="name" id={nameId} className={s.name} />
        <ErrorMessage name="name" component="span" />
        <label htmlFor={numberId}>Number</label>
        <Field type="text" name="number" className={s.number} />
        <ErrorMessage name="number" component="span" />
        <button className={s.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
