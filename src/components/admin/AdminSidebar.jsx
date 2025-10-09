import { NavLink } from 'react-router-dom';

function AdminSidebar() {
  const menuItems = [
    {
      path: '/admin/dashboard',
      icon: 'bi-speedometer2',
      label: 'Dashboard',
    },
    {
      path: '/admin/products',
      icon: 'bi-box-seam',
      label: 'Ürünler',
    },
    {
      path: '/admin/orders',
      icon: 'bi-cart-check',
      label: 'Siparişler',
    },
    {
      path: '/admin/customers',
      icon: 'bi-people',
      label: 'Müşteriler',
    },
    {
      path: '/admin/settings',
      icon: 'bi-gear',
      label: 'Ayarlar',
    },
  ];

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-dark text-white"
      style={{ width: '280px', minHeight: '100vh' }}
    >
      {/* Logo/Brand */}
      <div className="mb-4 border-bottom border-secondary pb-3">
        <a
          href="/admin/dashboard"
          className="d-flex align-items-center text-white text-decoration-none"
        >
          <i className="bi bi-shop fs-3 me-2"></i>
          <span className="fs-4 fw-bold">Admin Panel</span>
        </a>
      </div>

      {/* Navigation Menu */}
      <ul className="nav nav-pills flex-column mb-auto">
        {menuItems.map((item) => (
          <li key={item.path} className="nav-item mb-1">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `nav-link d-flex align-items-center ${
                  isActive ? 'active bg-primary' : 'text-white'
                }`
              }
            >
              <i className={`bi ${item.icon} me-2 fs-5`}></i>
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* User Info & Logout */}
      <div className="border-top border-secondary pt-3">
        <div className="d-flex align-items-center mb-3">
          <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-2"
            style={{ width: '40px', height: '40px' }}>
            <i className="bi bi-person-circle fs-5"></i>
          </div>
          <div>
            <div className="fw-semibold">Admin User</div>
            <small className="text-muted">admin@example.com</small>
          </div>
        </div>
        <button className="btn btn-outline-light w-100 btn-sm">
          <i className="bi bi-box-arrow-right me-2"></i>
          Çıkış Yap
        </button>
      </div>
    </div>
  );
}

export default AdminSidebar;
