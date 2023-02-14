import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTextHeight, faImage } from '@fortawesome/free-solid-svg-icons'
import Layout from "../components/Layout";



export default function EquipePage() {
    return (
        <Layout>
            <h1 className="text-3xl font-bold">Gerenciamento dos times</h1>
            <p className="mt-4">Nessa pagina você poderá fazer todo o Gerenciamento da tabela de time.</p>
            <div className="mt-6">
                <label className="relative block">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <FontAwesomeIcon icon={faTextHeight} />
                    </span>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Nome do time" type="text" name="equipe" />
                </label>
                <div className="mt-4"></div>
                <label className="relative block">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <FontAwesomeIcon icon={faImage} />
                    </span>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Link da imagem do time" type="text" name="photo" />
                </label>
                <div className="mt-4"></div>
                <button className="bg-green-500 py-1 px-2 rounded-sm uppercase font-semibold">cadastrar</button>
            </div>
        </Layout>
    )
}