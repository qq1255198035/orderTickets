import storage from 'good-storage'
const USER_ID = '__userid__'
export function saveTolocal(id, key, val) {
    const userid = storage.get(USER_ID, {})
    if(!userid[id]) {
        userid[id] = {}
    }
    userid[id][key] = val
    storage.set(USER_ID, userid)
}
export function loadFromLocal(id, key, def) {
    const userid = storage.get(USER_ID, {})
    if (!userid[id]) {
        return def
    }
    return userid[id][key] || def
}
