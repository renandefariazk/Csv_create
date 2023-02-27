import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css'
import IndexRouter from './routers/inicial';

function App() {

  return (
    <Provider store={store}>
      <IndexRouter />
    </Provider>
  )
}

export default App;
