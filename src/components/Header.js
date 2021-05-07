import { useState, useContext } from 'react';

import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import CompletedContext from '../store/completed-context';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const completedCtx = useContext(CompletedContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>My Projects</div>
      <nav>
        <ul className={`${classes.menu} ${isOpen ? classes.show : ''}`}>
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
      <div onClick={() => setIsOpen(!isOpen)} className={classes.burger}>
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </div>
    </header>
  );
}

export default Header;
