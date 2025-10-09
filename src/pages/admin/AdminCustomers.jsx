function AdminCustomers() {
  return (
    <div className="admin-customers">
      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold">Müşteriler</h2>
          <p className="text-muted mb-0">Müşteri bilgilerini görüntüleyin ve yönetin</p>
        </div>
        <button className="btn btn-primary">
          <i className="bi bi-person-plus me-2"></i>
          Yeni Müşteri Ekle
        </button>
      </div>

      {/* Stats Cards */}
      <div className="row g-4 mb-4">
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted mb-1">Toplam Müşteri</p>
                  <h3 className="fw-bold mb-0">8,245</h3>
                </div>
                <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                  <i className="bi bi-people fs-2 text-primary"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted mb-1">Aktif Müşteri</p>
                  <h3 className="fw-bold mb-0">6,892</h3>
                </div>
                <div className="bg-success bg-opacity-10 rounded-circle p-3">
                  <i className="bi bi-person-check fs-2 text-success"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted mb-1">Bu Ay Yeni</p>
                  <h3 className="fw-bold mb-0">342</h3>
                </div>
                <div className="bg-warning bg-opacity-10 rounded-circle p-3">
                  <i className="bi bi-person-plus fs-2 text-warning"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted mb-1">Ortalama Harcama</p>
                  <h3 className="fw-bold mb-0">₺1,245</h3>
                </div>
                <div className="bg-info bg-opacity-10 rounded-circle p-3">
                  <i className="bi bi-currency-dollar fs-2 text-info"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter & Search */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                placeholder="Müşteri adı veya e-posta ara..."
              />
            </div>
            <div className="col-md-3">
              <select className="form-select">
                <option value="">Tüm Durumlar</option>
                <option value="active">Aktif</option>
                <option value="inactive">Pasif</option>
                <option value="blocked">Engellenmiş</option>
              </select>
            </div>
            <div className="col-md-2">
              <select className="form-select">
                <option value="">Sıralama</option>
                <option value="name">İsme Göre</option>
                <option value="date">Tarihe Göre</option>
                <option value="orders">Sipariş Sayısı</option>
                <option value="spending">Harcama</option>
              </select>
            </div>
            <div className="col-md-2">
              <button className="btn btn-outline-secondary w-100">
                <i className="bi bi-funnel me-2"></i>
                Filtrele
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Customers Table */}
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Müşteri</th>
                  <th>E-posta</th>
                  <th>Telefon</th>
                  <th>Kayıt Tarihi</th>
                  <th>Sipariş</th>
                  <th>Toplam Harcama</th>
                  <th>Durum</th>
                  <th className="text-end">İşlemler</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-2">
                        <i className="bi bi-person-circle text-primary fs-5"></i>
                      </div>
                      <div>
                        <div className="fw-semibold">Ahmet Yılmaz</div>
                        <small className="text-muted">#CUS-1001</small>
                      </div>
                    </div>
                  </td>
                  <td>ahmet@example.com</td>
                  <td>+90 555 123 4567</td>
                  <td>
                    <div>15 Oca 2024</div>
                    <small className="text-muted">8 ay önce</small>
                  </td>
                  <td className="fw-semibold">45</td>
                  <td className="fw-bold">₺25,430</td>
                  <td>
                    <span className="badge bg-success">Aktif</span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group btn-group-sm">
                      <button className="btn btn-outline-info">
                        <i className="bi bi-eye"></i>
                      </button>
                      <button className="btn btn-outline-primary">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-outline-danger">
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="bg-success bg-opacity-10 rounded-circle p-2 me-2">
                        <i className="bi bi-person-circle text-success fs-5"></i>
                      </div>
                      <div>
                        <div className="fw-semibold">Ayşe Demir</div>
                        <small className="text-muted">#CUS-1002</small>
                      </div>
                    </div>
                  </td>
                  <td>ayse@example.com</td>
                  <td>+90 555 234 5678</td>
                  <td>
                    <div>22 Şub 2024</div>
                    <small className="text-muted">7 ay önce</small>
                  </td>
                  <td className="fw-semibold">38</td>
                  <td className="fw-bold">₺19,850</td>
                  <td>
                    <span className="badge bg-success">Aktif</span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group btn-group-sm">
                      <button className="btn btn-outline-info">
                        <i className="bi bi-eye"></i>
                      </button>
                      <button className="btn btn-outline-primary">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-outline-danger">
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="bg-warning bg-opacity-10 rounded-circle p-2 me-2">
                        <i className="bi bi-person-circle text-warning fs-5"></i>
                      </div>
                      <div>
                        <div className="fw-semibold">Mehmet Kaya</div>
                        <small className="text-muted">#CUS-1003</small>
                      </div>
                    </div>
                  </td>
                  <td>mehmet@example.com</td>
                  <td>+90 555 345 6789</td>
                  <td>
                    <div>10 Mar 2024</div>
                    <small className="text-muted">6 ay önce</small>
                  </td>
                  <td className="fw-semibold">32</td>
                  <td className="fw-bold">₺17,620</td>
                  <td>
                    <span className="badge bg-success">Aktif</span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group btn-group-sm">
                      <button className="btn btn-outline-info">
                        <i className="bi bi-eye"></i>
                      </button>
                      <button className="btn btn-outline-primary">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-outline-danger">
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="bg-info bg-opacity-10 rounded-circle p-2 me-2">
                        <i className="bi bi-person-circle text-info fs-5"></i>
                      </div>
                      <div>
                        <div className="fw-semibold">Fatma Öz</div>
                        <small className="text-muted">#CUS-1004</small>
                      </div>
                    </div>
                  </td>
                  <td>fatma@example.com</td>
                  <td>+90 555 456 7890</td>
                  <td>
                    <div>05 Nis 2024</div>
                    <small className="text-muted">5 ay önce</small>
                  </td>
                  <td className="fw-semibold">28</td>
                  <td className="fw-bold">₺14,280</td>
                  <td>
                    <span className="badge bg-secondary">Pasif</span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group btn-group-sm">
                      <button className="btn btn-outline-info">
                        <i className="bi bi-eye"></i>
                      </button>
                      <button className="btn btn-outline-primary">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-outline-danger">
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="bg-danger bg-opacity-10 rounded-circle p-2 me-2">
                        <i className="bi bi-person-circle text-danger fs-5"></i>
                      </div>
                      <div>
                        <div className="fw-semibold">Ali Veli</div>
                        <small className="text-muted">#CUS-1005</small>
                      </div>
                    </div>
                  </td>
                  <td>ali@example.com</td>
                  <td>+90 555 567 8901</td>
                  <td>
                    <div>18 May 2024</div>
                    <small className="text-muted">4 ay önce</small>
                  </td>
                  <td className="fw-semibold">21</td>
                  <td className="fw-bold">₺11,450</td>
                  <td>
                    <span className="badge bg-success">Aktif</span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group btn-group-sm">
                      <button className="btn btn-outline-info">
                        <i className="bi bi-eye"></i>
                      </button>
                      <button className="btn btn-outline-primary">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-outline-danger">
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="d-flex justify-content-between align-items-center mt-4">
            <div className="text-muted">
              Toplam 8,245 müşteriden 1-5 arası gösteriliyor
            </div>
            <nav>
              <ul className="pagination mb-0">
                <li className="page-item disabled">
                  <a className="page-link" href="#">Önceki</a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">...</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">1649</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">Sonraki</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminCustomers;
