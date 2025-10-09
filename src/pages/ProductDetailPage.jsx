import { useEffect, useState } from 'react';

function ProductDetailPage() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/5`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  if(!product) return <h2>Loading...</h2> 

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Sol Taraf - Ürün Görseli */}
        <div className="col-md-6 mb-4">
          <div className="card border-0 shadow-sm">
            <img
              src={product.image}
              alt="Product"
              className="card-img-top p-4"
              style={{ height: '500px', objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Sağ Taraf - Ürün Bilgileri */}
        <div className="col-md-6">
          <div className="d-flex flex-column gap-3">
            {/* Kategori Badge */}
            <div>
              <span className="badge bg-primary">{product.category}</span>
            </div>

            {/* Ürün Başlığı */}
            <h1 className="display-6 fw-bold">{product.title}</h1>

            {/* Rating ve Yorum Sayısı */}
            <div className="d-flex align-items-center gap-2">
              <div className="text-warning">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
              </div>
              <span className="text-muted">({product.rating.rate})</span>
              <span className="text-muted">|</span>
              <span className="text-muted">{product.rating.count} Yorum</span>
            </div>

            {/* Fiyat */}
            <div className="d-flex align-items-center gap-3">
              <h2 className="text-danger fw-bold mb-0">₺{product.price}</h2>
              <span className="text-muted text-decoration-line-through">
                ₺1,299.99
              </span>
              <span className="badge bg-success">%31 İndirim</span>
            </div>

            {/* Ürün Açıklaması */}
            <div className="card bg-light border-0">
              <div className="card-body">
                <h5 className="card-title">Ürün Açıklaması</h5>
                <p className="card-text text-muted">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Stok Durumu */}
            <div
              className="alert alert-success d-flex align-items-center gap-2"
              role="alert"
            >
              <i className="bi bi-check-circle-fill"></i>
              <span>Stokta Mevcut</span>
            </div>

            {/* Miktar Seçici */}
            <div className="d-flex align-items-center gap-3">
              <label className="fw-semibold">Miktar:</label>
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-outline-secondary">
                  -
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  disabled
                >
                  1
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  +
                </button>
              </div>
            </div>

            {/* Aksiyon Butonları */}
            <div className="d-flex gap-2">
              <button className="btn btn-primary btn-lg flex-grow-1">
                <i className="bi bi-cart-plus me-2"></i>
                Sepete Ekle
              </button>
              <button className="btn btn-outline-danger btn-lg">
                <i className="bi bi-heart"></i>
              </button>
            </div>

            {/* Özellikler */}
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-3">Ürün Özellikleri</h5>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <strong>Marka:</strong> Fjallraven
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <strong>Malzeme:</strong> %100 Polyester
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <strong>Kapasite:</strong> 15" Laptop
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <strong>Garanti:</strong> 2 Yıl
                  </li>
                  <li className="mb-0">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <strong>Kargo:</strong> Ücretsiz
                  </li>
                </ul>
              </div>
            </div>

            {/* Teslimat Bilgisi */}
            <div className="card bg-info bg-opacity-10 border-info">
              <div className="card-body">
                <div className="d-flex align-items-center gap-3">
                  <i className="bi bi-truck fs-2 text-info"></i>
                  <div>
                    <h6 className="mb-1 fw-bold">Hızlı Teslimat</h6>
                    <p className="mb-0 text-muted small">
                      Bugün sipariş verirseniz <strong>yarın kapınızda</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benzer Ürünler Bölümü */}
      <div className="row mt-5">
        <div className="col-12">
          <h3 className="mb-4 fw-bold">Benzer Ürünler</h3>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card h-100 shadow-sm">
            <img
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
              alt="Similar Product"
              className="card-img-top p-3"
              style={{ height: '200px', objectFit: 'contain' }}
            />
            <div className="card-body">
              <h6 className="card-title text-truncate">
                Mens Casual Premium Slim Fit T-Shirts
              </h6>
              <div className="d-flex justify-content-between align-items-center">
                <span className="text-danger fw-bold">₺199.99</span>
                <button className="btn btn-sm btn-outline-primary">
                  <i className="bi bi-cart-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card h-100 shadow-sm">
            <img
              src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
              alt="Similar Product"
              className="card-img-top p-3"
              style={{ height: '200px', objectFit: 'contain' }}
            />
            <div className="card-body">
              <h6 className="card-title text-truncate">Mens Cotton Jacket</h6>
              <div className="d-flex justify-content-between align-items-center">
                <span className="text-danger fw-bold">₺499.99</span>
                <button className="btn btn-sm btn-outline-primary">
                  <i className="bi bi-cart-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card h-100 shadow-sm">
            <img
              src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
              alt="Similar Product"
              className="card-img-top p-3"
              style={{ height: '200px', objectFit: 'contain' }}
            />
            <div className="card-body">
              <h6 className="card-title text-truncate">Mens Casual Slim Fit</h6>
              <div className="d-flex justify-content-between align-items-center">
                <span className="text-danger fw-bold">₺149.99</span>
                <button className="btn btn-sm btn-outline-primary">
                  <i className="bi bi-cart-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card h-100 shadow-sm">
            <img
              src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
              alt="Similar Product"
              className="card-img-top p-3"
              style={{ height: '200px', objectFit: 'contain' }}
            />
            <div className="card-body">
              <h6 className="card-title text-truncate">
                Solid Gold Petite Micropave
              </h6>
              <div className="d-flex justify-content-between align-items-center">
                <span className="text-danger fw-bold">₺1,299.99</span>
                <button className="btn btn-sm btn-outline-primary">
                  <i className="bi bi-cart-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
