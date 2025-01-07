import { useEffect } from 'react';

import { UserButton } from '@/components/atoms/UserButton/UserButton';
import { useFetchWorkspaces } from '@/hooks/apis/workspaces/useFetchWorkspaces';

export const Home = () => {

    const { isFetching, workspaces } = useFetchWorkspaces();

    useEffect(() => {
        if (isFetching) {
            return;
        }

        console.log('workspaces downloaded : ', workspaces);

        if (workspaces.length == 0) {
            console.log('No workspaces found for the user');
        }

    }, [isFetching, workspaces]);

    return (
        <div>
            <h1>HOME MY SWEET</h1>
            <UserButton />
        </div>
    );
};