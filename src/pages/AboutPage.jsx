function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="bg-primary text-white py-5 mb-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-3">Hakkımızda</h1>
          <p className="lead">
            Kaliteli ürünler ve mükemmel hizmet anlayışıyla 2010'dan beri
            yanınızdayız
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mb-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800"
              alt="Our Story"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4">Hikayemiz</h2>
            <p className="text-muted mb-3">
              2010 yılında küçük bir ofiste başlayan yolculuğumuz, bugün
              binlerce mutlu müşteriye hizmet veren büyük bir e-ticaret
              platformuna dönüştü. Müşteri memnuniyetini her zaman ön planda
              tutarak, kaliteli ürünleri uygun fiyatlarla sunma misyonuyla yola
              çıktık.
            </p>
            <p className="text-muted mb-3">
              15 yıllık deneyimimizle, e-ticaret sektöründe güvenilir bir marka
              haline geldik. Geniş ürün yelpazemiz, hızlı kargo hizmetimiz ve
              7/24 müşteri desteğimizle sizlere en iyi alışveriş deneyimini
              sunmak için çalışıyoruz.
            </p>
            <p className="text-muted">
              Sürdürülebilir ticaret anlayışı ve sosyal sorumluluk bilinci ile
              hareket ediyor, sadece ticaret yapmakla kalmayıp topluma değer
              katmayı hedefliyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-light py-5 mb-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-bullseye fs-1 text-primary me-3"></i>
                    <h3 className="fw-bold mb-0">Misyonumuz</h3>
                  </div>
                  <p className="text-muted">
                    Müşterilerimize en kaliteli ürünleri, en uygun fiyatlarla
                    sunarak alışveriş deneyimlerini mükemmelleştirmek.
                    Güvenilir, hızlı ve müşteri odaklı hizmet anlayışıyla
                    sektörde öncü olmak.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-eye fs-1 text-success me-3"></i>
                    <h3 className="fw-bold mb-0">Vizyonumuz</h3>
                  </div>
                  <p className="text-muted">
                    Türkiye'nin en çok tercih edilen e-ticaret platformu olmak.
                    İnovasyon ve teknoloji ile alışveriş deneyimini sürekli
                    geliştirerek, müşterilerimizin hayatını kolaylaştırmak.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mb-5">
        <h2 className="text-center fw-bold mb-5">Değerlerimiz</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="text-center">
              <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                style={{ width: '80px', height: '80px' }}>
                <i className="bi bi-hand-thumbs-up fs-1 text-primary"></i>
              </div>
              <h5 className="fw-bold mb-2">Güvenilirlik</h5>
              <p className="text-muted">
                Müşterilerimize karşı her zaman dürüst ve şeffaf davranıyoruz
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center">
              <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                style={{ width: '80px', height: '80px' }}>
                <i className="bi bi-award fs-1 text-success"></i>
              </div>
              <h5 className="fw-bold mb-2">Kalite</h5>
              <p className="text-muted">
                Sadece en kaliteli ürünleri seçiyor ve sunuyoruz
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center">
              <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                style={{ width: '80px', height: '80px' }}>
                <i className="bi bi-lightning-charge fs-1 text-warning"></i>
              </div>
              <h5 className="fw-bold mb-2">Hız</h5>
              <p className="text-muted">
                Siparişlerinizi en hızlı şekilde teslim ediyoruz
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center">
              <div className="bg-info bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                style={{ width: '80px', height: '80px' }}>
                <i className="bi bi-heart fs-1 text-info"></i>
              </div>
              <h5 className="fw-bold mb-2">Müşteri Memnuniyeti</h5>
              <p className="text-muted">
                Müşteri memnuniyeti her zaman önceliğimizdir
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center">
              <div className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                style={{ width: '80px', height: '80px' }}>
                <i className="bi bi-lightbulb fs-1 text-danger"></i>
              </div>
              <h5 className="fw-bold mb-2">İnovasyon</h5>
              <p className="text-muted">
                Sürekli gelişiyor ve yenilikçi çözümler üretiyoruz
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center">
              <div className="bg-secondary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                style={{ width: '80px', height: '80px' }}>
                <i className="bi bi-people fs-1 text-secondary"></i>
              </div>
              <h5 className="fw-bold mb-2">Toplum</h5>
              <p className="text-muted">
                Sosyal sorumluluk projelerimizle topluma katkı sağlıyoruz
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-light py-5 mb-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Ekibimiz</h2>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="card border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: '100px', height: '100px' }}>
                    <i className="bi bi-person-circle fs-1 text-primary"></i>
                  </div>
                  <h5 className="fw-bold mb-1">Ahmet Yılmaz</h5>
                  <p className="text-muted small mb-2">CEO & Kurucu</p>
                  <div className="d-flex gap-2 justify-content-center">
                    <a href="#" className="text-primary">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#" className="text-primary">
                      <i className="bi bi-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: '100px', height: '100px' }}>
                    <i className="bi bi-person-circle fs-1 text-success"></i>
                  </div>
                  <h5 className="fw-bold mb-1">Ayşe Demir</h5>
                  <p className="text-muted small mb-2">CTO</p>
                  <div className="d-flex gap-2 justify-content-center">
                    <a href="#" className="text-primary">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#" className="text-primary">
                      <i className="bi bi-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: '100px', height: '100px' }}>
                    <i className="bi bi-person-circle fs-1 text-warning"></i>
                  </div>
                  <h5 className="fw-bold mb-1">Mehmet Kaya</h5>
                  <p className="text-muted small mb-2">Pazarlama Müdürü</p>
                  <div className="d-flex gap-2 justify-content-center">
                    <a href="#" className="text-primary">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#" className="text-primary">
                      <i className="bi bi-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <div className="bg-info bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: '100px', height: '100px' }}>
                    <i className="bi bi-person-circle fs-1 text-info"></i>
                  </div>
                  <h5 className="fw-bold mb-1">Fatma Öz</h5>
                  <p className="text-muted small mb-2">Müşteri Hizmetleri</p>
                  <div className="d-flex gap-2 justify-content-center">
                    <a href="#" className="text-primary">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#" className="text-primary">
                      <i className="bi bi-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mb-5">
        <div className="row text-center g-4">
          <div className="col-md-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="display-4 fw-bold text-primary mb-2">15+</div>
                <div className="text-muted">Yıllık Deneyim</div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="display-4 fw-bold text-success mb-2">50K+</div>
                <div className="text-muted">Mutlu Müşteri</div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="display-4 fw-bold text-warning mb-2">100+</div>
                <div className="text-muted">Marka</div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="display-4 fw-bold text-info mb-2">10K+</div>
                <div className="text-muted">Ürün Çeşidi</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
