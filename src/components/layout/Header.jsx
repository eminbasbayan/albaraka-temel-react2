import React from 'react';

const Header = ({ cartItems }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary position-sticky top-0 left-0 w-100">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-success" type="submit">
              Sepet {cartItems.length}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
