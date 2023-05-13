import React from 'react';
import {FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import TodoItem from './TodoItem';

const TodosList = () => {
  const todos = useSelector(state => state.todos.todosList);

  return (
    <View className="px-1">
      {/* -------Todos List----- */}
      <FlatList
        data={todos}
        renderItem={todo => {
          const {task, id} = todo.item;
          return <TodoItem key={id} task={task} id={id} />;
        }}
      />
    </View>
  );
};

export default TodosList;
