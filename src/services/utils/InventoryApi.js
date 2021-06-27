const BACK_API = "http://localhost:5000/api/";

export const EquipementListGet = async (path) => {
    const url = BACK_API + path;
    let response = await fetch(url);
    if (response.ok || response.status === 400)
        return {
            result: await response.json(),
            status: response.status
        }
    else
        throw new Error(response);
}
