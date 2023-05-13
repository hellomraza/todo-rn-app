import moment from 'moment';
import React, {useState} from 'react';
import {
  Alert,
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import {useDispatch} from 'react-redux';
import {ArrowDownSVG, ArrowUpSVG, DateSVG} from '../../Assets/AppSvg';
import {MEDIUM} from '../../Constant';
import {addTodo} from '../../Redux/todoSlice';

const category = [
  {label: 'Default', value: 'Default'},
  {label: 'Personal', value: 'Personal'},
  {label: 'Shoping', value: 'Shoping'},
  {label: 'Office', value: 'Office'},
  {label: 'Work', value: 'Work'},
];

const AddTodosForm = ({navigation}) => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    task: '',
    date: new Date(),
    priority: MEDIUM,
    category: 'General',
    completed: false,
  });
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [openCategoryPicker, setOpenCategoryPicker] = useState(false);
  const [value, setValue] = useState(null);
  const [priority, setPriority] = useState(MEDIUM);

  const addtodos = () => {
    if (todo.task === '') {
      return Alert.alert('Opps...', "You can't add empty todo");
    }
    const momentDate = moment(todo.date).format('YYYY-MM-DD');
    const newTodo = {
      task: todo.task,
      date: momentDate,
      priority: todo.priority,
      completed: todo.completed,
      category: todo.category,
    };
    dispatch(addTodo(newTodo));

    // navigate to home screen
    navigation.navigate('Home');
  };

  return (
    <View>
      <Text className="text-base font-semibold text-blue-400">
        What is to be done ?
      </Text>
      <TextInput
        placeholder="Enter Task Here..."
        placeholderTextColor={'#d9d9d9'}
        className="p-2 rounded-md w-full text-base font-medium border-b border-white"
        onChangeText={task => setTodo({...todo, task})}
      />
      <View className="my-6 mb-3">
        <Text className="text-base font-semibold text-blue-400">Due date</Text>
        <DatePicker
          modal
          open={openDatePicker}
          date={todo.date}
          mode="date"
          onConfirm={selectedDate => {
            setTodo({...todo, date: selectedDate});
            setOpenDatePicker(false);
          }}
          onCancel={() => {
            setOpenDatePicker(false);
          }}
        />
        <Pressable
          onPress={() => setOpenDatePicker(true)}
          className="flex-row first-letter:justify-center my-1">
          <View className=" flex-1 justify-between flex-row  border-b  mr-2 border-white   items-center ">
            <Text className=" text-[#d9d9d9] font-medium">
              {moment(todo.date).format('YYYY-MM-DD')}
            </Text>
          </View>
          <View className="opacity-80">
            <DateSVG />
          </View>
        </Pressable>
        <View className="my-6">
          <Text className="text-base font-semibold text-blue-400">
            Add to List
          </Text>
          <DropDownPicker
            open={openCategoryPicker}
            mode="BADGE"
            value={value}
            items={category}
            setOpen={setOpenCategoryPicker}
            setValue={setValue}
            className="my-1 bg-transparent border-0 w-7/12 px-0"
            placeholderStyle={styles.categoryItem}
            placeholderIconColor={'#d9d9d9'}
            ArrowUpIconComponent={() => <ArrowUpSVG />}
            ArrowDownIconComponent={() => <ArrowDownSVG />}
            labelStyle={styles.categoryItem}
            dropDownContainerStyle={styles.categoryDropDown}
            placeholder="Select an category"
            showTickIcon={true}
          />
        </View>
      </View>
      <View className="bg-blue-600 rounded-sm w-24 -z-10">
        <Button title="Add" color={'white'} onPress={addtodos} />
      </View>
    </View>
  );
};

export default AddTodosForm;

const styles = StyleSheet.create({
  categoryDropDown: {
    width: '50%',
    shadowColor: '#000',
  },
  categoryItem: {
    border: '10px solid red',
    fontSize: 16,
    fontWeight: '500',
    color: '#d9d9d9',
  },
  arrowIconContainer: {
    color: '#d9d9d9',
    border: '10px solid red',
  },
});
