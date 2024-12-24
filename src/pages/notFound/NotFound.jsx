import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="h-screen w-full flex items-center justify-center text-center bg-slate-200">
            <Card className='shadow-lg'>
            <CardHeader>
                <CardTitle>404 Not Found</CardTitle>
                <CardDescription>This Page Does not exist</CardDescription>
            </CardHeader>
            <CardContent>
                <img className="shadow-lg" src="https://media.istockphoto.com/id/1404059706/vector/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space.jpg?s=612x612&w=0&k=20&c=DvPAUof9UsNuNqCJy2Z7ZLLk75qDA3bbLXOOW_50wAk=" />

                <Button
                    variant = 'outline'
                    onClick = { () => navigate(-1)}
                    className = 'mt-5'
                >
                    Go Back
                </Button> 
            </CardContent>
        </Card>
        </div>
    );
};