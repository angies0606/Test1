import classes from './AsideInfo.module.scss';

function AsideInfo({
  header, 
  mainText
}) {
  return (
    <div className={classes.AsideInfo}>
      <div className={classes.AsideInfo__Header}>
        <span className={classes.AsideInfo__Dash}></span>
        {header}
      </div>
      {mainText?.map((string, index) => {
        return (
          <div 
            key={index} 
            className={classes.AsideInfo__String}
          >
            {string}
          </div>
        )
      })}
    </div>
  );
}

export default AsideInfo;