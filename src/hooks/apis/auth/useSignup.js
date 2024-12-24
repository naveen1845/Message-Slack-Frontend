import { useMutation } from '@tanstack/react-query';

import { signupRequest } from '@/apis/auth/index.js';

export const useSignup = () => {
    const { isPending, isSuccess, error, mutateAsync: signupMutation } = useMutation({
        mutationFn: signupRequest,
        onSuccess: (data) => {
            console.log('Scuccessfuilly signed up', data);
        },
        onError: (error) => {
            console.error('Failed to sign up', error);
        }
    });
    return {
        isPending,
        isSuccess,
        error,
        signupMutation
    };
};