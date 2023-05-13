import React from 'react';
import {Button, TextInput, View} from 'react-native';

const EditTodosForm = () => {
  return (
    <View>
      <TextInput placeholder="Edit Todos" />
      <View>
        <Button title="Edit" color={'#000'} />
      </View>
      <View>
        <Button title="Cancel" color={'#000'} />
      </View>
    </View>
  );
};

export default EditTodosForm;
