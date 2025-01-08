import { useEffect } from 'react';

import { UserButton } from '@/components/atoms/UserButton/UserButton';
import { useFetchWorkspaces } from '@/hooks/apis/workspaces/useFetchWorkspaces';
import { useNavigate } from 'react-router-dom';

export const Home = () => {

    const { isFetching, workspaces } = useFetchWorkspaces();

    const navigate = useNavigate();

    useEffect(() => {
        if (isFetching) {
            return;
        }

        console.log('workspaces downloaded : ', workspaces);

        if (workspaces.length == 0) {
            console.log('No workspaces found for the user');
        }else {
            navigate(`/workspaces/${workspaces[0]._id}`)
        }

    }, [isFetching, workspaces, navigate]);

    return (
        <div>
            <h1>HOME MY SWEET</h1>
            <UserButton />
        </div>
    );
};