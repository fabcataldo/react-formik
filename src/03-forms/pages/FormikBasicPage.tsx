import { FormikErrors, useFormik } from "formik";
import '../styles/styles.css'

interface FormValues {
    firstName: string
    lastName: string
    email: string
}

export const FormikBasicPage = () => {
    const validate = ({ firstName, lastName, email }: FormValues) => {
        const errors: FormikErrors<FormValues> = {};

        if (!firstName) {
            errors.firstName = 'Required'
        } else if (firstName.length >= 15) {
            errors.firstName = 'Must be 15 characters or less'
        }

        if (!lastName) {
            errors.lastName = 'Required'
        } else if (lastName.length >= 10) {
            errors.lastName = 'Must be 10 characters or less'
        }

        if (!email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }

        return errors
    }

    const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log(values)
        },
        validate
    })


    return (
        <div>
            <h1>Formik basic tutorial</h1>

            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    value={values.firstName}
                    onBlur={handleBlur}
                ></input>
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    value={values.lastName}
                    onBlur={handleBlur}
                ></input>
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor="Email">Email Address</label>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                ></input>
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
