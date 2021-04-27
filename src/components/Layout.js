import Header from './Header';
import classes from './Layout.module.css';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={classes.main}>{children}</main>
    </>
  );
}

export default Layout;
