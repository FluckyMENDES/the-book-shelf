import { Route, Switch } from 'react-router-dom';
import './App.css';
import BookListPage from './pages/BookListPage/BookListPage';
import Layout from './components/Layout/Layout';
import BookPage from './pages/BookPage/BookPage';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/books/:bookId" component={BookPage} />
          <Route path="/" exact component={BookListPage} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
