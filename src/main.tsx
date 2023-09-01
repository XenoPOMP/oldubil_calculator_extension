import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import SplashScreen from '@components/SplashScreen/SplashScreen';

import store, { persistor } from '@redux/index';

import Fetcher from '@providers/Fetcher/Fetcher';

import App from './App';
import './main.scss';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <PersistGate loading={<SplashScreen />} persistor={persistor}>
          <Fetcher>
            <App />
          </Fetcher>
        </PersistGate>
      </ReduxProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
