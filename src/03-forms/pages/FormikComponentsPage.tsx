import { Field, Form, Formik, ErrorMessage } from "formik";
import '../styles/styles.css'
import * as Yup from 'yup'

export const FormikComponentsPage = () => {
    return (
        <div>
            <h1>Formik Components Page</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {
                    console.log('formik values')
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                            .max(15, 'Must have 15 characters or less')
                            .required('Mandatory field'),
                        lastName: Yup.string()
                            .max(15, 'Must have 15 characters or less')
                            .required('Mandatory field'),
                        email: Yup.string().email('Not a valid email'),
                        terms: Yup.boolean()
                                    .oneOf([true], 'Terms and conditions must be accepted'),
                        jobType: Yup.string()
                                    .notOneOf(['it-senior'], 'Option not permitted')
                                    .required('Requerido')
                    })
                }
            >
                {
                    (formik) => (
                        <Form noValidate>
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text"/>
                            <ErrorMessage name="firstName" component='span'/>

                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text"/>
                            <ErrorMessage name="lastName" component='span'/>

                            <label htmlFor="email">Email Address</label>
                            <Field name="email" type="text"/>
                            <ErrorMessage name="email" component='span'/>
                            
                            <label htmlFor="jobType">Job type</label>
                            <Field name="jobType" as="select">
                                <option value="">Pick some type</option>
                                <option value="developer">developer</option>
                                <option value="designer">designer</option>
                                <option value="it-senior">it-senior</option>
                            </Field>
                            <ErrorMessage name="jobType" component='span'/>

                            <label>
                                <Field name="terms" type="checkbox"/>
                                Terms and conditions
                            </label>
                            
                            <ErrorMessage name="terms" component='span'/>

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>

        </div>
    )
}
