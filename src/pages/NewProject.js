import { useHistory } from 'react-router-dom';

import NewProjectForm from '../components/NewProjectForm';

function NewProjectPage() {
  const history = useHistory();

  const addProjectHandler = (data) => {
    fetch(
      'https://myprojects-app-react-default-rtdb.firebaseio.com/projects.json',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/');
    });
  };

  return (
    <section>
      <h1>Add New Project</h1>
      <NewProjectForm onAddProject={addProjectHandler} />
    </section>
  );
}

export default NewProjectPage;
