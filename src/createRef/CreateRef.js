import React from 'react';

class CallbackRef extends React.Component{
  constructor(props){
    super(props);
    this.inputRef = React.createRef();
    this.handleToggle = this.handleToggle.bind(this);
    this.state={upperCase:false};
  }

  handleToggle(){
    const upper = this.state.upperCase;

    //Accessing the ref value,
    //callback refs
    const value = this.inputRef.current.value;

    this.inputRef.current.value =
      upper ? value.toLowerCase(): value.toUpperCase();

    this.setState({upperCase: !upper});
  }

  render(){
    return(
      <div>
        {/* creating callback ref and storing its value in the input field*/ }
        <input type="text" ref={this.inputRef} />
        <button type="button" onClick = {this.handleToggle}>
          Toggle Button
        </button>
      </div>
    )
  }
}

export default CallbackRef;
