import React from 'react';

const Input = InputComponent => {
  const forwardRef = (props, ref) => {
    console.log("hoc: "+JSON.stringify(ref)+' '+JSON.stringify(props));
    const onType = ()=> console.log(ref.current.value);
    return <InputComponent forwardedRef={ref} onChange={onType} {...props} />
  };
  return React.forwardRef(forwardRef);
};

export default Input;
