import api from '../api/axios.js';

export const fetchAllPosts = async () => {
    const res = await api.get('/news');

    return res.data;
};

export const fetchPostById = async id => {
    const res = await api.get(`/news/${id}`);

    return res.data;
};

export const fetchImgById = async id => {
    const res = await api.get(`/media/${id}`);

    return res.data;
};
