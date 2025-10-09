import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import router from './routes/routes';


function App() {
  return (
    <div className="container position-relative pt-4">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
