import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
 return (
     <nav className="navbar bg-light navbar-light navbar-expand-sm">
        <div className="container">
            <Link className="navbar-brand" to="/">Product Manager</Link>

            <button className="navbar-toggler" type="button"
            data-toggle="collapse" data-target="#productsNavigationToggler"
            aria-controls="productsNavigationToggler"
            aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="productsNavigationToggler">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/kits">Kits</Link>
                    <Link className="nav-item nav-link" to="/components">Components</Link>
                </div>
            </div>
        </div>
    </nav>
 );
}

export default Navigation;