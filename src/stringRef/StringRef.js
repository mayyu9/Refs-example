import React from 'react';

class StringRef extends React.Component{
  constructor(props){
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state={upperCase:false};
  }

  handleToggle(){
    const upper = this.state.upperCase;

    //Accessing the ref value
    const value = this.refs.inputRef.value;

    this.refs.inputRef.value =
      upper ? value.toLowerCase(): value.toUpperCase();

    this.setState({upperCase: !upper});
  }

  render(){
    return(
      <div>
        {/* creating ref */ }
        <input type="text" ref="inputRef" />
        <button type="button" onClick = {this.handleToggle}>
          Toggle Button
        </button>
      </div>
    )
  }
}

export default StringRef;
