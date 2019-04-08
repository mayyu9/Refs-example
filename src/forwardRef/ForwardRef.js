import React from 'react';
import TextInput from './TextInput';

const inputRef = React.createRef();

// const TextInput = React.forwardRef((props, ref) => (
//   <input type="text" placeholder="Forward Ref"  ref={ref} />
// ));

class CustomTextInput extends React.Component{
  handleSubmit = e => {
    e.preventDefault();
    console.log(inputRef.current.value);
  }

  render(){
    return(
      <div>
      <form>
        <TextInput ref={inputRef} />
        <button onClick = {e =>this.handleSubmit(e)}>Submit</button>
      </form>
      </div>
    )
  }
}

export default CustomTextInput;
