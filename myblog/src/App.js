import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Pages
import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import ArticlesList from './pages/ArticlesList';

//Components
import NavBar from './components/NavBar';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="max-w-screen-md mx-auto pt-20">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/article/:name" component={Article} />
          <Route exact path="/articleslist" component={ArticlesList} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
