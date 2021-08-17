import { Route, Switch } from 'react-router-dom';
import './App.css';
import BookList from './components/BookList/BookList';
import Layout from './components/Layout/Layout';
import BookPage from './pages/BookPage/BookPage';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/books/:bookId" component={BookPage} />
          <Route path="/" exact component={BookList} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
