import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
    <div className="container py-5 text-center">
        <h1>404</h1>
        <h3>Página no encontrada</h3>
        <p>¡Ups! La página que buscas no existe</p>
        <Link to="/" className='btn btn-primary mt-3'>Volver al inicio</Link>
    </div>

)

export default NotFound
