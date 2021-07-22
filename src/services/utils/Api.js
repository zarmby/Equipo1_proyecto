const BACK_API = "https://arkus-inventory.herokuapp.com/api/";
const EMPTY_USER ="60f834a631497ba4d5a6e40c";

export const LoginApiPost = async (path, params = null) => {
    const url = BACK_API + path;

    let data = {
        email: params[0],
        password: params[1]
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
    else {
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
    else {
        let err = await response.json();
        throw new Error(err.msg)
    }
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
        IDrole: "60f8dfa496f4eb00156a8356",
        account: params[2].split('@')[0],
        password: params[4],
        confirmPass: params[5]
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
    if (response.status !== 400)
        return {
            result: await response.json(),
            status: response.status
        }
    else {
        let err = await response.json();
        throw new Error(err.infoError);
    }
}

export const RegisterTypeEquipmentApiPost = async (path, params = null) => {
    const url = BACK_API + path;

    let data = {
        tename: params[0],
        imagen: (params[1]) ? params[1] : "",
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
    if (response.status !== 400)
        return {
            result: await response.json(),
            status: response.status
        }
    else {
        let err = await response.json();
        throw new Error(err.msg);
    }
}

export const RegisterTypeEquipmentFiltersApiPost = async (path, params = null, id = null) => {
    const url = BACK_API + path;

    let data = {
        mark: params[0],
        model: params[1],
        equipmentdescription: params[2],
        enviroment: params[3],
        state: false,
        typeequipment: id
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
    if (response.status !== 400)
        return {
            result: await response.json(),
            status: response.status
        }
    else {
        let err = await response.json();
        throw new Error(err.msg);
    }
}

export const RegisterEquipmentApiPost = async (path, params = null) => {
    const url = BACK_API + path;

    if (params[9] === ""){
      var data = {
          IDtypeequipment: params[0],
          serialnumber: params[1],
          state: params[2],
          equipmentdescription: params[3],
          model: params[4],
          mark: params[5],
          IDcampus: params[6],
          status: params[7],
          enviroment: params[8]
      }
    } else {
      var data = {
          IDtypeequipment: params[0],
          serialnumber: params[1],
          state: params[2],
          equipmentdescription: params[3],
          model: params[4],
          mark: params[5],
          IDcampus: params[6],
          status: params[7],
          enviroment: params[8],
          IDuser: params[9]
      }
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
    if (response.status !== 400)
        return {
            result: await response.json(),
            status: response.status
        }
    else {
        let err = await response.json();
        throw new Error(err.msg)
    }
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

export const UpdateTypeEquipmentApiPut = async (path, params = null, id = null) => {
    const url = BACK_API + path + "?idTypeEquipment=" + id;

    let data = {
        tename: params[0],
        imagen: (params[1]) ? params[1] : "",
        idTypeEquipment: id
    }
    console.log(url);
    let response = await fetch(
        url,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )
    if (response.status === 200)
        return {
            result: await response.json(),
            status: response.status
        }
    else {
        let err = await response.json();
        throw new Error(err.msg);
    }
}

export const UpdateTypeEquipmentFiltersApiPut = async (path, params = null, id = null) => {
    const url = BACK_API + path + "?idFilter=" + id;

    let data = {
        mark: params[0],
        model: params[1],
        equipmentdescription: params[2],
        enviroment: params[3],
    }
    let response = await fetch(
        url,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )
    if (response.status !== 400)
        return {
            result: await response.json(),
            status: response.status
        }
    else {
        let err = await response.json();
        throw new Error(err.msg);
    }
}

export const DeleteTypeEquipmentApiDelete = async (path, params = null, id = null) => {
    const url = BACK_API + path + "?idTypeEquipment=" + id;

    let data = {
        status: params
    }
    let response = await fetch(
        url,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )
    if (response.status !== 400)
        return {
            result: await response.json(),
            status: response.status
        }
    else {
        let err = await response.json();
        throw new Error(err.msg);
    }
}

export const UsersApiGet = async (path) => {
    const url = BACK_API + path;
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

export const UserApiGet = async (params=null) =>{
    const url = BACK_API + "user/infoUser?email=" + params;
    let response = await fetch(url);
    if (response.ok || response.status === 400)
        return {
            result: await response.json(),
            status: response.status
        }
    else{
        let err = await response.json();
        throw new Error(err.msg);
    }
}

export const UserEquipsApiGet = async (params=null) =>{
    const url = BACK_API + "equipments/user?email=" + params;
    let response = await fetch(url);
    if (response.ok || response.status === 400)
        return {
            result: await response.json(),
            status: response.status
        }
    else{
        let err = await response.json();
        throw new Error(err.msg);
    }
}

export const DeleteEquipmentApiDelete = async (path, params = null, id=null) => {
    const url = BACK_API + path + "?idEquipment=" + id;

    let data = {
        status: params
    }
    let response = await fetch(
        url,
        {
            method: 'DELETE',
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
    else {
        let err = await response.json();
        throw new Error(err.msg);
    }
}

export const UpdateEquipmentFiltersApiPut = async (path, params = null, id=null) => {
    const url = BACK_API + path + "?idFilter=" + id;

    let data = {
        mark: params[0],
        model:params[1],
        equipmentdescription: params[2],
        enviroment: params[3],
    }
    let response = await fetch(
        url,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )
    if (response.status !== 400)
        return {
            result: await response.json(),
            status: response.status
        }
    else {
        let err = await response.json();
        throw new Error(err.msg);
    }
}

export const UpdateEquipmentApiPut = async (path, params = null, id=null) => {
    const url = BACK_API + path + "?idEquipment=" + id;

    if (params[8] === ""){
      var data = {
          serialnumber: params[0],
          state: params[1],
          equipmentdescription: params[2],
          model: params[3],
          mark: params[4],
          IDcampus: params[5],
          status: params[6],
          enviroment: params[7],
          IDuser: EMPTY_USER
        }
    } else {
      var data = {
          serialnumber: params[0],
          state: params[1],
          equipmentdescription: params[2],
          model: params[3],
          mark: params[4],
          IDcampus: params[5],
          status: params[6],
          enviroment: params[7],
          IDuser: params[8]
      }
    }

    let response = await fetch(
        url,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )
    if (response.status !== 400)
        return {
            result: await response.json(),
            status: response.status
        }
    else {
        let err = await response.json();
        throw new Error(err.msg);
    }
}

export const GenerateEmail = async (path,email,ITemail,ITname) => {
    const url = BACK_API + path + "?email=" + email;

    let data = {
        ITemail: ITemail,
        ITname: ITname
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
    if (response.status !== 400)
        return {
            result: await response.json(),
            status: response.status
        }
    else {
        let err = await response.json();
        throw new Error(err.msg);
    }
}
