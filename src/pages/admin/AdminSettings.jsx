function AdminSettings() {
  return (
    <div className="admin-settings">
      {/* Page Header */}
      <div className="mb-4">
        <h2 className="fw-bold">Ayarlar</h2>
        <p className="text-muted">Site ve hesap ayarlarınızı yönetin</p>
      </div>

      <div className="row g-4">
        {/* Settings Navigation */}
        <div className="col-lg-3">
          <div className="card border-0 shadow-sm">
            <div className="list-group list-group-flush">
              <a href="#general" className="list-group-item list-group-item-action active">
                <i className="bi bi-gear me-2"></i>
                Genel Ayarlar
              </a>
              <a href="#site" className="list-group-item list-group-item-action">
                <i className="bi bi-globe me-2"></i>
                Site Ayarları
              </a>
              <a href="#payment" className="list-group-item list-group-item-action">
                <i className="bi bi-credit-card me-2"></i>
                Ödeme Ayarları
              </a>
              <a href="#shipping" className="list-group-item list-group-item-action">
                <i className="bi bi-truck me-2"></i>
                Kargo Ayarları
              </a>
              <a href="#notifications" className="list-group-item list-group-item-action">
                <i className="bi bi-bell me-2"></i>
                Bildirimler
              </a>
              <a href="#security" className="list-group-item list-group-item-action">
                <i className="bi bi-shield-lock me-2"></i>
                Güvenlik
              </a>
            </div>
          </div>
        </div>

        {/* Settings Content */}
        <div className="col-lg-9">
          {/* General Settings */}
          <div className="card border-0 shadow-sm mb-4" id="general">
            <div className="card-body">
              <h5 className="card-title fw-bold mb-4">Genel Ayarlar</h5>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Site Adı</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="E-Ticaret Store"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Site URL</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="https://example.com"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Destek E-posta</label>
                    <input
                      type="email"
                      className="form-control"
                      defaultValue="destek@example.com"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Telefon</label>
                    <input
                      type="tel"
                      className="form-control"
                      defaultValue="+90 212 123 45 67"
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Site Açıklaması</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      defaultValue="En kaliteli ürünler ve en uygun fiyatlar"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      <i className="bi bi-check-circle me-2"></i>
                      Değişiklikleri Kaydet
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Site Settings */}
          <div className="card border-0 shadow-sm mb-4" id="site">
            <div className="card-body">
              <h5 className="card-title fw-bold mb-4">Site Ayarları</h5>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Dil</label>
                    <select className="form-select">
                      <option value="tr">Türkçe</option>
                      <option value="en">English</option>
                      <option value="de">Deutsch</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Para Birimi</label>
                    <select className="form-select">
                      <option value="try">₺ TRY</option>
                      <option value="usd">$ USD</option>
                      <option value="eur">€ EUR</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Zaman Dilimi</label>
                    <select className="form-select">
                      <option>Europe/Istanbul</option>
                      <option>Europe/London</option>
                      <option>America/New_York</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Tarih Formatı</label>
                    <select className="form-select">
                      <option>DD/MM/YYYY</option>
                      <option>MM/DD/YYYY</option>
                      <option>YYYY-MM-DD</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="maintenanceMode"
                      />
                      <label className="form-check-label" htmlFor="maintenanceMode">
                        Bakım Modu (Site geçici olarak kapatılır)
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="allowRegistration"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="allowRegistration">
                        Yeni Üyelik Kayıtlarına İzin Ver
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      <i className="bi bi-check-circle me-2"></i>
                      Değişiklikleri Kaydet
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Payment Settings */}
          <div className="card border-0 shadow-sm mb-4" id="payment">
            <div className="card-body">
              <h5 className="card-title fw-bold mb-4">Ödeme Ayarları</h5>
              <div className="row g-3">
                <div className="col-12">
                  <div className="card bg-light">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h6 className="mb-1">
                            <i className="bi bi-credit-card text-primary me-2"></i>
                            Kredi Kartı Ödemesi
                          </h6>
                          <small className="text-muted">Visa, Mastercard, Amex</small>
                        </div>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultChecked
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card bg-light">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h6 className="mb-1">
                            <i className="bi bi-cash-coin text-success me-2"></i>
                            Kapıda Ödeme
                          </h6>
                          <small className="text-muted">Nakit veya kredi kartı</small>
                        </div>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultChecked
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card bg-light">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h6 className="mb-1">
                            <i className="bi bi-bank text-info me-2"></i>
                            Havale / EFT
                          </h6>
                          <small className="text-muted">Banka hesabına transfer</small>
                        </div>
                        <div className="form-check form-switch">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Settings */}
          <div className="card border-0 shadow-sm mb-4" id="shipping">
            <div className="card-body">
              <h5 className="card-title fw-bold mb-4">Kargo Ayarları</h5>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Ücretsiz Kargo Limiti</label>
                    <input
                      type="number"
                      className="form-control"
                      defaultValue="500"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Standart Kargo Ücreti</label>
                    <input
                      type="number"
                      className="form-control"
                      defaultValue="29.90"
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Kargo Şirketi</label>
                    <select className="form-select">
                      <option>Aras Kargo</option>
                      <option>Yurtiçi Kargo</option>
                      <option>MNG Kargo</option>
                      <option>PTT Kargo</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      <i className="bi bi-check-circle me-2"></i>
                      Değişiklikleri Kaydet
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Notifications */}
          <div className="card border-0 shadow-sm mb-4" id="notifications">
            <div className="card-body">
              <h5 className="card-title fw-bold mb-4">Bildirim Ayarları</h5>
              <div className="row g-3">
                <div className="col-12">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="emailOrders"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="emailOrders">
                      Yeni siparişler için e-posta bildirimi
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="emailCustomers"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="emailCustomers">
                      Yeni müşteri kayıtları için bildirim
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="emailLowStock"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="emailLowStock">
                      Düşük stok uyarısı
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="emailReviews"
                    />
                    <label className="form-check-label" htmlFor="emailReviews">
                      Yeni ürün yorumları için bildirim
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="card border-0 shadow-sm" id="security">
            <div className="card-body">
              <h5 className="card-title fw-bold mb-4">Güvenlik Ayarları</h5>
              <form>
                <div className="row g-3">
                  <div className="col-12">
                    <label className="form-label">Mevcut Şifre</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Yeni Şifre</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Yeni Şifre Tekrar</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="col-12">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="twoFactor"
                      />
                      <label className="form-check-label" htmlFor="twoFactor">
                        İki Faktörlü Kimlik Doğrulamayı Etkinleştir
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary me-2">
                      <i className="bi bi-check-circle me-2"></i>
                      Şifreyi Güncelle
                    </button>
                    <button type="button" className="btn btn-outline-danger">
                      <i className="bi bi-box-arrow-right me-2"></i>
                      Tüm Oturumlardan Çıkış Yap
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSettings;
