import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Toaster } from '@/components/ui/toaster';

import { Modals } from './components/organisms/modals/Modals';
import { AppContextProvider } from './context/AppContextProvider';
import { AppRoutes } from './routes/routes';

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <AppRoutes />
        <Modals />
        <Toaster/>
      </AppContextProvider>
    </QueryClientProvider>
    
  );
}

export default App;
