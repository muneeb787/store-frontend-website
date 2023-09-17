// eslint-disable-next-line no-unused-vars
import { Route, Routes } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { PageRoutes } from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"
import "./main.css"
import Layout from './pages/Layout/layout';

function App() {

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route element={<Layout/>}>
        {
          PageRoutes.map((elem) => <Route key={elem.path} path={elem.path} element={elem.element} />)
        }
        </Route>
      </Routes>
    </>
  )
}

export default App
