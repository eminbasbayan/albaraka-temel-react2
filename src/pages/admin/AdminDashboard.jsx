function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      {/* Page Header */}
      <div className="mb-4">
        <h2 className="fw-bold">Dashboard</h2>
        <p className="text-muted">Hoş geldiniz! İşte işletmenizin genel görünümü.</p>
      </div>

      {/* Stats Cards */}
      <div className="row g-4 mb-4">
        <div className="col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted mb-1">Toplam Gelir</p>
                  <h3 className="fw-bold mb-0">₺125,430</h3>
                  <small className="text-success">
                    <i className="bi bi-arrow-up"></i> %12.5
                  </small>
                </div>
                <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                  <i className="bi bi-currency-dollar fs-2 text-primary"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted mb-1">Toplam Sipariş</p>
                  <h3 className="fw-bold mb-0">1,245</h3>
                  <small className="text-success">
                    <i className="bi bi-arrow-up"></i> %8.2
                  </small>
                </div>
                <div className="bg-success bg-opacity-10 rounded-circle p-3">
                  <i className="bi bi-cart-check fs-2 text-success"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted mb-1">Toplam Müşteri</p>
                  <h3 className="fw-bold mb-0">8,245</h3>
                  <small className="text-success">
                    <i className="bi bi-arrow-up"></i> %15.3
                  </small>
                </div>
                <div className="bg-warning bg-opacity-10 rounded-circle p-3">
                  <i className="bi bi-people fs-2 text-warning"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted mb-1">Toplam Ürün</p>
                  <h3 className="fw-bold mb-0">486</h3>
                  <small className="text-danger">
                    <i className="bi bi-arrow-down"></i> %2.1
                  </small>
                </div>
                <div className="bg-info bg-opacity-10 rounded-circle p-3">
                  <i className="bi bi-box-seam fs-2 text-info"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts & Recent Activity */}
      <div className="row g-4 mb-4">
        {/* Sales Chart */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title fw-bold mb-4">Satış Grafiği</h5>
              <div className="text-center py-5" style={{ minHeight: '300px', backgroundColor: '#f8f9fa' }}>
                <i className="bi bi-bar-chart fs-1 text-muted mb-3"></i>
                <p className="text-muted">Grafik burada görüntülenecek</p>
                <small className="text-muted">Chart.js veya Recharts ile entegre edilebilir</small>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title fw-bold mb-4">Son Siparişler</h5>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex justify-content-between align-items-center pb-2 border-bottom">
                  <div>
                    <div className="fw-semibold">#12345</div>
                    <small className="text-muted">Ahmet Yılmaz</small>
                  </div>
                  <div className="text-end">
                    <div className="fw-bold">₺450</div>
                    <span className="badge bg-success">Teslim Edildi</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center pb-2 border-bottom">
                  <div>
                    <div className="fw-semibold">#12344</div>
                    <small className="text-muted">Ayşe Demir</small>
                  </div>
                  <div className="text-end">
                    <div className="fw-bold">₺820</div>
                    <span className="badge bg-warning">Hazırlanıyor</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center pb-2 border-bottom">
                  <div>
                    <div className="fw-semibold">#12343</div>
                    <small className="text-muted">Mehmet Kaya</small>
                  </div>
                  <div className="text-end">
                    <div className="fw-bold">₺1,250</div>
                    <span className="badge bg-primary">Yolda</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center pb-2 border-bottom">
                  <div>
                    <div className="fw-semibold">#12342</div>
                    <small className="text-muted">Fatma Öz</small>
                  </div>
                  <div className="text-end">
                    <div className="fw-bold">₺320</div>
                    <span className="badge bg-danger">İptal Edildi</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <div className="fw-semibold">#12341</div>
                    <small className="text-muted">Ali Veli</small>
                  </div>
                  <div className="text-end">
                    <div className="fw-bold">₺680</div>
                    <span className="badge bg-success">Teslim Edildi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Products & Top Customers */}
      <div className="row g-4">
        {/* Top Products */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-bold mb-4">En Çok Satan Ürünler</h5>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Ürün Adı</th>
                      <th>Kategori</th>
                      <th className="text-end">Satış</th>
                      <th className="text-end">Gelir</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="fw-semibold">Wireless Mouse</td>
                      <td><span className="badge bg-primary">Elektronik</span></td>
                      <td className="text-end">234</td>
                      <td className="text-end fw-bold">₺12,450</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Laptop Stand</td>
                      <td><span className="badge bg-success">Aksesuar</span></td>
                      <td className="text-end">189</td>
                      <td className="text-end fw-bold">₺9,870</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">USB-C Cable</td>
                      <td><span className="badge bg-primary">Elektronik</span></td>
                      <td className="text-end">156</td>
                      <td className="text-end fw-bold">₺4,680</td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">Gaming Keyboard</td>
                      <td><span className="badge bg-warning">Gaming</span></td>
                      <td className="text-end">142</td>
                      <td className="text-end fw-bold">₺18,260</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Top Customers */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-bold mb-4">En İyi Müşteriler</h5>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Müşteri Adı</th>
                      <th className="text-end">Sipariş</th>
                      <th className="text-end">Toplam Harcama</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-2">
                            <i className="bi bi-person-circle text-primary"></i>
                          </div>
                          <span className="fw-semibold">Ahmet Yılmaz</span>
                        </div>
                      </td>
                      <td className="text-end">45</td>
                      <td className="text-end fw-bold">₺25,430</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="bg-success bg-opacity-10 rounded-circle p-2 me-2">
                            <i className="bi bi-person-circle text-success"></i>
                          </div>
                          <span className="fw-semibold">Ayşe Demir</span>
                        </div>
                      </td>
                      <td className="text-end">38</td>
                      <td className="text-end fw-bold">₺19,850</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="bg-warning bg-opacity-10 rounded-circle p-2 me-2">
                            <i className="bi bi-person-circle text-warning"></i>
                          </div>
                          <span className="fw-semibold">Mehmet Kaya</span>
                        </div>
                      </td>
                      <td className="text-end">32</td>
                      <td className="text-end fw-bold">₺17,620</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="bg-info bg-opacity-10 rounded-circle p-2 me-2">
                            <i className="bi bi-person-circle text-info"></i>
                          </div>
                          <span className="fw-semibold">Fatma Öz</span>
                        </div>
                      </td>
                      <td className="text-end">28</td>
                      <td className="text-end fw-bold">₺14,280</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;