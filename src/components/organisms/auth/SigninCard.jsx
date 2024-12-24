import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export const SigninCard = () => {
    const [ signinForm, setsigninForm ] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();
    return (
        <Card className='shadow-lg'>
            <CardHeader>
                <CardTitle>Sign-In</CardTitle>
                <CardDescription>Access your account and explore our features</CardDescription>
            </CardHeader>
            <CardContent className='space-y-5'>
                <Input 
                    type = 'text'
                    placeholder = 'Email'
                    required
                    onChange = {(e) => setsigninForm({...signinForm, email: e.target.value})}
                    value = {signinForm.email}
                    disabled = {false}
                />
                <Input 
                    type = 'password'
                    placeholder = 'Password'
                    required
                    onChange = {(e) => setsigninForm({...signinForm, password: e.target.value})}
                    value = {signinForm.password}
                    disabled = {false}
                />
                <Button
                    className = 'w-full'
                    disabled = {false}
                >
                    Continue
                </Button>
                <p 
                    className='text-sm text-muted-foreground'
                >
                  Don&apos;t have an account ? <span className='text-sky-500 hover:underline cursor-pointer' onClick={() => navigate('/auth/signup')}>Sign-up</span>
                </p>
            </CardContent>
        </Card>
    );
};