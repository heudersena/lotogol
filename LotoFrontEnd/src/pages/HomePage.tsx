import React from "react"
import Layout from "../components/Layout"
import Table from "../components/Table"



export default function HomePage() {
    return (
        <Layout>
            <h1 className="text-3xl font-bold">Bem-vindo à Minha Aplicação</h1>
            <p className="mt-4">Este é o conteúdo principal da minha aplicação.</p>
            <Table />
        </Layout>
    )
}