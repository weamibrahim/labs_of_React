import ReactDom from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

let root = ReactDom.createRoot(document.getElementById('root'))
root.render(<App/>);