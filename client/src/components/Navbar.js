import { Link, useHistory } from 'react-router-dom';

const Navbar = props => {
  // props
  const { user, setUser } = props;
  const history = useHistory();
  // handlers
  const handleClick = e => {
    localStorage.removeItem('token');
    setUser(false);
    history.push('/');
  };
  // render
  return (
    <div className="Navbar">
      <ul>
        <li>
          <Link to="/">Start</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          {user
            ? <button onClick={handleClick}>Logout</button>
            : <Link to="/login">Join</Link>}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;