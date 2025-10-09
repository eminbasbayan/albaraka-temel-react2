import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="row min-vh-100 align-items-center justify-content-center">
        <div className="col-lg-6 text-center">
          {/* 404 Büyük Başlık */}
          <div className="mb-4">
            <h1 className="display-1 fw-bold text-primary" style={{ fontSize: '10rem' }}>
              404
            </h1>
          </div>

          {/* İkon */}
          <div className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              fill="currentColor"
              className="bi bi-emoji-frown text-muted"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
            </svg>
          </div>

          {/* Başlık ve Açıklama */}
          <div className="mb-4">
            <h2 className="fw-bold mb-3">Sayfa Bulunamadı</h2>
            <p className="text-muted fs-5">
              Üzgünüz, aradığınız sayfa mevcut değil veya taşınmış olabilir.
            </p>
            <p className="text-muted">
              Lütfen URL'yi kontrol edin veya ana sayfaya dönün.
            </p>
          </div>

          {/* Bilgi Kartları */}
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <div className="card border-primary shadow-sm h-100">
                <div className="card-body">
                  <i className="bi bi-house-door fs-1 text-primary mb-2"></i>
                  <h6 className="card-title fw-bold">Ana Sayfa</h6>
                  <p className="card-text small text-muted">
                    Tüm ürünleri görüntüleyin
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-success shadow-sm h-100">
                <div className="card-body">
                  <i className="bi bi-cart fs-1 text-success mb-2"></i>
                  <h6 className="card-title fw-bold">Sepetim</h6>
                  <p className="card-text small text-muted">
                    Sepetinizdeki ürünlere göz atın
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Aksiyon Butonları */}
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <button
              className="btn btn-primary btn-lg px-4"
              onClick={() => navigate('/')}
            >
              <i className="bi bi-house-door me-2"></i>
              Ana Sayfaya Dön
            </button>
            <button
              className="btn btn-outline-secondary btn-lg px-4"
              onClick={() => navigate(-1)}
            >
              <i className="bi bi-arrow-left me-2"></i>
              Geri Dön
            </button>
          </div>

          {/* Alt Bilgi */}
          <div className="mt-5">
            <p className="text-muted small">
              Sorun devam ederse lütfen bizimle iletişime geçin.
            </p>
            <div className="d-flex gap-3 justify-content-center text-muted">
              <a href="mailto:destek@example.com" className="text-decoration-none">
                <i className="bi bi-envelope me-1"></i>
                Destek
              </a>
              <span>|</span>
              <a href="tel:+901234567890" className="text-decoration-none">
                <i className="bi bi-telephone me-1"></i>
                İletişim
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;