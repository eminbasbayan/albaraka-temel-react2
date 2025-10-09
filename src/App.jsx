import { RouterProvider } from 'react-router-dom';

import Header from './components/layout/Header';
import router from './routes/routes';

function App() {
  return (
    <div className="container position-relative ">
      
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
