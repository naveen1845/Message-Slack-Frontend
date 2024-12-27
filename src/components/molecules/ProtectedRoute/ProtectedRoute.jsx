import { LucideLoader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '@/hooks/context/useAuth';
import { useToast } from '@/hooks/use-toast';



export const ProtectedRouter = ( {children} ) => {

    const { auth } = useAuth();
    const { toast } = useToast();

    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
        if (!auth.isLoading && (!auth.user || !auth.token)) {
            toast({
                title: 'Your session is over',
                description: 'Please sign in to continue',
                variant: 'destructive',
            });
            
            setShouldRedirect(true);
        }
    }, [auth, toast]);

    if (auth.isLoading) {
        return <div><LucideLoader2 className="animate-spin"/> Loading... </div>;
    }

    if (shouldRedirect) {
        return <Navigate to="/auth/signin" />;
    }

    return children;
};