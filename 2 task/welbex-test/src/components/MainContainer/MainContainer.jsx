import InfoContainer from '../InfoContainer/InfoContainer';
import classes from './MainContainer.module.scss';
import Header from '../Header/Header';
import classNames from 'classnames';
import { useMedia } from '../../hooks/mediaQueryHook';
import MobileHeader from '../Mobile/MobileHeader/MobileHeader';

function MainContainer({
  className
}) {
  const {isLaptop} = useMedia();
  return (
    <main className={classNames(classes.MainContainer, className)}>
      {
        !isLaptop &&
        <MobileHeader />
      }
      {
        isLaptop &&
        <Header />
      }
      <InfoContainer />
    </main>
  );
}

export default MainContainer;