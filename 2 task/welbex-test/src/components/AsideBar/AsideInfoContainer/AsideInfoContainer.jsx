import classes from './AsideInfoContainer.module.scss';

function AsideInfoContainer({
  children
}) {
  return (
    <div className={classes.AsideInfoContainer}>
      {children}
    </div>
  );
}

export default AsideInfoContainer;