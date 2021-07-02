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
    else{
        let err = await response.json();
        throw new Error(err.infoError)
    }
}

export const ApiGet = async (path) => {
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

export const RegisterUserApiPost = async (path, params = null) => {
    const url = BACK_API + path;

    let data = {
        IDcampus: params[6],
        picture: 'default.jpg',
        username: params[0],
        lastname: params[1],
        email: params[2],
        phonenumber: params[3],
        userprofile: 'dev',
        IDrole: "60d359daaf6db9078415f90d",
        account: params[2].split('@')[0],
        password: params[4],
        confirmPass: params[4]
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

export const RegisterTypeEquipmentApiPost = async (path, params = null) => {
    const url = BACK_API + path;

    let data = {
        tename: params[0],
        imagen: (params[1]) ? params[1] : "",
        filterbrand: params[2],
        filtermodel: params[3],
        filterdescription: params[4],
        filterenviroment: params[5],
        filtersede: params[6]
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

