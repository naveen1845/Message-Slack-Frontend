import { useMutation } from '@tanstack/react-query';

import { signinRequest } from '@/apis/auth';
import { useAuth } from '@/hooks/context/useAuth';
import { useToast } from '@/hooks/use-toast';

export const useSignin = () => {
    const { toast } = useToast();
    const { setAuth } = useAuth();
    const { error, isPending, isSuccess, mutateAsync: signinMutation} = useMutation({
        mutationFn : signinRequest,
        onSuccess : (response) => {
            console.log('successfully signed in ', response);

            const userObject = JSON.stringify(response.data);

            localStorage.setItem('user', userObject);
            localStorage.setItem('token', response.data.token);

            setAuth({
                token: response.data.token,
                user: response.data,
                loading: false
            });


            toast({
                title: 'SuccessFully Signed in',
                discription: 'Redirecting to the home page in Few seconds...',
                type: 'success'
            });
        },
        onError : () => {
            console.log('Error signing in ', error);
            toast({
                title: 'error Signed in',
                discription: error.message,
                type: 'error',
                variant: 'destructive'
            });
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        signinMutation
    };
};