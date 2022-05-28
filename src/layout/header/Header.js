import React from 'react'

const Header = () => {
    return (
        <>
            <div className=''>
                <nav className="navbar navbar-expand-lg navbar-back " >
                    <img src="../../../logo192.png" className="h-5 d-inline-block" alt="..." style={{ width: "25px", height: "25px", marginLeft: '55px' }} />


                    <div className="collapse navbar-collapse pr-5" id="navbarSupportedContent" >
                        <ul className="navbar-nav ml-auto" >
                            <li className="nav-item active pr-5" >
                                <a className="nav-link" href="#" > Home <span className="sr-only" > (current)</span></a >
                            </li >
                            <li className="nav-item pr-5" >
                                <a className="nav-link" href="#" > About Us</a >
                            </li >

                            <li className="nav-item pr-5" >
                                <a className="nav-link " > Activiti</a >
                            </li >
                            <li className="nav-item pr-5" >
                                <a className="nav-link"  > Blog</a >
                            </li >
                            <li className="nav-item pr-5" >
                                <a className="nav-link" > Team</a >
                            </li >
                            <li className="nav-item pr-5" >
                                <a className="nav-link" > Carrer</a >
                            </li >
                            <li className="nav-item pr-5" >
                                <a className="nav-link" > Gallary</a >
                            </li >
                            <li className="nav-item pr-5" >
                                <a className="nav-link btn btn-primary rounded-pill text-white" > Contact Us</a >
                            </li >
                        </ul >
                        {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}
                    </div >
                </nav >
            </div>
        </>
    )
}

export default Header
