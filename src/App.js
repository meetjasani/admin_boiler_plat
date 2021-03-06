import './App.css';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import Routes from './router/Routes';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';


function App() {
  return (

    // <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    // </Provider>
  );
}

export default App;
