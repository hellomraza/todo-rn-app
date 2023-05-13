import React from 'react';
import {View} from 'react-native';

const StyledHeader = props => {
  return (
    <View className="bg-blue-700 px-2  h-16 shadow-md flex-row items-center">
      {props.children}
    </View>
  );
};

export default StyledHeader;
