import React from 'react';
import Checkbox from '../../atoms/Checkbox'
import TaskName from '../../atoms/TaskName';
import DeleteButton from '../../atoms/DeleteButton';
import Label from '../../atoms/Label';

function TaskItem() {
  return (
    <li className="task-item">
      <Label>
        <Checkbox />
        <TaskName />
      </Label>
      <DeleteButton />
    </li>
  );
}

export default TaskItem;
