import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@material-ui/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const themeLight = createMuiTheme({
  palette: {
    background: {
      default: '#e4f0e2',
    },
  },
});

const themeDark = createMuiTheme({
  palette: {
    background: {
      default: '#222222',
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={themeDark}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
