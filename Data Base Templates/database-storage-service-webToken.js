//import config from '../../config' What the file should be...
const config = {API_ENDPOINT: 'template'}; // Delete This in production
const TokenService = {getAuthToken: () => {}} // Replace this with Local Json Webtoken
// The Route for the file
const route = 'objectives'


const dbService = {
    getObjective(objId) {
        return fetch(`${config.API_ENDPOINT}/${route}/${objId}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    patchObjective(newData, id) {
        return fetch(`${config.API_ENDPOINT}/${route}/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(newData),
        })
    },
    postObjective(objective) {
        return fetch(`${config.API_ENDPOINT}/${route}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                obj: objective.obj,
                goalid: objective.goalid
            }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    toggleChecked(id){
        return fetch(`${config.API_ENDPOINT}/${route}/toggle/${id}`, {
            method: 'GET',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
    },
    deleteObjective(id) {
        return fetch(`${config.API_ENDPOINT}/objectives/${id}`, {
            method: 'DELETE',
            headers: {'authorization': `bearer ${TokenService.getAuthToken()}`}
        })
    }
};

export default dbService
