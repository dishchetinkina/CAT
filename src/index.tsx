import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
    <Provider store={store}>
        <App />
    </Provider>

);