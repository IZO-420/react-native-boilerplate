import React from 'react';
import AppNavigation from './src/navigators/AppNavigation';
import './src/theme/i18n';
import store from './src/helpers/redux/store';
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
