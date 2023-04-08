import classes from './ContactsContainer.module.scss';
import classNames from 'classnames';
import SocialContacts, {SIZES} from '../../ui-kit/SocialContacts/SocialContacts';
import {useMedia} from '../../hooks/mediaQueryHook'

function ContactsContainer({
  address = null,
  className = null,
  phoneClassName = null,
  socialContactsClassName = null,
  linkClassName = null,
  imageClassName = null
}) {
  const {isLaptop} = useMedia();

  return (
    <div className={classNames(classes.ContactsContainer, className)}>
      <div className={classNames(classes.ContactsContainer__Phone, phoneClassName)}>
        +7 555 555-55-55
      </div>
      <SocialContacts
        className={classNames(classes.ContactsContainer__SocialContacts, socialContactsClassName)}
        linkClassName={linkClassName}
        imageClassName={imageClassName}
        size={isLaptop ? SIZES.SMALL : SIZES.BIG}
      />
      { address 
        && 
        <div className={classNames(classes.ContactsContainer__Adress, address?.style)}>
          {address?.text}
        </div>
      }
    </div>
  );
}

export default ContactsContainer;