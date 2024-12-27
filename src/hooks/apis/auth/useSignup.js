import { useMutation } from '@tanstack/react-query';

import { signupRequest } from '@/apis/auth/index.js';
import { useToast } from '@/hooks/use-toast';

export const useSignup = () => {
    const { toast } = useToast();
    const { isPending, isSuccess, error, mutateAsync: signupMutation } = useMutation({
        mutationFn: signupRequest,
        onSuccess: (data) => {
            console.log('Scuccessfuilly signed up', data);

            toast({
                title: 'Successfully Signed Up',
                description: 'Redirecting to the login page...',
                type: 'success'
            });
        },
        onError: (error) => {
            console.error('Failed to sign up', error);
            toast({
                title: 'Error',
                description: error.message,
                type: 'error',
                variant: 'destructive'
            });
        }
    });
    return {
        isPending,
        isSuccess,
        error,
        signupMutation
    };
};