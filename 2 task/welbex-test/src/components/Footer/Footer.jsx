import ContactsContainer from '../ContactsContainer/ContactsContainer';
import classes from './Footer.module.scss';
import FooterInfoCol from './FooterInfoCol/FooterInfoCol';
import { useMedia } from '../../hooks/mediaQueryHook';
import classNames from 'classnames';

function Footer({
  className
}) {
  const {isLaptop} = useMedia();
  return (
    <footer className={classNames(classes.Footer, className)}>
      <div className={classes.Footer__InfoBox}>
        <div className={classes.Footer__LeftInfoCol}>
          <FooterInfoCol 
            style={classes.Footer__InfoBoxLeftElement}
            header={{
              name:'О КОМПАНИИ',
              href: ''
            }}
            links={[
              { name: 'Партнёрская программа',
                href: ''
              },
              { name: 'Вакансии',
                href: ''
              }
            ]}
          />
          <FooterInfoCol 
            style={classes.Footer__InfoBoxLeftElement}
            header={{ 
              name:'МЕНЮ',
              href: ''
            }}
            links={[
              { name: 'Расчёт стоимости',
                href: ''
              },
              { name: 'Услуги',
                href: ''
              },
              { name: 'Виджеты',
                href: ''
              },
              { name: 'Интеграции',
                href: ''
              },
              { name: 'Наши клиенты',
                href: ''
              },
              { name: 'Кейсы',
                href: ''
              },
              { name: 'Благодарственные письма',
                href: ''
              },
              { name: 'Сертификаты',
                href: ''
              },
              { name: 'Блог на Youtube',
                href: ''
              },
              { name: 'Вопрос / Ответ',
                href: ''
              }
            ]}
          />
        </div>
        <FooterInfoCol
          style={classes.Footer__InfoBoxLastElement}
          header={{ 
            name: 'КОНТАКТЫ',
            href: ''
          }}
        >
          <ContactsContainer 
            address={{
              text: 'Москва, Путевой проезд 3с1, к 902',
              style: classes.Footer__Address
            }}
            className={classes.Footer__ContactsContainer}
            phoneClassName={classes.Footer__Phone}
            socialContactsClassName={classes.Footer__SocialContacts}
            linkClassName={classes.Footer__SocialContactsLink}
          />
        </FooterInfoCol>
      </div>
      <div className={classes.Footer__BottomInfo}>
        <div>
          ©WELBEX 2022. Все права защищены.
        </div>
        <a 
          className={classes.Footer__BottomLink}
          href={''}
        >
          Политика конфиденциальности
        </a>
      </div>
    </footer>
  );
}

export default Footer;