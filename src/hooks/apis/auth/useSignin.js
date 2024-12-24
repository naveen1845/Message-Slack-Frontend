import { useMutation } from '@tanstack/react-query';

import { signinRequest } from '@/apis/auth';
import { useToast } from '@/hooks/use-toast';

export const useSignin = () => {
    const { toast } = useToast();
    const { error, isPending, isSuccess, mutateAsync: signinMutation} = useMutation({
        mutationFn : signinRequest,
        onSuccess : (data) => {
            console.log('successfully signed in ', data);
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