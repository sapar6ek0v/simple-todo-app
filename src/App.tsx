import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Todos from './pages/Todos';

const App: FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path='/todos' element={<Todos />} />
        </Route>

      </Routes>
    </Layout>
  );
};

export default App;
