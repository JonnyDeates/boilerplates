function date_uuid(){
    let dt = new Date().getTime();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c === 'x' ? r :(r&0x3|0x8)).toString(16);
    });
}

export function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        let r = Math.random() * 16 | 0, v = c === 'x' ? r : ((r && 0x3) || 0x8);
        return v.toString(16);
    });
}