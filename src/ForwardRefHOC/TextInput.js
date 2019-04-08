import React from 'react';

const TextInput = ({forwardedRef, children, ...rest}) => {
  console.log("TextInput: "+JSON.stringify(forwardedRef)+' '+JSON.stringify(rest));
  return(
    <div>
      <input ref={forwardedRef} {...rest} />
      {children}
    </div>
  )
};

export default TextInput;
