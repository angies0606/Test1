import classes from './ImgLink.module.scss';
import classNames from 'classnames';

function ImgLink({
  image,
  href = '',
  linkClassName = null,
  imageClassName = null
}) {
  return (
    <a className={classNames(classes.ImgLink, linkClassName)} href={href}>
      <img className={imageClassName} src={image}></img>
    </a>
  );
}

export default ImgLink;