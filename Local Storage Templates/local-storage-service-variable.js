const LocalDataService = {
    local: 'template',
    serializeData(data) {
        return JSON.stringify(data)
    },
    saveLocalData(data) {
        window.localStorage.setItem(this.local, this.serializeData(data))
    },
    getLocalData() {
        return window.localStorage.getItem(this.local)
    },
    getSafeLocalData(){
        try {
            return window.localStorage.getItem(this.local)
        } catch (e) {
            console.log(e);
        }
    },
    clearLocalData() {
        window.localStorage.removeItem(this.local)
    },
    hasLocalData() {
        return !!this.getLocalData(this.local)
    },
    hasSafeLocalData() {
        return !!this.getSafeLocalData(this.local)
    },
};
// Local is the Local Storage Data Packet Name
// Data is the data object being stored
export default LocalDataService
