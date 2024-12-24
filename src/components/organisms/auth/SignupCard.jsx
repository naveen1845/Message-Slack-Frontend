import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignupCard = () => {
    const [signupForm, setsignupForm] = useState({
        email: '',
        password: '',
        confirmpassword: '',
        username: ''
    })

    return (
        <Card className='shadow-lg'>
            <CardHeader>
                <CardTitle>Sign-Up</CardTitle>
                <CardDescription>Sign Up to use our webapp</CardDescription>
            </CardHeader>
            <CardContent>
                <form className='space-y-5'>
                    <Input
                        placeholder = 'Email'
                        required
                        disabled = {false}
                        type = 'email'
                        onChange = {(e) => setsignupForm({...signupForm, email: e.target.value})}
                        value = {signupForm.email}
                    />
                    <Input 
                        type = 'password'
                        placeholder = 'Password'
                        disabled = {false}
                        required
                        onChange = {(e) => setsignupForm({...signupForm, password: e.target.value})}
                        value = {signupForm.password}
                    />
                    <Input 
                        type = 'password'
                        placeholder = 'Confirm Password'
                        disabled = {false}
                        required
                        onChange = {(e) => setsignupForm({...signupForm, confirmpassword: e.target.value})}
                        value = {signupForm.confirmpassword}
                    />
                    <Input 
                        type = 'text'
                        placeholder = 'Username'
                        disabled = {false}
                        required
                        onChange = {(e) => setsignupForm({...signupForm, username: e.target.value})}
                        value = {signupForm.username}
                    />
                    <Button
                        size = 'lg'
                        className = 'w-full'
                        disabled = {false}
                    >
                        Continue
                    </Button>
                </form>

                <Separator className='my-5'/>

                <p className='text-sm text-muted-foreground'>
                    Already have an account ? <span className='text-sky-500 hover:underline cursor-pointer'>Sign-In</span>
                </p>
            </CardContent>
        </Card>
    );
};