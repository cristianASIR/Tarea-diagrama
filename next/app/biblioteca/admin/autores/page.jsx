"use client"
import AutorForm from "@/componentes/AutorForm";
import { useEffect, useState } from "react";

async function getAutores() {
    const res = await fetch("http://localhost:4000/autor")
    if (!res.ok) throw new Error("Failed to fetch autores")
    return res.json()
}

export default function AdminAutores() {
    const [autores, setAutores] = useState([])
    const [token, setToken] = useState(null)

    useEffect(() => {
        // Obtener el token del localStorage en el cliente
        const storedToken = localStorage.getItem("token")
        setToken(storedToken)
    }, [])

    async function addAutor(formData, token) {
        if (!token) throw new Error("No token found")

        const res = await fetch("http://localhost:4000/autor", {
            method: "POST",
            body: JSON.stringify({
                nombre: formData.get("nombre"),
                biografia: formData.get("biografia"),
                fotoUrl: formData.get("fotoUrl"),
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
        if (!res.ok) throw new Error("Failed to add autor")
    }

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold my-4">Administrar Autores</h1>
            <AutorForm onSubmit={(formData) => addAutor(formData, token)} />
            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Lista de Autores</h2>
                <ul className="space-y-4">
                    {autores.map((autor) => (
                        <li key={autor.id} className="flex items-center justify-between border p-4 rounded">
                            <div>
                                <h3 className="text-xl">{autor.nombre}</h3>
                                <p className="text-gray-600">{autor.biografia.substring(0,
                                    100)}...</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}