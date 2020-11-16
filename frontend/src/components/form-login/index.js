import React from 'react'
import { ErrorMessage, Formik, Form, Field } from 'formik';

const FormLogin = () => {
    const handleSubmit = values => console.log(values)

    return (
        <>
            <Formik initialValues={{}} onSubmit={handleSubmit}>
                <Form>
                    <div>
                        <Field
                            name="email"
                            className="field email-field"
                        />

                        <ErrorMessage
                            component="span"
                            name="email"
                            className="error-email-field"
                        />
                    </div><div>
                        <Field
                            name="password"
                            className="field password-field"
                        />
                        
                        <ErrorMessage
                            component="span"
                            name="email"
                            className="error-email-field"
                        />
                    </div>
                    <button className="field-btn" type="submit">Enviar</button>
                </Form>
            </Formik>
        </>
    )
}
export default FormLogin