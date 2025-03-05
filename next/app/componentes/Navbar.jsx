"use client"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch("http://localhost:4000/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            })
            console.log(JSON.stringify({ email, password }));
            if (response.ok) {
                const data = await response.json()
                if (data.token) { // ¿Hay token? Si lo hay lo guardo en un localStorage
                    localStorage.setItem("token", data.token)
                    setIsLoggedIn(true); router.push("/biblioteca/admin/libros")
                } else {
                    alert("Login failed: No se ha recibido el token")
                    setIsLoggedIn(false); router.push("/biblioteca/")
                }
            } else {
                setIsLoggedIn(false); alert("Login failed: " + response.statusText)
                router.push("/biblioteca/")
            }
        } catch (error) {
            setIsLoggedIn(false); alert("An error occurred during login")
        }
    }
    const handleLogout = () => {
        localStorage.removeItem("token")
        setIsLoggedIn(false); router.push("/biblioteca/")
    }
    return (
        <nav style={{ backgroundColor: 'grey' }}>
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/biblioteca/" className="text-xl font-bold">
                    Biblioteca
                </Link>
                <div className="flex items-center space-x-4">
                    {isLoggedIn ? (
                        <>
                            <Link href="/biblioteca/admin/libros"> Admin Libros </Link>
                            <Link href="/biblioteca/admin/autores" > Admin Autores </Link>
                            <button onClick={handleLogout} > Logout </button>
                        </>
                    ) : (
                        <form onSubmit={handleLogin} className="flex items-center gap-4">
                            <input type="text" placeholder="Email" value={email} onChange={(e) =>
                                setUserEmail(e.target.value)} />
                            <input type="password" placeholder="Password" value={password} onChange={(e) =>
                                setPassword(e.target.value)} />
                            <button type="submit" className="bg-blue-500 px-4 py-1 rounded">
                                Login
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </nav>
    )
}
