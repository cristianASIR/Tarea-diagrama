import React from 'react'

export default function AutorForm({ onSubmit }) {
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        onSubmit(formData)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow-md">
            <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                <input type="text" name="nombre" id="nombre" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
            </div>
            <div>
                <label htmlFor="biografia" className="block text-sm font-medium text-gray-700">Biografía</label>
                <textarea name="biografia" id="biografia" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"></textarea>
            </div>
            <div>
                <label htmlFor="fotoUrl" className="block text-sm font-medium text-gray-700">Foto URL</label>
                <input type="url" name="fotoUrl" id="fotoUrl" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
            </div>
            <div>
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    Añadir Autor
                </button>
            </div>
        </form>
    )
}
