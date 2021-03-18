import * as api from '../api';
import axios from 'axios';
//ACTION CREATORS

export const login = () => async (dispatch) => {
    try{

    } catch(error){
        console.log(error.message);
    }
}
/*
export const getUsers = () => async (dispatch) => {
    try{
        const { data } = await api.fetchUsers();
        dispatch({ type: 'FETCH_ALL', payload: data });
    }catch(error){
        console.log(error.message);
    }

}
*/
export const createUser = (user) => async (dispatch) => {
    try {
        console.log(user);
        const res = axios.post('http://localhost:5000/auth/register', user)
        .then((res)=>{
            console.log("Response: ");
            console.log(res.data);
        });
        /*
        const { data } = await api.createUser(user);
        
        dispatch({type:"CREATE", payload: data});
        */

    } catch (error) {
        console.log(error);
    }
}