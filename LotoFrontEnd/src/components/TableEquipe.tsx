import React from "react"




export default function TableEquipe() {
    return (
        <div className="bg-white shadow-md rounded my-6">
            <table className="w-full table-auto">
                <thead>
                    <tr className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Nome</th>
                        <th className="py-3 px-6 text-left">Email</th>
                        <th className="py-3 px-6 text-center">Telefone</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left whitespace-nowrap">João</td>
                        <td className="py-3 px-6 text-left">
                            <div className="flex items-center">
                                <div className="mr-2">joao@mail.com</div>
                            </div>
                        </td>
                        <td className="py-3 px-6 text-center">11 1234-5678</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left whitespace-nowrap">Maria</td>
                        <td className="py-3 px-6 text-left">
                            <div className="flex items-center">
                                <div className="mr-2">maria@mail.com</div>
                            </div>
                        </td>
                        <td className="py-3 px-6 text-center">21 9876-5432</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left whitespace-nowrap">Pedro</td>
                        <td className="py-3 px-6 text-left">
                            <div className="flex items-center">
                                <div className="mr-2">pedro@mail.com</div>
                            </div>
                        </td>
                        <td className="py-3 px-6 text-center">31 4567-8901</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}