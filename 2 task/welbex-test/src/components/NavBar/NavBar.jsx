import classes from './NavBar.module.scss';

function NavBar() {
  return (
    <nav className={classes.NavBar}>
      <a className={classes.NavBar__Link} href={''}>Услуги</a>
      <a className={classes.NavBar__Link} href={''}>Виджеты</a>
      <a className={classes.NavBar__Link} href={''}>Интеграции</a>
      <a className={classes.NavBar__Link} href={''}>Кейсы</a>
      <a className={classes.NavBar__Link} href={''}>Сертификаты</a>
    </nav>
  );
}

export default NavBar;