import './App.css';

import { Route, Routes } from 'react-router-dom';

import { Auth } from '@/pages/auth/Auth';
import { NotFound } from '@/pages/notFound/NotFound';
import { SignupCard } from './components/organisms/auth/SignupCard';

function App() {
  return (
    <Routes>
      <Route path='/auth/signup' element={<Auth><SignupCard /></Auth>}/>

      <Route path='/*' element={<NotFound />}/>
    </Routes>
  );
}

export default App;
