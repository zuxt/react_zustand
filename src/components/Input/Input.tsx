import { forwardRef } from 'react';
import './Input.css';


const Input = forwardRef<HTMLInputElement, { name: string; desc:string }>((props, ref) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={props.name}>{props.desc}</label>
      <input ref={ref} type="text" name={props.name} />
    </div>
  );
});

export default Input;