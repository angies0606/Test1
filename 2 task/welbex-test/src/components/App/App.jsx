import BackgroundWithImg from '../BackgroundWithImg/BackgroundWithImg';
import Footer from '../Footer/Footer';
import MainContainer from '../MainContainer/MainContainer';
import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.App}>
      <MainContainer className={classes.App__MainContainer} />
      <Footer className={classes.App__Footer} />
      <BackgroundWithImg className={classes.App__BackgroundWithImg} />
    </div>
  );
}

export default App;