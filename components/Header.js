import fontawesome from '@fortawesome/fontawesome';
import {faCheckSquare, faCoffee} from '@fortawesome/fontawesome-free-solid';
import React from 'react';
import {Text, View} from 'react-native';

fontawesome.library.add(faCheckSquare, faCoffee);

const Header = () => {
  return (
    <View className="py-3 bg-blue-600 px-1  ">
      <View>{/* ------Icon ------ */}</View>
      <View>
        {/* ------Search ------ */}
        <Text className="text-lg font-semibold text-white">My Todos App </Text>
      </View>
      <View>{/* ------Menu------ */}</View>
    </View>
  );
};

export default Header;
