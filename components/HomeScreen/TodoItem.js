import React, {useState} from 'react';
import {Button, Modal, Text, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {deleteTodo} from '../../Redux/todoSlice';

const TodoItem = ({task, id}) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handelDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <View className="p-2 mt-2 bg-blue-800  rounded-md flex-row items-center">
      <Text className="text-gray-100 text-lg flex-1 font-medium">{task}</Text>
      <View className="border bg-red-500 w-20 rounded-md">
        <Button title="Delete" color={'#fff'} onPress={handelDelete} />
      </View>
      <View className="border bg-white w-20 ml-2 rounded-md">
        <Button title="Edit" color={'#000'} onPress={toggleModal} />
      </View>

      <Modal
        animationType="slide"
        onRequestClose={toggleModal}
        transparent={true}
        visible={isOpen}>
        <View className="flex flex-col items-center  justify-center h-full">
          <View className="bg-white p-4 rounded-md w-2/3 space-y-3">
            <TextInput
              placeholder="Edit Todos"
              className="p-3 bg-gray-200 rounded-md"
            />
            <View className="bg-blue-500 rounded-md">
              <Button title="Edit" color={'#000'} />
            </View>
            <View className="bg-red-500 rounded-md">
              <Button title="Cancel" onPress={toggleModal} color={'#000'} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TodoItem;
