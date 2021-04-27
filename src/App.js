import { Route, Switch } from 'react-router-dom';

import AllProjectsPage from './pages/AllProjects';
import NewProjectPage from './pages/NewProject';
import Favorites from './pages/Favorites';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllProjectsPage />
        </Route>
        <Route path="/new-project">
          <NewProjectPage />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
