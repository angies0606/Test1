import classes from './LogoContainer.module.scss';
import Logo from '../../assets/images/logo_welbex.png';

function LogoContainer() {
  return (
    <div className={classes.LogoContainer}>
      <img className={classes.LogoContainer__Logo} src={Logo} alt='Welbex logo' />
      <div className={classes.LogoContainer__Text}>
        крупный интегратор CRM<br />
        в Росcии и ещё 8 странах
      </div>
    </div>
  );
}

export default LogoContainer;