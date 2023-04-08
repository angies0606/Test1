import classes from './AsideBar.module.scss';
import AsideInfo from './AsideInfo/AsideInfo';
import AsideInfoContainer from './AsideInfoContainer/AsideInfoContainer';
import { useMedia } from '../../hooks/mediaQueryHook';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

const laptopData = [
  [
    {header:'ВИДЖЕТЫ', mainText: ['30 готовых', 'решений']},
    {header:'DASHBOARD', mainText: ['с показателями', 'вашего бизнеса']}
  ],
  [
    {header:'SKYPE АУДИТ', mainText: ['отдела продаж', 'и CRM системы']},
    {header:'35 ДНЕЙ', mainText: ['использования', 'CRM']}
  ],
];

const mobileData = [
  [
    {header:'SKYPE АУДИТ'},
    {header:'30 ВИДЖЕТОВ'}
  ],
  [
    {header:'DASHBOARD'},
    {header:'МЕСЯЦ AMOCRM'}
  ],
];

function getData (isLaptop) {
  return isLaptop ? laptopData : mobileData;
}

function AsideBar() {
  const {isLaptop} = useMedia();

  const [infoData, setInfoData] = useState(() => getData(isLaptop));

  useEffect (() => {
    setInfoData(getData(isLaptop));
  }, [isLaptop])
  
  return (
    <aside className={classes.AsideBar}>
      <header className={classes.AsideBar__Header}>
        Вместе с&nbsp;  
        <span className={classNames(classes.AsideBar__HeaderSpan, classes.AsideBar__Span1)}>БЕСПЛАТНОЙ</span>
        <br/>
        <span className={classNames(classes.AsideBar__HeaderSpan, classes.AsideBar__Span2)}>КОНСУЛЬТАЦИЕЙ</span>
        &nbsp;мы дарим:
      </header>
      { infoData.map((row, index) => {
          return (
            <AsideInfoContainer key={index}>
              {row.map((elem, index) => {
                return <AsideInfo key={index} header={elem.header} mainText={elem?.mainText} />
              })}
            </AsideInfoContainer>
          ) 
        })
      }
      { isLaptop 
        &&
        <button className={classes.AsideBar__Button}>Получить консультацию</button>
      }
    </aside>
  );
}

export default AsideBar;