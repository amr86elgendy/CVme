import React from 'react';
import { ConfigProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import AppLocale from './translations';

function AppProvider({ children }) {
  // const { locale } = useSelector((state) => state.LanguageSwitcher.language);
  // const { themeName } = useSelector(
  //   (state) => state.ThemeSwitcher.changeThemes
  // );
  const currentAppLocale = AppLocale['en'];
  
  return (
    <ConfigProvider locale={currentAppLocale.antd}>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      >
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </IntlProvider>
    </ConfigProvider>
  );
}

export default AppProvider;
