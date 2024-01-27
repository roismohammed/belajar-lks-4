import React, { children, Fragment } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Toaster } from 'react-hot-toast'

export default function Guest({title,subTitle, children }) {
    return (
        <Fragment>
            <Toaster/>
            <div className="page">
                {/* Sidebar */}
                <Sidebar />
                {/* Navbar */}
                <Header />
                <div className="page-wrapper">
                    {/* Page header */}
                    <div className="page-header d-print-none">
                        <div className="container-xl">
                            <div className="row g-2 align-items-center">
                                <div className="col">
                                    {/* Page pre-title */}
                                    <div className="page-pretitle">{title}</div>
                                    <h2 className="page-title">{subTitle}</h2>
                                </div>
                                {/* Page title actions */}
                                <div className="col-auto ms-auto d-print-none">
                                    <div className="btn-list">
                                        <span className="d-none d-sm-inline">
                                            <a href="#" className="btn">
                                                New view
                                            </a>
                                        </span>
                                        <a
                                            href="#"
                                            className="btn btn-primary d-none d-sm-inline-block"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modal-report"
                                        >
                                            {/* Download SVG icon from http://tabler-icons.io/i/plus */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M12 5l0 14" />
                                                <path d="M5 12l14 0" />
                                            </svg>
                                            Create new report
                                        </a>
                                        <a
                                            href="#"
                                            className="btn btn-primary d-sm-none btn-icon"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modal-report"
                                            aria-label="Create new report"
                                        >
                                            {/* Download SVG icon from http://tabler-icons.io/i/plus */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M12 5l0 14" />
                                                <path d="M5 12l14 0" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Page body */}
                    <div className="page-body">
                        <div className="container-xl">
                            {children}
                        </div>
                    </div>
                  <Footer/>
                </div>
            </div>

        </Fragment>
    )
}
