import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {Button, Text, View} from 'react-native';
import AddNewTodoBall from '../components/HomeScreen/AddNewTodoBall';
import QuickAddTodos from '../components/HomeScreen/QuickAddTodos';
import TodosList from '../components/HomeScreen/TodosList';
import StyledHeader from '../components/StyledComponent/StyledHeader';

const HomeScreen = ({navigation}) => {
  const navigations = useNavigation();

  useLayoutEffect(() => {
    navigations.setOptions({
      headerShown: false,
    });
  });
  return (
    <>
      <View className="h-full">
        <StyledHeader>
          <Text className="text-white text-lg font-semibold ">
            All Todos List
          </Text>
        </StyledHeader>
        <TodosList />
        <View className="absolute bottom-20 right-2">
          <View className="bg-transparent h-20 w-20 z-10 rounded-full items-center justify-center   ">
            <Button
              title="+"
              color={'transparent'}
              onPress={() => navigation.navigate('NewTask')}
            />
          </View>
          <View className="absolute">
            <AddNewTodoBall />
          </View>
        </View>
        <View className="absolute bottom-0 right-0 left-0">
          <QuickAddTodos />
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
