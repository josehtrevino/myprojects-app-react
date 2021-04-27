import { Link } from 'react-router-dom';
import classes from './Header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>My Projects</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Projects</Link>
          </li>
          <li>
            <Link to="/new-project">Add New Project</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
