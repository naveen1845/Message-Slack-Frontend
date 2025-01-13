import { Route,Routes } from 'react-router-dom';

import { ProtectedRouter } from '@/components/molecules/ProtectedRoute/ProtectedRoute';
import { SigninContainer } from '@/components/organisms/auth/SigninContainer';
import { SignupContainer } from '@/components/organisms/auth/SignupContainer';
import { Auth } from '@/pages/auth/Auth';
import { Home } from '@/pages/Home/Home';
import { NotFound } from '@/pages/notFound/NotFound';
import { JoinPage } from '@/pages/Workspaces/JoinPage';
import { WorkspaceLayout } from '@/pages/Workspaces/Layout';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/auth/signup' element={<Auth><SignupContainer /></Auth>}/>
            <Route path='/auth/signin' element={<Auth><SigninContainer /></Auth>}/>
            <Route path='/home' element={<ProtectedRouter><Home/></ProtectedRouter>} />
            <Route path='/workspaces/:workspaceId' element={<ProtectedRouter><WorkspaceLayout></WorkspaceLayout></ProtectedRouter>} />
            <Route path='/workspaces/join/:workspaceId' element={<JoinPage/>} />


            <Route path='/*' element={<NotFound />}/>
        </Routes>
    );
};