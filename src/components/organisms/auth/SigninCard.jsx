
import { LucideLoader2, TriangleAlert } from 'lucide-react';
import { FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

export const SigninCard = ({ isPending, isSuccess, error, onSigninFormSubmit, validationError, signinForm, setsigninForm}) => {
    

    const navigate = useNavigate();
    return (
        <Card className='shadow-lg'>
            <CardHeader>
                <CardTitle>Sign-In</CardTitle>
                <CardDescription>Access your account and explore our features</CardDescription>
                {validationError && (
                    <div className='bg-destructive/15 p-4 rounded-md text-destructive flex gap-3 text-sm items-center justify-center'>
                        <TriangleAlert />
                        <p>{validationError.message}</p>
                    </div>
                )}

                {error && (
                    <div className='bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6'>
                        <TriangleAlert className='size-5' />
                        <p>{error.message}</p>
                    </div>
                )}

                {isSuccess && (
                    <div className='bg-green-100 p-4 rounded-md flex items-center gap-x-2 text-sm text-green-700 mb-6'>
                        <FaCheck className='text-green-500 size-10 mx-2'/>
                        <p>Successfully Signed Up. Redirecting to the Sign-In Page</p>
                        <LucideLoader2 className='animate-spin size-10 mx-2'/>
                    </div>
                )}
            </CardHeader>
            <CardContent >
               <form className='space-y-5' onSubmit={onSigninFormSubmit}>
               <Input 
                    type = 'text'
                    placeholder = 'Email'
                    onChange = {(e) => setsigninForm({...signinForm, email: e.target.value})}
                    value = {signinForm.email}
                    disabled = {isPending}
                />
                <Input 
                    type = 'password'
                    placeholder = 'Password'
                    onChange = {(e) => setsigninForm({...signinForm, password: e.target.value})}
                    value = {signinForm.password}
                    disabled = {isPending}
                />
                <Button
                    className = 'w-full'
                    disabled = {isPending}
                >
                    Continue
                </Button>
               </form>
               <Separator className='my-5' />
                <p 
                    className='text-sm text-muted-foreground'
                >
                  Don&apos;t have an account ? <span className='text-sky-500 hover:underline cursor-pointer' onClick={() => navigate('/auth/signup')}>Sign-up</span>
                </p>
            </CardContent>
        </Card>
    );
};