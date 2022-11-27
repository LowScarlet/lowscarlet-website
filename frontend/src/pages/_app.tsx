/* eslint-disable @next/next/no-sync-scripts */
import type { AppProps } from 'next/app'
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../configs/theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';

import MyLayout from '../components/layout'
import Script from 'next/script';
import { SnackbarProvider } from 'notistack';

export default function App(props: AppProps) {
  const { Component, pageProps } = props as any;
  const isLight = useMediaQuery('(prefers-color-scheme: light)');

  return (<>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <ThemeProvider theme={theme({ isLight })}>
      <CssBaseline />
      <SnackbarProvider
        maxSnack={6}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <MyLayout>
          <Script src="https://kit.fontawesome.com/e9cc7e48d1.js" crossOrigin="anonymous" />
          <Component {...pageProps} />
        </MyLayout>
      </SnackbarProvider>
    </ThemeProvider>
  </>);
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};