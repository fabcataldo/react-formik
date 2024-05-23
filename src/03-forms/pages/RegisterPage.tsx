import { FormEvent } from 'react'
import '../styles/styles.css'
import { useForm } from '../hooks/useForm'

export const RegisterPage = () => {
    const {
        onChange,
        name,
        email,
        password1,
        password2,
        resetForm,
        isValidEmail
    } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    })

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <div>
            <h1>Register page</h1>

            <form noValidate onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={onChange}
                    name='name'
                    className='has-error'
                ></input>
                {name.trim().length <= 0 && <span>Este campo es necesario</span>}

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={onChange}
                    name='email'
                    className={`${!isValidEmail(email) && 'has-error'}`}
                ></input>
                {!isValidEmail(email) && <span>Email inválido</span>}

                <input
                    type="password"
                    placeholder="Password"
                    value={password1}
                    onChange={onChange}
                    name='password1'
                ></input>
                {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña tiene que tener 6 letras</span>}
                <input
                    type="password"
                    placeholder="Repeat Password"
                    value={password2}
                    onChange={onChange}
                    name='password2'
                ></input>
                {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password2.trim().length > 0 && password1 === password2 && <span>Las contraseñas deben de ser iguales</span>}

                <button type="submit">Create</button>
                <button type="button" onClick={resetForm}>Reset Form</button>
            </form>
        </div>
    )
}
