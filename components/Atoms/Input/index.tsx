import React from 'react';

interface InputI extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputI> = (
  { label, ...rest },
  ref
) => {
  return (
    <React.Fragment>
      {label && <label htmlFor={rest.id}>{label}</label>}
      <input {...rest} className='text-md text-red-300 p-3 border-2 rounded-md' ref={ref} />
    </React.Fragment>
  );
};

export default React.forwardRef(Input);
