import React from "react";

interface TODO {
  id: string;
  work: string;
}

interface myStr {
  allTasks: TODO[];
  deletetask(id: string): void;
}

const PostsList: React.FC<myStr> = (props) => {
  return (
    <div>
      <ul>
        {props.allTasks.map((task) => {
          return (
            <li key={task.id}>
              <span>{task.work}</span>
              <button onClick={props.deletetask.bind(null, task.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostsList;
