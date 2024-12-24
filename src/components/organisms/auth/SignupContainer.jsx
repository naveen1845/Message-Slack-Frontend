import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSignup } from '@/hooks/apis/auth/useSignup';

import { SignupCard } from './SignupCard';

export const SignupContainer = () => {
    const [signupForm, setsignupForm] = useState({
        email: '',
        password: '',
        confirmpassword: '',
        username: ''
    });

    const navigate = useNavigate();

    const [validationError, setValidationError] = useState(null);

    const {isPending, isSuccess, signupMutation, error} = useSignup();

    async function onSignupFormSubmit(e){
        e.preventDefault();

        if(!signupForm.email || !signupForm.password || !signupForm.confirmpassword || !signupForm.username) {
            setValidationError({message: 'All fields are required'});
            return; 
        }

        if(signupForm.password !== signupForm.confirmpassword){
            setValidationError({message: 'Passwords do not match'});
            return; 
        }

        setValidationError(null);

        await signupMutation({
            email: signupForm.email,
            username: signupForm.username,
            password: signupForm.password
        });

    }

    useEffect(() => {
        if(isSuccess) {
            setTimeout(() => {
                navigate('/auth/signin');
            }, 3000);
        }
            
    }, [isSuccess, navigate]);

    return(
        <SignupCard 
            signupForm = {signupForm}
            setsignupForm = {setsignupForm}
            validationError = {validationError}
            isPending={isPending}
            isSuccess={isSuccess}
            error={error}
            onSignupFormSubmit = {onSignupFormSubmit}
        />
    );
};