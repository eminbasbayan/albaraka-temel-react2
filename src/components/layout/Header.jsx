import { useContext } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import CartContext from '../../context/CartContext';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary position-sticky top-0 left-0 w-100">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="d-flex">
            <button
              className="btn btn-success"
              onClick={() => navigate('/cart')}
            >
              Sepet {cartItems.length}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
