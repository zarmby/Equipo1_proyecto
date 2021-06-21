const BACK_API = "http://localhost:5000/api/";

export const LoginApiPost = async (path, params = null) => {
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
    if (response.status !== 404 && response.status !== 400)
        return {
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
        throw new Error(response);
}

export const RegisterApiPost = async (path, params = null) => {
    const url = BACK_API + path;

    let data = {
        IDcampus: params[6],
        picture: 'default.jpg',
        name: params[0],
        lastname: params[1],
        email: params[2],
        phonenumber: params[3],
        userprofile: 'dev',
        IDrole: "60ccc3de76c1933d50604bbd",
        account: params[2].split('@')[0],
        password: params[4],
        password2: params[4]
    }
    
    console.log(data);
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
    if(response.status !== 400)
        return{
            result: await response.json(),
            status: response.status
        }
    else 
        throw new Error(response);
}
