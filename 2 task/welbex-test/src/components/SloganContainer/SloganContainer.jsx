import classes from './SloganContainer.module.scss';

function SloganContainer() {
  return (
    <section className={classes.SloganContainer}>
      <header className={classes.SloganContainer__SloganLarge}>
        Зарабатывайте больше
        <br />  
        <span className={classes.SloganContainer__SloganSpan}>c WELBEX</span>
      </header>
      <div className={classes.SloganContainer__SloganSmall}>
        Развиваем и контролируем
        <br /> 
        продажи за Вас
      </div>
    </section>
  );
}

export default SloganContainer;