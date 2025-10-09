function ContactPage() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="bg-primary text-white py-5 mb-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-3">İletişim</h1>
          <p className="lead">
            Sorularınız için bize ulaşın, size yardımcı olmaktan mutluluk
            duyarız
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container mb-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 text-center">
              <div className="card-body p-4">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: '80px', height: '80px' }}>
                  <i className="bi bi-geo-alt-fill fs-1 text-primary"></i>
                </div>
                <h5 className="fw-bold mb-2">Adres</h5>
                <p className="text-muted mb-0">
                  Maslak Mahallesi, Büyükdere Caddesi
                  <br />
                  No: 123, 34398
                  <br />
                  Sarıyer/İstanbul
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 text-center">
              <div className="card-body p-4">
                <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: '80px', height: '80px' }}>
                  <i className="bi bi-telephone-fill fs-1 text-success"></i>
                </div>
                <h5 className="fw-bold mb-2">Telefon</h5>
                <p className="text-muted mb-1">
                  <a
                    href="tel:+902121234567"
                    className="text-decoration-none text-muted"
                  >
                    +90 (212) 123 45 67
                  </a>
                </p>
                <p className="text-muted mb-0">
                  <a
                    href="tel:+905551234567"
                    className="text-decoration-none text-muted"
                  >
                    +90 (555) 123 45 67
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 text-center">
              <div className="card-body p-4">
                <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: '80px', height: '80px' }}>
                  <i className="bi bi-envelope-fill fs-1 text-warning"></i>
                </div>
                <h5 className="fw-bold mb-2">E-posta</h5>
                <p className="text-muted mb-1">
                  <a
                    href="mailto:info@example.com"
                    className="text-decoration-none text-muted"
                  >
                    info@example.com
                  </a>
                </p>
                <p className="text-muted mb-0">
                  <a
                    href="mailto:destek@example.com"
                    className="text-decoration-none text-muted"
                  >
                    destek@example.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="container mb-5">
        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h3 className="fw-bold mb-4">Bize Mesaj Gönderin</h3>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="firstName" className="form-label">
                        Adınız
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="Adınız"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lastName" className="form-label">
                        Soyadınız
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder="Soyadınız"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">
                        E-posta
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="ornek@email.com"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="phone" className="form-label">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        placeholder="+90 (555) 123 45 67"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="subject" className="form-label">
                        Konu
                      </label>
                      <select className="form-select" id="subject">
                        <option value="">Konu Seçiniz</option>
                        <option value="order">Sipariş Hakkında</option>
                        <option value="product">Ürün Bilgisi</option>
                        <option value="return">İade İşlemi</option>
                        <option value="support">Teknik Destek</option>
                        <option value="other">Diğer</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label">
                        Mesajınız
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        rows="5"
                        placeholder="Mesajınızı yazınız..."
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="consent"
                        />
                        <label className="form-check-label" htmlFor="consent">
                          <small className="text-muted">
                            KVKK kapsamında kişisel verilerimin işlenmesini
                            kabul ediyorum.
                          </small>
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg w-100"
                      >
                        <i className="bi bi-send me-2"></i>
                        Gönder
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Map & Working Hours */}
          <div className="col-lg-6">
            {/* Map */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.8203134689384!2d29.012341576493855!3d41.08566801722433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5e0e0e5c5e5%3A0x6e0e5e0e0e5c5e5!2sMaslak%2C%20B%C3%BCy%C3%BCkdere%20Cd.%2C%2034398%20Sar%C4%B1yer%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Ofis Konumu"
                ></iframe>
              </div>
            </div>

            {/* Working Hours */}
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3">
                  <i className="bi bi-clock me-2 text-primary"></i>
                  Çalışma Saatleri
                </h5>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex justify-content-between py-2 border-bottom">
                    <span>Pazartesi - Cuma</span>
                    <span className="fw-semibold">09:00 - 18:00</span>
                  </li>
                  <li className="d-flex justify-content-between py-2 border-bottom">
                    <span>Cumartesi</span>
                    <span className="fw-semibold">10:00 - 16:00</span>
                  </li>
                  <li className="d-flex justify-content-between py-2">
                    <span>Pazar</span>
                    <span className="fw-semibold text-danger">Kapalı</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-light py-5 mb-5">
        <div className="container">
          <h3 className="text-center fw-bold mb-5">Sık Sorulan Sorular</h3>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item border-0 shadow-sm mb-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq1"
                    >
                      Kargo ne kadar sürede teslim edilir?
                    </button>
                  </h2>
                  <div
                    id="faq1"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Siparişleriniz onaylandıktan sonra 1-3 iş günü içerisinde
                      kargoya verilir ve 2-5 iş günü içerisinde adresinize
                      teslim edilir.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 shadow-sm mb-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2"
                    >
                      İade süreci nasıl işliyor?
                    </button>
                  </h2>
                  <div
                    id="faq2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Ürün teslimatından itibaren 14 gün içerisinde iade
                      talebinde bulunabilirsiniz. Ürün kullanılmamış ve orijinal
                      ambalajında olmalıdır. İade kargo ücreti tarafımızca
                      karşılanır.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 shadow-sm mb-3">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq3"
                    >
                      Hangi ödeme yöntemlerini kabul ediyorsunuz?
                    </button>
                  </h2>
                  <div
                    id="faq3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Kredi kartı, banka kartı, havale/EFT ve kapıda ödeme
                      seçeneklerini kabul ediyoruz. Tüm ödeme işlemleriniz 256-bit
                      SSL şifreleme ile güvence altındadır.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 shadow-sm">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq4"
                    >
                      Ücretsiz kargo koşulları nelerdir?
                    </button>
                  </h2>
                  <div
                    id="faq4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      500 TL ve üzeri alışverişlerinizde kargo ücretsizdir.
                      Kampanyalı ürünlerde farklı koşullar geçerli olabilir.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="container mb-5">
        <div className="card border-0 shadow-sm">
          <div className="card-body p-5 text-center">
            <h3 className="fw-bold mb-3">Sosyal Medyada Bizi Takip Edin</h3>
            <p className="text-muted mb-4">
              Kampanyalar ve yeniliklerden ilk siz haberdar olun
            </p>
            <div className="d-flex gap-3 justify-content-center fs-1">
              <a href="#" className="text-primary">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-info">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-danger">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-primary">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="text-success">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="#" className="text-danger">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
