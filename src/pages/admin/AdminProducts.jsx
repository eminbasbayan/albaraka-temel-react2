function AdminProducts() {
  return (
    <div className="admin-products">
      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold">Ürünler</h2>
          <p className="text-muted mb-0">Tüm ürünlerinizi yönetin</p>
        </div>
        <button className="btn btn-primary">
          <i className="bi bi-plus-circle me-2"></i>
          Yeni Ürün Ekle
        </button>
      </div>

      {/* Filter & Search */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Ürün ara..."
              />
            </div>
            <div className="col-md-3">
              <select className="form-select">
                <option value="">Tüm Kategoriler</option>
                <option value="electronics">Elektronik</option>
                <option value="fashion">Moda</option>
                <option value="jewelry">Takı</option>
                <option value="other">Diğer</option>
              </select>
            </div>
            <div className="col-md-3">
              <select className="form-select">
                <option value="">Durum</option>
                <option value="active">Aktif</option>
                <option value="inactive">Pasif</option>
                <option value="outofstock">Stokta Yok</option>
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

      {/* Products Table */}
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" className="form-check-input" />
                  </th>
                  <th>Ürün</th>
                  <th>Kategori</th>
                  <th>Fiyat</th>
                  <th>Stok</th>
                  <th>Durum</th>
                  <th className="text-end">İşlemler</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" className="form-check-input" />
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                        alt="Product"
                        style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                        className="me-3"
                      />
                      <div>
                        <div className="fw-semibold">Fjallraven Backpack</div>
                        <small className="text-muted">#12345</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-primary">Elektronik</span>
                  </td>
                  <td className="fw-bold">₺899.99</td>
                  <td>
                    <span className="text-success">156</span>
                  </td>
                  <td>
                    <span className="badge bg-success">Aktif</span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group btn-group-sm">
                      <button className="btn btn-outline-primary">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-outline-info">
                        <i className="bi bi-eye"></i>
                      </button>
                      <button className="btn btn-outline-danger">
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" className="form-check-input" />
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                        alt="Product"
                        style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                        className="me-3"
                      />
                      <div>
                        <div className="fw-semibold">Mens Cotton T-Shirt</div>
                        <small className="text-muted">#12346</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-success">Moda</span>
                  </td>
                  <td className="fw-bold">₺199.99</td>
                  <td>
                    <span className="text-success">245</span>
                  </td>
                  <td>
                    <span className="badge bg-success">Aktif</span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group btn-group-sm">
                      <button className="btn btn-outline-primary">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-outline-info">
                        <i className="bi bi-eye"></i>
                      </button>
                      <button className="btn btn-outline-danger">
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" className="form-check-input" />
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                        alt="Product"
                        style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                        className="me-3"
                      />
                      <div>
                        <div className="fw-semibold">Mens Cotton Jacket</div>
                        <small className="text-muted">#12347</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-success">Moda</span>
                  </td>
                  <td className="fw-bold">₺499.99</td>
                  <td>
                    <span className="text-warning">12</span>
                  </td>
                  <td>
                    <span className="badge bg-warning">Düşük Stok</span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group btn-group-sm">
                      <button className="btn btn-outline-primary">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-outline-info">
                        <i className="bi bi-eye"></i>
                      </button>
                      <button className="btn btn-outline-danger">
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" className="form-check-input" />
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
                        alt="Product"
                        style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                        className="me-3"
                      />
                      <div>
                        <div className="fw-semibold">Gold Petite Ring</div>
                        <small className="text-muted">#12348</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-warning">Takı</span>
                  </td>
                  <td className="fw-bold">₺1,299.99</td>
                  <td>
                    <span className="text-danger">0</span>
                  </td>
                  <td>
                    <span className="badge bg-danger">Stokta Yok</span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group btn-group-sm">
                      <button className="btn btn-outline-primary">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-outline-info">
                        <i className="bi bi-eye"></i>
                      </button>
                      <button className="btn btn-outline-danger">
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" className="form-check-input" />
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
                        alt="Product"
                        style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                        className="me-3"
                      />
                      <div>
                        <div className="fw-semibold">Silver Dragon Ring</div>
                        <small className="text-muted">#12349</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-warning">Takı</span>
                  </td>
                  <td className="fw-bold">₺699.99</td>
                  <td>
                    <span className="text-success">89</span>
                  </td>
                  <td>
                    <span className="badge bg-secondary">Pasif</span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group btn-group-sm">
                      <button className="btn btn-outline-primary">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-outline-info">
                        <i className="bi bi-eye"></i>
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
              Toplam 486 üründen 1-5 arası gösteriliyor
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
                  <a className="page-link" href="#">98</a>
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

export default AdminProducts;
