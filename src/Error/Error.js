import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'

function Error() {
  return (
    <div id='err'> 
    <h1>404</h1>
    <h2>Page not Found</h2>
    <Link to='/' className='btn btn-warning' >Return to Home</Link>
    </div>
  )
}

export default Error