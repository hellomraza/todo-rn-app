import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {Button, Text, View} from 'react-native';
import AddTodosForm from '../components/NewTaskScreen/AddTodosForm';
import StyledHeader from '../components/StyledComponent/StyledHeader';

const NewTaskScreen = ({navigation}) => {
  const navigations = useNavigation();

  useLayoutEffect(() => {
    navigations.setOptions({
      headerShown: false,
    });
  });
  return (
    <View>
      {/* -----Header----- */}
      <StyledHeader>
        <View>
          <Button
            title="←"
            color={'#fff'}
            onPress={() => navigation.goBack()}
          />
        </View>
        <Text className="text-white text-lg font-semibold ">New Todos</Text>
      </StyledHeader>
      {/* ------Add Todos Form------ */}
      <View className="pt-5 px-4">
        <AddTodosForm navigation={navigation} />
      </View>
    </View>
  );
};

export default NewTaskScreen;
