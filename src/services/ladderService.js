
import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; // Assuming your backend runs locally on port 5000

export default {
    fetchAllLadders() {
        return axios.get(`${BASE_URL}/ladders`);
    },
    fetchLadderById(id) {
        return axios.get(`${BASE_URL}/ladders/${id}`);
    },
    createLadder(data) {
        return axios.post(`${BASE_URL}/ladders`, data);
    },
    updateLadder(id, data) {
        return axios.put(`${BASE_URL}/ladders/${id}`, data);
    },
    deleteLadder(id) {
        return axios.delete(`${BASE_URL}/ladders/${id}`);
    }
};