import { aw } from "react-router/dist/production/route-data-DuV3tXo2";
import axiosClient from "./axiosClient";
import { data } from "react-router";


const examApi = {
    // getAll(params) {
    //     const url = '/products';
    //     return axiosClient.get(url, { params});
    // },

    // get(id) {
    //     const url = `/products/${id}`;
    //     return axiosClient.get(url);
    // },

    // add(data) {
    //     const url = '/products';
    //     return axiosClient.post(url, data);
    // },

    // update(data) {
    //     const url = `/products/${data.id}`;
    //     return axiosClient.patch(url, data);
    // },

    // remove(id) {
    //     const url = `/products/${id}`;
    //     return axiosClient.delete(url);
    // }
    async getAll(params) {
        const newParams = { ...params};
        newParams._start = !params._page || params._page <= 1 ? 0 : (params._page -1 ) * (params._limit || 50)

    //Remove un-needed key
    delete newParams._page;

    //
    const examList = await axiosClient.get('exams', {params: newParams});
    const count = await axiosClient.get('/exams/count', {params: newParams});

    return {
        data: examList,
        pagination: {
            page: params._page,
            limit: params._limit,
            total: count,
        }
    }
    },
    get(id) {
        const url = `/exams/${id}`;
        return axiosClient.get(url);
    },
};

export default examApi;