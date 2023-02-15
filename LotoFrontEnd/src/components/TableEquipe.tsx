import React from "react"




export default function TableEquipe({ teams }) {
    return (
        <div className="bg-white shadow-md rounded my-6">
            <table className="w-full table-auto">
                <thead>
                    <tr className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">EQUIPE</th>
                        <th className="py-3 px-6 text-center w-8">Bandeira</th>
                        <th>ações</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {teams?.map(item => {
                        return (
                            <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left">
                                    <div className="flex items-center">
                                        <div className="mr-2">{item.team}</div>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <img src={item.photo} alt="" className="w-8"/>
                                </td>
                                <td>
                                    
                                </td>
                            </tr>
                        )
                    }

                    )}

                </tbody>
            </table>
        </div>

    )
}