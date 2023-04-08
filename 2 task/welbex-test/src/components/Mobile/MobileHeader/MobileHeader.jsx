import classes from './MobileHeader.module.scss';
import Logo from '../../../assets/images/welbex_letters.png';
import SocialContacts, {SIZES} from '../../../ui-kit/SocialContacts/SocialContacts';

function MobileHeader() {
  return (
    <header className={classes.MobileHeader}>
      <div className={classes.MobileHeader__LogoAndContactsContainer}>
        <div className={classes.MobileHeader__LogoAndContacts}>
          <div>
            <img className={classes.MobileHeader__Logo} src={Logo} />
          </div>
          <SocialContacts
            className={classes.MobileHeader__Contacts}
            linkClassName={classes.MobileHeader__Link}
            imageClassName={classes.MobileHeader__Image}
            size={SIZES.BIG}
          />
        </div>
      </div>
      <nav className={classes.MobileHeader__Buttons}>
        <button className={classes.MobileHeader__Button}>УСЛУГИ</button>
        <button className={classes.MobileHeader__Button}>ВИДЖЕТЫ</button>
        <button className={classes.MobileHeader__Button}>ИНТЕГРАЦИИ</button>
        <button className={classes.MobileHeader__Button}>КЕЙСЫ</button>
      </nav>
    </header>
  )
}

export default MobileHeader;