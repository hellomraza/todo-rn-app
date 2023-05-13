import React from 'react';
import {View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

const AppLayout = props => {
  return (
    <SafeAreaView
      forceInset={{bottom: 'never'}}
      className="bg-blue-900"
      contentInsetAdjustmentBehavior="never">
      <View className="bg-blue-900 h-full ">
        <View>{props.children}</View>
      </View>
    </SafeAreaView>
  );
};

export default AppLayout;
