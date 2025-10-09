import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/admin/AdminSidebar';

const AdminLayout = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-grow-1" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
        {/* Top Bar */}
        <div className="bg-white shadow-sm p-3 mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="mb-0 fw-bold">Yönetim Paneli</h4>
            <div className="d-flex gap-3 align-items-center">
              <div className="position-relative">
                <i className="bi bi-bell fs-5 text-secondary"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: '0.65rem' }}>
                  3
                </span>
              </div>
              <div className="position-relative">
                <i className="bi bi-envelope fs-5 text-secondary"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary"
                  style={{ fontSize: '0.65rem' }}>
                  5
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;