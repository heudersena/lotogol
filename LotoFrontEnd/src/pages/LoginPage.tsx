
import React from "react"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { pt } from 'yup-locale-pt';
Yup.setLocale(pt);

import { api } from "../services/api"
import { useAuth } from "../context/auth";


const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Preencha '),
    password: Yup.string().min(6, 'Too Short!').required('Required'),
});

const initialValues = { email: '', password: '' }


function LoginPage() {



    const onSubmitFormikLogin = ({ email, password }, actions) => {

        api.post("/login", { email, password }).then(response => {
            console.log(response)
        })
            .catch(error => {
                console.log(error)
            })

        actions.resetForm()

    }

    return (
        <section className="h-screen">
            <div className="px-6 h-full text-gray-800">
                <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                    <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0" >
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="w-full"
                            alt="Sample image" />
                    </div>
                    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <Formik initialValues={initialValues} validationSchema={SignupSchema} onSubmit={onSubmitFormikLogin}>
                            <Form>
                                <Field name="firstName" />
                                <div className="mb-6">
                                    <Field
                                        type="text"
                                        className="form-control block w-full px-4 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Digite seu e-mail"
                                        name="email"
                                    />
                                    <ErrorMessage className="text-red-500" component="span" name="email" />

                                </div>
                                <div className="mb-6">
                                    <Field
                                        type="password"
                                        className="form-control block w-full px-4 py-1 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Digite sua senha"
                                        name="password"
                                    />
                                    <ErrorMessage className="text-red-500" component="span" name="password" />
                                </div>
                                <div className="text-center lg:text-left">
                                    <button
                                        type="submit"
                                        className="inline-block px-7 py-2 bg-blue-500 text-white font-sans text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        Login
                                    </button>
                                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                        Ainda não tem sua conta?
                                        <a
                                            href="#!"
                                            className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                        > Cadastre-se</a>
                                    </p>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage
