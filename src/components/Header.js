import { useContext } from 'react';

import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import CompletedContext from '../store/completed-context';

function Header() {
  const completedCtx = useContext(CompletedContext);

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
            <Link to="/completed">
              Completed
              <span className={classes.badge}>
                {completedCtx.totalCompletedProjects}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
