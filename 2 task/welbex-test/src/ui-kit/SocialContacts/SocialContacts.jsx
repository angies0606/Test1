import {useMemo} from 'react';
import SmallTelegramIcon from '../../assets/icons/telegram.png';
import SmallPhoneIcon from '../../assets/icons/phone.png';
import SmallWhatsAppIcon from '../../assets/icons/whatsApp.png';
import BigTelegramIcon from '../../assets/icons/mobile_Telegram.png';
import BigPhoneIcon from '../../assets/icons/mobile_Phone.png';
import BigWhatsAppIcon from '../../assets/icons/mobile_WA.png';
import classNames from 'classnames';
import classes from './SocialContacts.module.scss';
import ImgLink from '../ImgLink/ImgLink';

export const SIZES = {
  SMALL: 'SMALL',
  BIG: 'BIG'
}

export default function SocialContacts({
  className,
  linkClassName,
  imageClassName,
  size
}) {
  const telegramIcon = useMemo(() => {
    if (size === SIZES.SMALL) return SmallTelegramIcon;
    if (size === SIZES.BIG) return BigTelegramIcon;
  }, [size]);
  const phoneIcon = useMemo(() => {
    if (size === SIZES.SMALL) return SmallPhoneIcon;
    if (size === SIZES.BIG) return BigPhoneIcon;
  }, [size]);
  const whatsAppIcon = useMemo(() => {
    if (size === SIZES.SMALL) return SmallWhatsAppIcon;
    if (size === SIZES.BIG) return BigWhatsAppIcon;
  }, [size]);

  return (
    <div className={classNames(classes.SocialContacts, className)}>
      <ImgLink
        image={telegramIcon}
        href={''}
        linkClassName={classNames(classes.SocialContacts__Link, linkClassName)}
        imageClassName={imageClassName}
      />
      <ImgLink
        image={phoneIcon}
        href={''}
        linkClassName={classNames(classes.SocialContacts__Link, linkClassName)}
        imageClassName={imageClassName}
      />
      <ImgLink
        image={whatsAppIcon}
        href={''}
        linkClassName={classNames(classes.SocialContacts__Link, linkClassName)}
        imageClassName={imageClassName}
      />
    </div>
  );
}