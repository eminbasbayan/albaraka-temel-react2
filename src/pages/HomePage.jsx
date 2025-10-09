import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="bg-primary text-white py-5 mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-3 fw-bold mb-3">
                En Kaliteli Ürünler Burada
              </h1>
              <p className="lead mb-4">
                Binlerce ürün arasından size en uygun olanı seçin. Hızlı kargo, güvenli ödeme ve mükemmel müşteri hizmetiyle yanınızdayız.
              </p>
              <div className="d-flex gap-3">
                <button
                  className="btn btn-light btn-lg px-4"
                  onClick={() => navigate('/products')}
                >
                  Alışverişe Başla
                </button>
                <button className="btn btn-outline-light btn-lg px-4">
                  Kampanyalar
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800"
                alt="Shopping"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mb-5">
        <div className="row g-4">
          <div className="col-md-3">
            <div className="card border-0 shadow-sm h-100 text-center p-4">
              <div className="card-body">
                <i className="bi bi-truck fs-1 text-primary mb-3"></i>
                <h5 className="card-title fw-bold">Ücretsiz Kargo</h5>
                <p className="card-text text-muted">
                  500 TL üzeri alışverişlerde kargo bizden
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm h-100 text-center p-4">
              <div className="card-body">
                <i className="bi bi-shield-check fs-1 text-success mb-3"></i>
                <h5 className="card-title fw-bold">Güvenli Ödeme</h5>
                <p className="card-text text-muted">
                  256-bit SSL şifreleme ile güvenli alışveriş
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm h-100 text-center p-4">
              <div className="card-body">
                <i className="bi bi-arrow-repeat fs-1 text-warning mb-3"></i>
                <h5 className="card-title fw-bold">Kolay İade</h5>
                <p className="card-text text-muted">
                  14 gün içinde ücretsiz iade hakkı
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm h-100 text-center p-4">
              <div className="card-body">
                <i className="bi bi-headset fs-1 text-info mb-3"></i>
                <h5 className="card-title fw-bold">7/24 Destek</h5>
                <p className="card-text text-muted">
                  Her zaman yanınızdayız, bize ulaşın
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mb-5">
        <h2 className="text-center fw-bold mb-4">Popüler Kategoriler</h2>
        <div className="row g-4">
          <div className="col-md-3">
            <div className="card border-0 shadow-sm overflow-hidden h-100" style={{ cursor: 'pointer' }}>
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
                alt="Electronics"
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">Elektronik</h5>
                <p className="card-text text-muted">500+ Ürün</p>
                <button className="btn btn-outline-primary btn-sm">
                  Keşfet
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm overflow-hidden h-100" style={{ cursor: 'pointer' }}>
              <img
                src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400"
                alt="Fashion"
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">Moda</h5>
                <p className="card-text text-muted">1200+ Ürün</p>
                <button className="btn btn-outline-primary btn-sm">
                  Keşfet
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm overflow-hidden h-100" style={{ cursor: 'pointer' }}>
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400"
                alt="Jewelry"
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">Takı & Aksesuar</h5>
                <p className="card-text text-muted">350+ Ürün</p>
                <button className="btn btn-outline-primary btn-sm">
                  Keşfet
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm overflow-hidden h-100" style={{ cursor: 'pointer' }}>
              <img
                src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400"
                alt="Shoes"
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">Ayakkabı</h5>
                <p className="card-text text-muted">800+ Ürün</p>
                <button className="btn btn-outline-primary btn-sm">
                  Keşfet
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="container mb-5">
        <div className="card bg-gradient text-white border-0 shadow-lg" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
          <div className="card-body p-5">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h2 className="display-5 fw-bold mb-3">
                  Yaz Kampanyası Başladı!
                </h2>
                <p className="lead mb-4">
                  Tüm ürünlerde %50'ye varan indirimler. Kaçırmayın!
                </p>
                <button
                  className="btn btn-light btn-lg px-4"
                  onClick={() => navigate('/products')}
                >
                  Fırsatları Gör
                </button>
              </div>
              <div className="col-lg-4 text-center">
                <div className="display-1 fw-bold">%50</div>
                <div className="fs-4">İNDİRİM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-light py-5 mb-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 mb-4 mb-md-0">
              <div className="display-4 fw-bold text-primary">50K+</div>
              <div className="text-muted">Mutlu Müşteri</div>
            </div>
            <div className="col-md-3 mb-4 mb-md-0">
              <div className="display-4 fw-bold text-success">10K+</div>
              <div className="text-muted">Ürün Çeşidi</div>
            </div>
            <div className="col-md-3 mb-4 mb-md-0">
              <div className="display-4 fw-bold text-warning">100+</div>
              <div className="text-muted">Marka</div>
            </div>
            <div className="col-md-3">
              <div className="display-4 fw-bold text-info">24/7</div>
              <div className="text-muted">Müşteri Desteği</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mb-5">
        <div className="card border-0 shadow-sm">
          <div className="card-body p-5 text-center">
            <h3 className="fw-bold mb-3">Kampanyalardan Haberdar Olun</h3>
            <p className="text-muted mb-4">
              E-bültenimize abone olun, özel fırsatları kaçırmayın!
            </p>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="input-group input-group-lg">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="E-posta adresiniz"
                  />
                  <button className="btn btn-primary" type="button">
                    Abone Ol
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
