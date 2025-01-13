import axios from '@/config/axiosConfig';

export const createWorkspaceRequest = async ({ name, discription, token }) => {
    try {
        const response = await axios.post('/workspaces', { name, discription }, {
            headers: {
                'x-access-token': token
            }
        });

        console.log(response.data.data);
        return response.data.data;
        
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
};

export const fetchWorkspacesRequest = async ({ token }) => {
    try {
        const response = await axios.get('/workspaces', {
            headers: {
                'x-access-token': token
            }
        });

        console.log(response.data.data);
        
        return response.data.data;
        
    } catch (error) {
        console.log(error);
        throw error.response.data;
        
    }
};

export const fetchWorkspaceDetailsRequest = async ( { workspaceId, token } ) => {
    try {
        const response = await axios.get(`/workspaces/${workspaceId}`, {
            headers: {
                'x-access-token': token
            }
        });
        console.log('workspace details', response.data.data);

        return response.data.data;
        
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
};

export const deleteWorkspaceRequest = async ({ workspaceId, token }) => {
    try {
        const response = await axios.delete(`/workspaces/${workspaceId}`, {
            headers: {
                'x-access-token' : token
            }
        });
        console.log('deleted workspace data:', response.data);
        
        return response.data.data;
    } catch (error) {
        console.log('deleteWorkspaceRequest', error);
        throw error.response.data;
    }
};

export const updateWorkspaceRequest = async ({ workspaceId, name, token }) => {
    try {
        const response = await axios.put(`/workspaces/${workspaceId}`, {name: name}, {
            headers: {
                'x-access-token' : token
            }
        });
        console.log('updated the workspace successfully', response);
        
        return response.data.data;
    } catch (error) {
        console.log('updateWorkspaceRequest', updateWorkspaceRequest);
        throw error.response.data;
        
    }
};


export const createChannelRequest = async ( {workspaceId, channelName, token } ) => {
    try {
        const response = await axios.put(`/workspaces/${workspaceId}/channels`, { channelName : channelName }, {
            headers: {
                'x-access-token' : token
            }
        });
        console.log('createChannelRequest: ', response.data.data);
        
        return response.data.data;
    } catch (error) {
        console.log(error);
        throw error.response.data;
        
    }
};

export const resetJoinIdRequest = async ({ workspaceId, token }) => {
    try {
        const response = await axios.put(`/workspaces/${workspaceId}/joinId/reset`, {}, {
            headers: {
                'x-access-token': token
            }
        });

        return response.data.data;
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
};