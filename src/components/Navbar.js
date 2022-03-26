import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="About me"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#top">about me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#top">portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#top">contact</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}
export default Navbar

