import axios from 'axios';

export const getDataFromApi = url => {
    return axios.get(url)
    .then( ({data}) => {//La data ya vendrá parseada como JSON
        return data;
    })
};