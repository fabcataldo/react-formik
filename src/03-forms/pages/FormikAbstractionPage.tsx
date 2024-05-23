import { Form, Formik } from "formik";
import '../styles/styles.css'
import * as Yup from 'yup'
import { MyCheckbox, MySelect, MyTextInput } from '../components'

export const FormikAbstractionPage = () => {
    return (
        <div>
            <h1>FormikAbstractionPage</h1>

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
                            <MyTextInput
                                label='First Name'
                                name='firstName'
                                placeholder='my name'
                            />

                            <MyTextInput
                                label='Last Name'
                                name='lastName'
                                placeholder='my surname'
                            />

                            <MyTextInput
                                label='Email Address'
                                name='email'
                                placeholder='email@dominio.com'
                            />

                            <MySelect label='Job Type' name='jobType'>
                                <option value="">Pick some type</option>
                                <option value="developer">developer</option>
                                <option value="designer">designer</option>
                                <option value="it-senior">it-senior</option>
                            </MySelect>

                            <MyCheckbox label='Terms and conditions' name='terms' />

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>

        </div>
    )
}
