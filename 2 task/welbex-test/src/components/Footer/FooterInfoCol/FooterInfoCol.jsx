import { useMemo } from 'react';
import classes from './FooterInfoCol.module.scss';
import classNames from 'classnames';

const N_LINKS = 5;

const linkColumns = (linksArr) => {
  const result = [];
  let column = [];
  for (let i = 0; i < linksArr.length; i++) {
    column.push(linksArr[i]);
    if (column.length === 1) {
      result.push(column);
    }
    if((i + 1) % N_LINKS === 0 && i !== 0) {
      column = [];
    }
  }
  return result;
}

function FooterInfoCol({
  header = null,
  links = [],
  children = null,
  style = null
}) {
  
  const columnsArr = useMemo (() => linkColumns(links), [links]);
  
  return (
    <div className={classNames(classes.FooterInfoCol, style)}>
      <span 
        className={classes.FooterInfoCol__Header}
      >
        {header?.name}
      </span>
      {links.length > 0 
        ? 
          <div className={classes.FooterInfoCol__Links}>
            {columnsArr.map((column, index) => {
              return (
                <div key={index} className={classes.FooterInfoCol__LinksColumn}>
                  {column.map((link, index) => {
                    return (
                      <a 
                        key={index}
                        className={classes.FooterInfoCol__Link} 
                        href={link.href}
                      >
                        {link.name}
                      </a>
                    )
                  })}
                </div>
              )
            })}
          </div>
        : null
      }
      {children}
    </div>
  )
}

export default FooterInfoCol;