import { useContext } from 'react';

import ProjectList from '../components/ProjectList';
import CompletedContext from '../store/completed-context';

function CompletedPage() {
  const completedCtx = useContext(CompletedContext);

  let content;

  if (completedCtx.totalCompletedProjects === 0) {
    content = <p>You have no completed projects yet.</p>;
  } else {
    content = <ProjectList projects={completedCtx.completedProjects} />;
  }

  return (
    <section>
      <h1>Completed Projects</h1>
      {content}
    </section>
  );
}

export default CompletedPage;
