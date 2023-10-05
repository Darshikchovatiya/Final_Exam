import axios from "axios"
import { base_api } from "../../api/product_api"

export const pro_addAsync = (data) => {
    return dispatch => {
        axios.post(base_api + '/Products', data).then((res) => {
            // console.log("Res",res.data);
            dispatch(get_all_proAsync(res.data));

        }).catch((err) => {
            console.log(err, "err");
        })
    }
}

export const get_all_proAsync = () => {
    return dispatch => {
        axios.get(base_api + '/Products').then((res) => {
            // console.log(res,"res");
            dispatch(all_products(res.data))
        }).catch((err) => {
            console.log("err", err);
        })
    }
}

const all_products = (data) => {
    return {
        type: 'AllPro',
        payload: data
    }
}

export const singleproAsync = (id,data) => {
    return dispatch => {
        axios.get(base_api + `/Products/${id}`, data).then((res)=>{
            console.log(res,"<<<<res");
            dispatch(singlepro(res.data));

        }).catch((err) => {
            console.log("Err>>>>", err);
        })
    }
}

const singlepro = (data) => {
    return{
        type: "Signpro",
        payload: data
    }
}


export const pro_updateAsync = (id,data) => {
    return dispatch => {
        axios.patch(base_api + `/Products/${id}`, data).then((res) => {
            console.log("Res",res.data);
            dispatch(get_all_proAsync(res.data));

        }).catch((err) => {
            console.log(err, "err");
        })
    }
}

export const pro_deleteAsync = (id) => {
    return dispatch => {
        // console.log(id);
        axios.delete(base_api + `/Products/${id}`).then((res) => {
            // console.log("res>>>",res.data);
            dispatch(get_all_proAsync(res.data))
        }).catch((err) => {
            console.log("Err", err);
        })
    }
}