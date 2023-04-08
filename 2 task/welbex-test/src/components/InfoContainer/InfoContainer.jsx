import SloganContainer from '../SloganContainer/SloganContainer';
import AsideBar from '../AsideBar/AsideBar';
import classes from './InfoContainer.module.scss';

function InfoContainer() {
  return (
    <main className={classes.InfoContainer}>
      <SloganContainer />
      <AsideBar />
    </main>
  );
}

export default InfoContainer;