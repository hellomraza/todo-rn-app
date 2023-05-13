import React from 'react';
import {Text, View} from 'react-native';

const AddNewTodoBall = props => {
  return (
    <View className="bg-white h-20 w-20 rounded-full items-center justify-center  ">
      <Text className="text-7xl font-light text-blue-500">+</Text>
    </View>
  );
};

export default AddNewTodoBall;
