import React from 'react';
import {View} from 'react-native';
import {StoreType} from '../types/helpers/redux/states';

function Home(): React.JSX.Element {
  return <View />;
}
const mapStateToProps = (state: StoreType) => ({
  test: state.test,
});

export default Home;
