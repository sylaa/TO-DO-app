import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to='/' className='fa fa-tasks tasks_icon'>
            <span>tasks_icon</span>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => isActive ? styles.linkActive : ''}
            to='/'
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive ? styles.linkActive : ''}
            to='/favorite'
          >
            Favorite
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive ? styles.linkActive : ''}
            to='/about'
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
