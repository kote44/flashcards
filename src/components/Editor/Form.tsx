// Libs
import React from "react"

// Forms
import { Formik, Form, Field } from "formik"

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  } as React.CSSProperties,
  button: {
    margin: "20px auto",
    width: 100,
  },
}

const EditorForm = () => {
  return (
    <div>
      <h1>This is editor form</h1>
      <Formik
        initialValues={{ front: "", back: "" }}
        onSubmit={values => {
          console.log("VALUES: ", values)
        }}
      >
        {({ isSubmitting }) => (
          <Form style={styles.container}>
            <label htmlFor="front">Front</label>
            <Field name="front" as="textarea" rows="10" />
            <label htmlFor="back">Back</label>
            <Field name="back" as="textarea" rows="10" />
            <button type="submit" disabled={isSubmitting} style={styles.button}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default EditorForm
