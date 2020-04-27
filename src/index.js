import React from 'react';
import '~/config/ReactotronConfig';
import {Provider, useSelector, shallowEqual} from 'react-redux';
import store from './store';
import {setNavigator} from '~/services/navigation';
import {createRouter} from '~/routes';

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {
  const signedIn = useSelector(
    (state) => state.auth.data && state.auth.data.id,
    shallowEqual,
  );

  const Router = createRouter(signedIn);

  return <Router ref={setNavigator} />;
};

export default AppWrapper;
