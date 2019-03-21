import React from 'react';

import CardProfile from './CardProfile';
import LightSwitch from './LightSwitch';
export default function Sidebar(props) {
  return (
    <div>
      <CardProfile />
      {props.siteConfig.darkTheme && props.siteConfig.darkTheme !== '' ? (
        <>
        <LightSwitch onClick={props.themeSwitch} themeType={props.themeType} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
