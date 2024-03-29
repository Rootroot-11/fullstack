const axios = require("axios");

export const login = async (data) => {
    try {
        const response = await axios.post('https://urlsession-backend.onrender.com/auth/login', data);

        return response.data;
    } catch (e) {
        alert(JSON.stringify(e.response.data, null, 2));
    }
};

export const logout = async () => {
    try {
        const response = await axios.post('https://urlsession-backend.onrender.com/auth/logout', {}, {
            headers: {
                'Authorization': localStorage.getItem('access_token')
            }
        })

        return response.data;
    } catch (e) {
        alert(JSON.stringify(e.response.data, null, 2));
    }
};
