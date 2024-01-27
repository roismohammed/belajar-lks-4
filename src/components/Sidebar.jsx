import React, { Fragment } from 'react'
import { RiBook2Fill, RiDashboard2Fill, RiProductHuntFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <Fragment>
            <aside
                className="navbar navbar-vertical navbar-expand-lg"
                data-bs-theme="dark"
            >
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sidebar-menu"
                        aria-controls="sidebar-menu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <h1 className="navbar-brand navbar-brand-autodark">
                        Rois.Dev
                    </h1>
                    <div className="navbar-nav flex-row d-lg-none">
                        <div className="nav-item d-none d-lg-flex me-3">
                            <div className="btn-list">
                                <a
                                    href="https://github.com/tabler/tabler"
                                    className="btn"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {/* Download SVG icon from http://tabler-icons.io/i/brand-github */}

                                    Source code
                                </a>

                            </div>
                        </div>
                        <div className="d-none d-lg-flex">
                            <a
                                href="?theme=dark"
                                className="nav-link px-0 hide-theme-dark"
                                title="Enable dark mode"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                            >
                                {/* Download SVG icon from http://tabler-icons.io/i/moon */}

                            </a>
                            <a
                                href="?theme=light"
                                className="nav-link px-0 hide-theme-light"
                                title="Enable light mode"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                            >

                            </a>

                        </div>

                    </div>
                    <div className="collapse navbar-collapse" id="sidebar-menu">
                        <ul className="navbar-nav pt-lg-3">
                            <li className="nav-item">
                                <a className="nav-link" href="./">
                                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                                        {/* Download SVG icon from http://tabler-icons.io/i/home */}
                                      <RiDashboard2Fill size={'18px'}/>
                                    </span>
                                    <Link to={'/'} className="nav-link-title">Home</Link>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="./">
                                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                                        {/* Download SVG icon from http://tabler-icons.io/i/home */}
                                      <RiProductHuntFill size={'18px'}/>
                                    </span>
                                    <Link to={'/tambah-product'} className="nav-link-title">Tambah Product</Link>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="./">
                                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                                        {/* Download SVG icon from http://tabler-icons.io/i/home */}
                                      <RiBook2Fill size={'18px'}/>
                                    </span>
                                    <Link to={'/lihat-product'} className="nav-link-title">Lihat Product</Link>
                                </a>
                            </li>
                            
                            
                            
                        </ul>
                    </div>
                </div>
            </aside>
        </Fragment>
    )
}
