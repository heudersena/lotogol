import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup, faCog, faHome,faGamepad } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"



export default function Layout({ children }) {
    return (


        <div className="flex flex-col h-screen md:flex-row md:h-screen bg-gray-200">

            <div className="flex flex-col md:w-64 bg-gray-800 text-white">
                <div className="flex items-center justify-center h-14 md:h-20 border-b border-gray-700">
                    <span className="text-xl font-medium md:text-2xl">Loto<span>Dash</span></span>
                </div>
                <nav className="flex-1 p-4 overflow-y-auto">
                    <Link className="flex items-center py-2 px-4 text-gray-100 hover:bg-gray-700" to="/home">
                        <FontAwesomeIcon icon={faHome} />
                        <span className="ml-3">Página Inicial</span>
                    </Link>
                    <Link className="flex items-center py-2 px-4 text-gray-100 hover:bg-gray-700" to="/equipe">
                        <FontAwesomeIcon icon={faPeopleGroup} />
                        <span className="ml-3">Equipes</span>
                    </Link>
                    <Link className="flex items-center py-2 px-4 text-gray-100 hover:bg-gray-700" to="/game">
                    <FontAwesomeIcon icon={faGamepad} />
                        <span className="ml-3">Criar Jogos</span>
                    </Link>
                    <Link className="flex items-center py-2 px-4 text-gray-100 hover:bg-gray-700" to="#">
                        <FontAwesomeIcon icon={faCog} />
                        <span className="ml-3">Configurações</span>
                    </Link>
                </nav>
            </div>

            {/* Conteindo principal */}
            <div className="flex-1 p-4 md:p-10 overflow-x-auto">
                <div className="flex items-center justify-between md:hidden">
                    <button id="sidebar-toggle" className="text-gray-500 focus:outline-none">
                        <i className="fas fa-bars fa-lg"></i>
                    </button>
                    <span className="text-2xl font-bold">Loto<span>Dash</span></span>
                </div>
                {children}
            </div>
        </div>


    )
}