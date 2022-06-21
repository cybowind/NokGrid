import './App.css'
import store from './app/store'
import { Provider } from 'react-redux';
import { GridView } from './features/grid/GridView';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GridView />
      </div>
    </Provider>
  );
}

export default App;
