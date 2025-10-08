import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email boş bırakılamaz!')
    .email('Geçerli bir e-posta adresi giriniz.'),

  password: yup
    .string()
    .required('Şifre alanı zorunludur.')
    .min(6, 'Şifre en az 6 karakter olmalıdır.')
    .max(30, 'Şifre 30 karakterden uzun olamaz.'),

  rememberMeCheck: yup.boolean(),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  //   console.log(watch("rememberMeCheck"));
  //   console.log(watch("email"));

  function onSubmit(data) {
    console.log(data);
  }
  console.log(errors);

  return (
    <div className="justify-content-center w-100 mt-4">
      <div className="card shadow-lg border-0">
        <div className="card-header bg-dark text-white text-center py-3">
          <h4 className="mb-0">
            <i className="bi bi-person-circle me-2"></i>
            Üye Girişi
          </h4>
        </div>
        <div className="card-body p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label
                htmlFor="emailInput"
                className="form-label visually-hidden"
              >
                Email Adresi
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="emailInput"
                placeholder="E-posta adresiniz"
                {...register('email')}
              />
              {errors.email && (
                <span className="text-danger mt-1 d-inline-flex">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="passwordInput"
                className="form-label visually-hidden"
              >
                Şifre
              </label>
              <input
                type="password"
                className="form-control form-control-lg"
                id="passwordInput"
                placeholder="Şifreniz"
                {...register('password')}
              />
               {errors.password && (
                <span className="text-danger mt-1 d-inline-flex">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="rememberMeCheck"
                  {...register('rememberMeCheck')}
                />
                <label
                  className="form-check-label text-muted"
                  htmlFor="rememberMeCheck"
                >
                  Beni Hatırla
                </label>
              </div>
              <a href="#" className="text-decoration-none">
                Şifremi Unuttum?
              </a>
            </div>

            <div className="d-grid">
              <button className="btn btn-primary btn-lg fw-bold">
                GİRİŞ YAP
              </button>
            </div>
          </form>
        </div>
        <div className="card-footer text-center bg-light p-3">
          <p className="mb-0 text-muted">
            Henüz hesabınız yok mu?{' '}
            <a href="#" className="text-success fw-bold">
              Hemen Kayıt Olun
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
