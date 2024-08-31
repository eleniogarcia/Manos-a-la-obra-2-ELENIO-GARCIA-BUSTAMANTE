import React from 'react';
import Input from '../../atoms/Input';
import '../InputWithAddButton';
import AddButton from '../../atoms/AddButton';
import Label from '../../atoms/Label';

function InputWithAddButton() {
  return (
    <div className="input-container">
      <Label>Nueva Tarea:</Label>
      <Input />
      <AddButton />
    </div>
  );
}

export default InputWithAddButton;
