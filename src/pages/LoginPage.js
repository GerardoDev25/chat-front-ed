import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import Swal from 'sweetalert2';
const LoginPage = () => {
  const [form, setForm] = useState({
    email: 'jonh@doe.test',
    password: '123456',
    rememberme: true,
  });

  const { login } = useContext(AuthContext);

  const { email, password, rememberme } = form;

  useEffect(() => {
    const email = localStorage.getItem('email');
    email && setForm((e) => ({ ...e, email, rememberme: true }));
  }, [setForm]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const toogleCheck = () => {
    setForm({ ...form, rememberme: !rememberme });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    rememberme ? localStorage.setItem('email', email) : localStorage.removeItem('email');

    const ok = await login(email, password);
    if (!ok) {
      Swal.fire('Error', 'verifique el usuario y la contraseña', 'error');
    }
  };

  const todoOk = () => {
    return email.length > 0 && password.length > 0;
  };

  return (
    <form className="login100-form validate-form flex-sb flex-w" onSubmit={handleSubmit}>
      <span className="login100-form-title mb-3"> Chat - Ingreso </span>

      <div className="wrap-input100 validate-input mb-3">
        <input
          //
          className="input100"
          onChange={handleChange}
          value={email}
          type="email"
          name="email"
          placeholder="Email"
        />

        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 validate-input mb-3">
        <input
          //
          className="input100"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          placeholder="Password"
        />
        <span className="focus-input100"></span>
      </div>

      <div className="row mb-3">
        <div className="col" onClick={toogleCheck}>
          <input
            //
            className="input-checkbox100"
            id="ckb1"
            type="checkbox"
            name="rememberme"
            readOnly
            checked={rememberme}
          />
          <label className="label-checkbox100"> Recordarme </label>
        </div>

        <div className="col text-right">
          <Link to="/auth/register" className="txt1">
            Nueva cuenta?
          </Link>
        </div>
      </div>

      <div className="container-login100-form-btn m-t-17">
        <button type="submit" disabled={!todoOk()} className="login100-form-btn">
          Ingresar
        </button>
      </div>
    </form>
  );
};

export default LoginPage;
