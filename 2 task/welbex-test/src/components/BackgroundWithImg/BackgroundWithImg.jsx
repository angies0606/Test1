import classes from './BackgroundWithImg.module.scss';
import PurpleBall from '../../assets/images/purple_ball.png';
import BigRedBall from '../../assets/images/red_ball_big.png';
import SmallRedBall from '../../assets/images/red_ball_small.png';
import PurpleLight from '../../assets/images/purple_light.png';
import RedLight from '../../assets/images/red_light.png';
import MobNoise from '../../assets/images/mobile_noise.png';
import MobPurpleLight from '../../assets/images/mobile_purple_light.png';
import MobRedLight from '../../assets/images/mobile_red_light.png';
import MobYellowLight from '../../assets/images/mobile_yellow_light.png';
import MobBigRedBall from '../../assets/images/mobile_red_ball_big.png';
import MobPurpleBall from '../../assets/images/mobile_purple_ball.png';
import MobRedBall from '../../assets/images/mobile_red_ball.png';
import { useMedia } from '../../hooks/mediaQueryHook';

import classNames from 'classnames';

function BackgroundWithImg({
  className
}) {
  const {isLaptop} = useMedia();

  return (
    <div className={classNames(classes.BackgroundWithImg, className)}>
      {isLaptop 
        ?
        <>
          <img className={classes.App__PurpleBall} src={PurpleBall}></img>
          <img className={classes.App__BigRedBall} src={BigRedBall}></img>
          <img className={classes.App__SmallRedBall} src={SmallRedBall}></img>
          <img className={classes.App__PurpleLight} src={PurpleLight}></img>
          <img className={classes.App__RedLight} src={RedLight}></img>
        </>
        :
        <>
          <img className={classes.App__MobNoise} src={MobNoise}></img>
          <img className={classes.App__MobPurpleLight} src={MobPurpleLight}></img>
          <img className={classes.App__MobRedLight} src={MobRedLight}></img>
          <img className={classes.App__MobYellowLight} src={MobYellowLight}></img>
          <img className={classes.App__MobBigRedBall} src={MobBigRedBall}></img>
          <img className={classes.App__MobPurpleBall} src={MobPurpleBall}></img>
          <img className={classes.App__MobRedBall} src={MobRedBall}></img>
        </>
      }
    </div>
  );
}

export default BackgroundWithImg;