import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSignin } from '@/hooks/apis/auth/useSignin';

import { SigninCard } from './SigninCard';

export const SigninContainer = () => {
    const [ signinForm, setsigninForm ] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const  [validationError, setValidationError] = useState(null);

    const { isPending, isSuccess, error, signinMutation } = useSignin();

    async function onSigninFormSubmit(e){
        e.preventDefault();

        if (!signinForm.email || !signinForm.password) {
            setValidationError({message: 'All fields are required'});
            return; 
        }

        setValidationError(null);

        await signinMutation({
            email: signinForm.email,
            password: signinForm.password
        });
    }

    useEffect(() => {
        if (isSuccess) {
            setTimeout(() => {
                navigate('/home');
            }, 3000);
        }
    }, [isSuccess, navigate]);

    return (
        <SigninCard 
            isPending={isPending}
            isSuccess={isSuccess}
            error={error}
            validationError={validationError}
            signinForm={signinForm}
            setsigninForm={setsigninForm}
            onSigninFormSubmit={onSigninFormSubmit}
        />
    );
};