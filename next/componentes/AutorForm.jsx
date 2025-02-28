'use client'
import { useState } from "react"

export default function AutorForm({ onSubmit }) {
    const [nombre, setNombre] = useState("")
    const [biografia, setBiografia] = useState("")
    const [fotoUrl, setFotoUrl] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("nombre", nombre)
        formData.append("biografia", biografia)
        formData.append("fotoUrl", fotoUrl)
        onSubmit(formData)
        setNombre("")
        setBiografia("")
        setFotoUrl("")
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minHeight: '100vh', padding: '20px', marginTop: '20px' }}>
            <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '500px', backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ marginBottom: '16px' }}>
                    <label htmlFor="nombre" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '16px' }}>
                    <label htmlFor="biografia" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                        Biografía
                    </label>
                    <textarea
                        id="biografia"
                        value={biografia}
                        onChange={(e) => setBiografia(e.target.value)}
                        style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '16px' }}>
                    <label htmlFor="fotoUrl" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                        URL de la foto
                    </label>
                    <input
                        type="url"
                        id="fotoUrl"
                        value={fotoUrl}
                        onChange={(e) => setFotoUrl(e.target.value)}
                        style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                        required
                    />
                </div>
                <button
                    type="submit"
                    style={{ width: '100%', padding: '10px', backgroundColor: '#4A90E2', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}
                >
                    Guardar Autor
                </button>
            </form>
        </div>
    )
}