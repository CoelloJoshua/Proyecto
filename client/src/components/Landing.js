import { Link } from 'react-router-dom';

const Landing = props => (
  <div className="Landing">
    <h1>XD</h1>
    <p>xd</p>
    <Link className="primary" to="/register">Registrarse</Link>
    <Link to="/login">Ya tengo usuario</Link>
  </div>
);

export default Landing;