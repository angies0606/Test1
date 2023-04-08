import ContactsContainer from '../ContactsContainer/ContactsContainer';
import NavBar from '../NavBar/NavBar';
import LogoContainer from '../LogoContainer/LogoContainer';
import classes from './Header.module.scss';

function Header() {
  return (
    <header className={classes.Header}>
      <div className={classes.Header__LogoAndNavBox}>
        <LogoContainer />
        <NavBar />
      </div>
      <ContactsContainer
        className={classes.Header__ContactsContainer}
        phoneClassName={classes.Header__Phone}
        socialContactsClassName={classes.Header__SocialContacts}
      />
    </header>
  );
}

export default Header;
