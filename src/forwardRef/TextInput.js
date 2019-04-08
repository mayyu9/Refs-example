import React from 'react';

const TextInput = React.forwardRef((props, ref) => (
  <input type="text" placeholder="Forward Ref"  ref={ref} />
));


export default TextInput;
