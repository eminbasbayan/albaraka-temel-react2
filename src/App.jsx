import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './components/layout/Header';
import router from './routes/routes';
import InputFocusExample from './components/ui/InputFocusExample';

function App() {
  return (
    <div className="container position-relative pt-4">
      <InputFocusExample />
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
