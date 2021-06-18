const BACK_API = "http://localhost:5000/api/";

export const LoginApiGet = async (path, params = null) => {
    const url = BACK_API + path;

    let data = {
        email : params[0],
        password : params[1] 
    }
    
    let response = await fetch(
        url,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )
    if(response.status !== 404 && response.status !== 400)
        return{
            result: await response.json(),
            status: response.status
        }
    else 
        throw new Error(response.status);
}

export const SedeApiGet = async (path) => {
    const url = BACK_API + path;
    let response = await fetch(url);
    if (response.ok || response.status === 400)
        return {
            result: await response.json(),
            status: response.status
        }
    else
        throw new Error(response.status);
}