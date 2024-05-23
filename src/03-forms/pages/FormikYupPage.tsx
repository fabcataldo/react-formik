import { useFormik } from "formik";
import '../styles/styles.css'
import * as Yup from 'yup'

export const FormikYupPage = () => {
    const {
        handleSubmit,
        errors,
        touched,        
        getFieldProps
    } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log(values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                            .max(15, 'Must have 15 characters or less')
                            .required('Mandatory field'),
            lastName: Yup.string()
                            .max(15, 'Must have 15 characters or less')
                            .required('Mandatory field'),
            email: Yup.string().email('Not a valid email')
        })
    })


    return (
        <div>
            <h1>Formik Yup</h1>

            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="firstName">First Name</label>
                <input type="text" {...getFieldProps('firstName')}/>
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input type="text" {...getFieldProps('lastName')}/>
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor="Email">Email Address</label>
                <input type="email" {...getFieldProps('email')}/>
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
