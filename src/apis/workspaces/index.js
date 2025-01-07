import axios from "@/config/axiosConfig";

export const createWorkspaceRequest = async ({ name, discription, token }) => {
    try {
        const response = await axios.post('/workspaces', { name, discription }, {
            headers: {
                'x-access-token': token
            }
        })

        console.log(response.data);
        return response.data;
        
    } catch (error) {
        console.log(error);
        throw error.response.data
    }
}

export const fetchWorkspacesRequest = async ({ token }) => {
    try {
        const response = await axios.get('/workspaces', {
            headers: {
                'x-access-token': token
            }
        })

        console.log(response);
        
        return response.data;
        
    } catch (error) {
        console.log(error);
        throw error.response.data;
        
    }
}