import React from 'react';
import TaskItem from '../../molecules/TaskItem'

function TaskList() {
  return (
    <ul className="task-list">
      <TaskItem taskName="Task N" completed={false} />
      <TaskItem taskName="Task N-1" completed={false} />
      <TaskItem taskName="Completed Task N-2" completed={true} />
      <TaskItem taskName="Task K" completed={false} />
      <TaskItem taskName="Task 2" completed={false} />
      <TaskItem taskName="Completed Task 1" completed={true} />
    </ul>
  );
}

export default TaskList;
