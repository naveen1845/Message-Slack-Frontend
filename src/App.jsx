import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes } from 'react-router-dom';

import { SignupContainer } from '@/components/organisms/auth/SignupContainer';
import { Toaster } from '@/components/ui/toaster';
import { Auth } from '@/pages/auth/Auth';
import { NotFound } from '@/pages/notFound/NotFound';

import { SigninContainer } from './components/organisms/auth/SigninContainer';

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path='/auth/signup' element={<Auth><SignupContainer /></Auth>}/>
      <Route path='/auth/signin' element={<Auth><SigninContainer /></Auth>}/>

      <Route path='/*' element={<NotFound />}/>
    </Routes>
    <Toaster/>
    </QueryClientProvider>
    
  );
}

export default App;
