import React, { useMemo } from 'react';
import importAll from 'import-all.macro';

// todo: useMemo as performance enhancement
let iconsList = [];

try {
  iconsList = Object.entries(importAll.deferred('./icons/*.svg')).reduce(
    (a, [path, loader]) => {
      const key = path.replace('./icons/', '').replace('.svg', '');

      // eslint-disable-next-line no-param-reassign,no-async-promise-executor
      a[key] = () =>
        new Promise(async (resolve, reject) => {
          try {
            const { default: _icon_ } = await loader();
            resolve({
              key,
              href: _icon_,
            });
          } catch (e) {
            reject(e);
          }
        });

      return a;
    },
    {}
  );
} catch (err) {
  console.error(err);
}

export default function CvMeIcons(props) {
  const [icon, setIcon] = React.useState({});
  const updateIconRef = React.useRef();

  React.useEffect(() => {
    updateIconRef.current = setIcon;
  }, [setIcon]);

  React.useEffect(() => {
    try {
      // eslint-disable-next-line no-undef
      const iconLoader = iconsList[props.name];

      iconLoader().then((i) => updateIconRef.current(i));
    } catch (e) {
      console.error(e);
      // debugger // eslint-disable-line
    }
  }, [props.name]);

  if (!icon?.href) {
    return '-';
  }

  return (
    <svg
      className={`cvme-icon cvme-icon-${props.iconSize || 20} cvme-icon-${
        props.statusColor || 'text-color'
      }`}
      {...props}
    >
      {props.showIconName ? <title>{icon.key}</title> : null}
      <use href={`${icon.href}#${icon.key}`} />
    </svg>
    // <img src={icon.href} />
  );
}
