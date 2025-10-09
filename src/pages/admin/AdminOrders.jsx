function AdminOrders() {
  return (
    <div className="admin-orders">
      {/* Page Header */}
      <div className="mb-4">
        <h2 className="fw-bold">Siparişler</h2>
        <p className="text-muted">Tüm siparişleri görüntüleyin ve yönetin</p>
      </div>

      {/* Stats Cards */}
      <div className="row g-4 mb-4">
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <i className="bi bi-hourglass-split fs-2 text-warning mb-2"></i>
              <h3 className="fw-bold mb-0">42</h3>
              <small className="text-muted">Beklemede</small>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <i className="bi bi-truck fs-2 text-primary mb-2"></i>
              <h3 className="fw-bold mb-0">128</h3>
              <small className="text-muted">Kargoda</small>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <i className="bi bi-check-circle fs-2 text-success mb-2"></i>
              <h3 className="fw-bold mb-0">1,045</h3>
              <small className="text-muted">Tamamlandı</small>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <i className="bi bi-x-circle fs-2 text-danger mb-2"></i>
              <h3 className="fw-bold mb-0">30</h3>
              <small className="text-muted">İptal Edildi</small>
            </div>
          </div>
        </div>
      </div>

      {/* Filter & Search */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Sipariş no veya müşteri ara..."
              />
            </div>
            <div className="col-md-2">
              <select className="form-select">
                <option value="">Tüm Durumlar</option>
                <option value="pending">Beklemede</option>
                <option value="processing">Hazırlanıyor</option>
                <option value="shipped">Kargoda</option>
                <option value="delivered">Teslim Edildi</option>
                <option value="cancelled">İptal Edildi</option>
              </select>
            </div>
            <div className="col-md-2">
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-2">
              <input type="date" className="form-control" />
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

      {/* Orders Table */}
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Sipariş No</th>
                  <th>Müşteri</th>
                  <th>Tarih</th>
                  <th>Ürünler</th>
                  <th>Toplam</th>
                  <th>Durum</th>
                  <th className="text-end">İşlemler</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="fw-bold">#ORD-12345</td>
                  <td>
                    <div>
                      <div className="fw-semibold">Ahmet Yılmaz</div>
                      <small className="text-muted">ahmet@example.com</small>
                    </div>
                  </td>
                  <td>
                    <div>09 Eki 2025</div>
                    <small className="text-muted">14:30</small>
                  </td>
                  <td>3 ürün</td>
                  <td className="fw-bold">₺1,450</td>
                  <td>
                    <span className="badge bg-success">Teslim Edildi</span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group btn-group-sm">
                      <button className="btn btn-outline-info">
                        <i className="bi bi-eye"></i>
                      </button>
                      <button className="btn btn-outline-primary">
                        <i className="bi bi-printer"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="fw-bold">#ORD-12344</td>
                  <td>
                    <div>
                      <div className="fw-semibold">Ayşe Demir</div>
                      <small className="text-muted">ayse@example.com</small>
                    </div>
                  </td>
                  <td>
                    <div>09 Eki 2025</div>
                    <small className="text-muted">12:15</small>
                  </td>
                  <td>2 ürün</td>
                  <td className="fw-bold">₺820</td>
                  <td>
                    <span className="badge bg-primary">Kargoda</span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group btn-group-sm">
                      <button className="btn btn-outline-info">
                        <i className="bi bi-eye"></i>
                      </button>
                      <button className="btn btn-outline-primary">
                        <i className="bi bi-printer"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="fw-bold">#ORD-12343</td>
                  <td>
                    <div>
                      <div className="fw-semibold">Mehmet Kaya</div>
                      <small className="text-muted">mehmet@example.com</small>
                    </div>
                  </td>
                  <td>
                    <div>08 Eki 2025</div>
                    <small className="text-muted">16:45</small>
                  </td>
                  <td>5 ürün</td>
                  <td className="fw-bold">₺2,340</td>
                  <td>
                    <span className="badge bg-warning">Hazırlanıyor</span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group btn-group-sm">
                      <button className="btn btn-outline-info">
                        <i className="bi bi-eye"></i>
                      </button>
                      <button className="btn btn-outline-primary">
                        <i className="bi bi-printer"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="fw-bold">#ORD-12342</td>
                  <td>
                    <div>
                      <div className="fw-semibold">Fatma Öz</div>
                      <small className="text-muted">fatma@example.com</small>
                    </div>
                  </td>
                  <td>
                    <div>08 Eki 2025</div>
                    <small className="text-muted">10:20</small>
                  </td>
                  <td>1 ürün</td>
                  <td className="fw-bold">₺320</td>
                  <td>
                    <span className="badge bg-danger">İptal Edildi</span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group btn-group-sm">
                      <button className="btn btn-outline-info">
                        <i className="bi bi-eye"></i>
                      </button>
                      <button className="btn btn-outline-primary">
                        <i className="bi bi-printer"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="fw-bold">#ORD-12341</td>
                  <td>
                    <div>
                      <div className="fw-semibold">Ali Veli</div>
                      <small className="text-muted">ali@example.com</small>
                    </div>
                  </td>
                  <td>
                    <div>07 Eki 2025</div>
                    <small className="text-muted">15:10</small>
                  </td>
                  <td>4 ürün</td>
                  <td className="fw-bold">₺1,890</td>
                  <td>
                    <span className="badge bg-info">Beklemede</span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group btn-group-sm">
                      <button className="btn btn-outline-info">
                        <i className="bi bi-eye"></i>
                      </button>
                      <button className="btn btn-outline-primary">
                        <i className="bi bi-printer"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="fw-bold">#ORD-12340</td>
                  <td>
                    <div>
                      <div className="fw-semibold">Zeynep Ak</div>
                      <small className="text-muted">zeynep@example.com</small>
                    </div>
                  </td>
                  <td>
                    <div>07 Eki 2025</div>
                    <small className="text-muted">09:30</small>
                  </td>
                  <td>2 ürün</td>
                  <td className="fw-bold">₺650</td>
                  <td>
                    <span className="badge bg-success">Teslim Edildi</span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group btn-group-sm">
                      <button className="btn btn-outline-info">
                        <i className="bi bi-eye"></i>
                      </button>
                      <button className="btn btn-outline-primary">
                        <i className="bi bi-printer"></i>
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
              Toplam 1,245 siparişten 1-6 arası gösteriliyor
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
                  <a className="page-link" href="#">208</a>
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

export default AdminOrders;
