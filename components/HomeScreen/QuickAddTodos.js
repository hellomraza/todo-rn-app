import React, {useState} from 'react';
import {Alert, Button, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTodo} from '../../Redux/todoSlice';

const QuickAddTodos = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addtodos = () => {
    if (text === '') {
      return Alert.alert('Opps...', "You can't add empty todo");
    }
    dispatch(addTodo(text));
  };
  return (
    <View className=" bg-blue-700 px-1 py-1 pb-5 flex-row items-center">
      <View className=" flex-row items-center">
        <TextInput
          placeholder="Write Quick Todos..."
          placeholderTextColor={'#d9d9d9'}
          className=" px-4 py-1 rounded-md flex-1 border-b border-white"
          onChangeText={todo => setText(todo)}
        />
        <View className="bg-blue-700 rounded-sm mt-2   ">
          <Button title="Add" color={'white'} onPress={addtodos} />
        </View>
      </View>
    </View>
  );
};

export default QuickAddTodos;
