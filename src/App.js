import './App.css';
import MainBar from './components/MainBar';
import Calculator from './containers/Calculator';

import { Provider } from 'react-redux';
import { store } from './store/Config';

function App() {
  return (
    <Provider store={ store }>
      <div>
        <MainBar />
        <Calculator />
      </div>
    </Provider>
  );
}

export default App;
