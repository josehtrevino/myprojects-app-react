import { createContext, useState } from 'react';

const CompletedContext = createContext({
  completedProjects: [],
  totalCompletedProjects: 0,
  addCompleted: (completedProject) => {},
  removeCompleted: (projectId) => {},
  itemIsCompleted: (projectId) => {},
});

export function CompletedContextProvider(props) {
  const [completed, setCompleted] = useState([]);

  const addCompletedHandler = (completedProject) => {
    setCompleted((prevCompleted) => {
      return prevCompleted.concat(completedProject);
    });
  };

  const removeCompletedHandler = (projectId) => {
    setCompleted((prevCompleted) => {
      return prevCompleted.filter((project) => project.id !== projectId);
    });
  };

  const itemIsCompletedHandler = (projectId) => {
    return completed.some((project) => project.id === projectId);
  };

  const context = {
    completedProjects: completed,
    totalCompletedProjects: completed.length,
    addCompleted: addCompletedHandler,
    removeCompleted: removeCompletedHandler,
    itemIsCompleted: itemIsCompletedHandler,
  };

  return (
    <CompletedContext.Provider value={context}>
      {props.children}
    </CompletedContext.Provider>
  );
}

export default CompletedContext;
