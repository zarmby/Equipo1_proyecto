const BACK_API = "https://arkus-inventory.herokuapp.com/api/";

export const EquipementListGet = async (path) => {
    const url = BACK_API + path;
    let response = await fetch(url);
    if (response.ok || response.status === 400)
        return {
            result: await response.json(),
            status: response.status
        }
    else
        throw new Error(response.msg);
}

export const TypeEquipementListGet = async (path) => {
    const url = BACK_API + path;
    let response = await fetch(url);
    if (response.ok || response.status === 400)
        return {
            result: await response.json(),
            status: response.status
        }
    else
        throw new Error(response.msg);
}

export const FiltersApiGet = async (params) => {
    const url = BACK_API + "filters/?idFilter=" + params;
    let response = await fetch(url);
    if (response.ok || response.status === 400)
        return {
            result: await response.json(),
            status: response.status
        }
    else {
        let err = await response.json();
        throw new Error(err.msg)
    }
}
