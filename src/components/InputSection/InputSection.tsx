import { useRef } from 'react';

import Input from '../Input/Input';
import './InputSection.css';

const InputSection: React.FC = () => {
  const inputTeam = useRef(null); 
  const inputName = useRef(null); 
  const inputOffice = useRef(null); 
  const inputPosition = useRef(null); 

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    inputTeam.current ? console.log(inputTeam.current['value']) : '';
    inputName.current ? console.log(inputName.current['value']) : '';
    inputOffice.current ? console.log(inputOffice.current['value']) : '';
    inputPosition.current ? console.log(inputPosition.current['value']) : '';
  };


  return (
    <form>
      <Input ref={inputTeam} name="team" desc="Team" />
      <Input ref={inputName} name="name" desc="Name" />
      <Input ref={inputOffice} name="office" desc="Office" />
      <Input ref={inputPosition} name="position" desc="Position" />

      <button onClick={(e) => onClickHandler(e)}>Add</button>
    </form>
  );
};

export default InputSection;
