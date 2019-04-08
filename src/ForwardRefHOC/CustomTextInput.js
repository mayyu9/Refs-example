import React from 'react';
import TextInput from './TextInput';
import Input from './HOCInputComponent';

const InputField = Input(TextInput);

class CustomTextInput extends React.Component{
  render(){
    const inputRef = React.createRef();
    return <InputField ref={inputRef} name={'msd'} />
  }
};

export default CustomTextInput;
