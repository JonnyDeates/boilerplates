const LocalDataService = {
    serializeData(data) {
        return JSON.stringify(data)
    },
    saveLocalData(local, data) {
        window.localStorage.setItem(local, this.serializeData(data))
    },
    getLocalData(local) {
        return window.localStorage.getItem(local)
    },
    clearLocalData(local) {
        window.localStorage.removeItem(local)
    },
    hasLocalData(local) {
        return !!this.getLocalData(local)
    },
};
// Local is the Local Storage Name
// Data is the data object being stored
export default LocalDataService
