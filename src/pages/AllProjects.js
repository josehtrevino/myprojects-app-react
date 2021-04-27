import ProjectList from '../components/ProjectList';

const data = [
  {
    id: 'p1',
    title: 'first project',
    image:
      'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    technologies: 'HTML, CSS & JS',
    description:
      'Landing page using the basics of HTML, CSS and JS in order to improve skills',
  },
  {
    id: 'p2',
    title: 'second project',
    image:
      'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    technologies: 'React & Node',
    description:
      'Full Stack Project, using React in the Frontend and NodeJs + Express in the backend',
  },
];

function AllProjectsPage() {
  return (
    <section>
      <h1>All Projects</h1>
      <ProjectList projects={data} />
    </section>
  );
}

export default AllProjectsPage;
