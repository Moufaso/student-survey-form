import axios from 'axios';

const API_URL = 'http://localhost:8080/';

export default {
    postSurvey(survey) {
        return axios.post(API_URL + 'survey', survey);
    },
    getSurvey(id) {
        return axios.get(API_URL + 'list/' + id);
    },
    getSurveys() {
        return axios.get(API_URL + 'list');
    },
    deleteSurvey(id) {
        return axios.delete(API_URL + 'list/' + id);
    },
    updateSurvey(id, survey) {
        return axios.put(API_URL + 'list/' + id, survey);
    }
}