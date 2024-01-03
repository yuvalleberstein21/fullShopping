import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span className="fs-5 d-none d-sm-inline text-dark">Menu</span>
                        </a>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link align-middle px-0">
                                    <i className="fs-4 bi-house" style={{ color: "gray" }}></i> <span className="ms-1 d-none d-sm-inline" style={{ fontWeight: "bold", color: "darkblue" }}>Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/products"} className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi bi-bag" style={{ color: "gray" }}></i> <span className="ms-1 d-none d-sm-inline" style={{ fontWeight: "bold", color: "darkblue" }}>Products</span>
                                </Link>
                                <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">

                                </ul>
                            </li>
                            <li>
                                <Link to={"/addproduct"} className="nav-link px-0 align-middle">
                                    <i className="bi bi-cart-plus" style={{ color: "gray" }}></i> <span className="ms-1 d-none d-sm-inline" style={{ fontWeight: "bold", color: "darkblue" }}>Add product</span></Link>
                            </li>
                            <li>
                                <Link to={"/category"} className="nav-link px-0 align-middle ">
                                    <i className="bi bi-menu-button-wide" style={{ color: "gray" }}></i> <span className="ms-1 d-none d-sm-inline" style={{ fontWeight: "bold", color: "darkblue" }}>Categories</span></Link>
                            </li>
                            <li>
                                <Link to={"/orders"} data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi bi-bag-check" style={{ color: "gray" }}></i> <span className="ms-1 d-none d-sm-inline" style={{ fontWeight: "bold", color: "darkblue" }}>Orders</span> </Link>

                            </li>
                            <li>
                                <Link to={"/users"} className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-people" style={{ color: "gray" }}></i> <span className="ms-1 d-none d-sm-inline" style={{ fontWeight: "bold", color: "darkblue" }}>Users</span> </Link>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-people" style={{ color: "gray" }}></i> <span className="ms-1 d-none d-sm-inline" style={{ fontWeight: "bold", color: "darkblue" }}>Sellers</span> </a>
                            </li>
                        </ul>
                        <hr />
                        <div className="dropdown pb-4">
                            <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                                <span className="d-none d-sm-inline mx-1">loser</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                                <li><a className="dropdown-item" href="#">New project...</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sidebar