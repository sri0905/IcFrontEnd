import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-danger text-warning mb-3">
                <div className="container-fluid">
                    <Link className="navbar-brand mx-3" to="/"><h2>StyleSync</h2></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                           
                        </ul> 
                        <button className="btn btn-outline-warning mx-3" type="submit"> <Link to="/addDress" style={{textDecoration:"none",color:"inherit"}}> Add a new Dress</Link></button>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 bg-warning" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-warning" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
