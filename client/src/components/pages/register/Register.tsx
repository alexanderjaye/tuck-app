import { TextField } from '@material-ui/core';
import { Field, Formik, FieldAttributes, useField } from 'formik'
import React from 'react'

// Custom edit of material ui "TextField" icon
const MyTextField: React.FC<FieldAttributes<{}>> = ({
  placeholder,
  ...props
}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      placeholder={placeholder}
      {...field}
      inputProps={{ className:"input"}}
      classes={{ root: "input-container"}}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

export default function LoginForm() {
  return (
    <div className="register-container">
      <div className="register">
        <div className="whiteTop">
          <h2>Register</h2>
        </div>
        {/* Set Formik form with email and password */}
        <Formik
          initialValues={{email:'', password:''}}
          onSubmit={(data, {setSubmitting}) => {
            setSubmitting(true);
            console.log(data);
            setSubmitting(false);
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit}) => (
          <form onSubmit={handleSubmit}>
            <Field 
              name="email" 
              type="input" 
              as={MyTextField}
              placeholder="Email@example.com"
            />
            <Field
              name="password"
              type="password"
              as={MyTextField}
              placeholder="Password"
            />
          </form>
          )}
        </Formik>
      </div>
    </div>
  )
}
