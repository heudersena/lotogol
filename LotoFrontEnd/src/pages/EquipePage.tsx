import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTextHeight, faImage } from '@fortawesome/free-solid-svg-icons'

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { pt } from 'yup-locale-pt';
Yup.setLocale(pt);

import Layout from "../components/Layout";
import { api } from "../services/api";
import TableEquipe from "../components/TableEquipe";


const SignupSchema = Yup.object().shape({
    team: Yup.string().required(),
    photo: Yup.string().required(),
});

const initialValues = { team: '', photo: '' } as any





export default function EquipePage() {

    const onSubmitFormikEquipe = ({team,photo}, actions) => {
        console.log("ok")
        api.post("/team/store", { team, photo }).then(response => {
            console.log(response)
        })

        actions.resetForm()

    }


    return (
        <Layout>

            <h1 className="text-3xl font-bold">Gerenciamento dos times</h1>
            <p className="mt-4">Nessa pagina você poderá fazer todo o Gerenciamento da tabela de time.</p>

            <div className="mt-6">
                <Formik initialValues={initialValues} validationSchema={SignupSchema} onSubmit={onSubmitFormikEquipe}>
                    <Form>
                        <label className="relative block">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <FontAwesomeIcon icon={faTextHeight} />
                            </span>
                            <Field className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Nome do time" type="text" name="team" />
                        </label>
                        <ErrorMessage className="text-red-500" component="span" name="team" />
                        <div className="mt-4"></div>

                        <label className="relative block">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <FontAwesomeIcon icon={faImage} />
                            </span>
                            <Field className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Link da imagem do time" type="text" name="photo" />
                        </label>
                        <ErrorMessage className="text-red-500" component="span" name="photo" />

                        <div className="mt-4"></div>
                        <button type="submit" className="bg-green-500 py-1 px-2 rounded-sm uppercase font-semibold">cadastrar</button>
                    </Form>
                </Formik>
            </div>
            {/* VIEW EQUIPE */}
            <TableEquipe />
        </Layout>
    )
}