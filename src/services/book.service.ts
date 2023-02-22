import axios from 'axios';
import settings from '../settings/settings';
import { ReqSearchBook, ResSearchBook } from '../types/book';

axios.defaults.baseURL = settings.baseApiUrl;

export function search({ query, startIndex, orderBy }: ReqSearchBook): Promise<ResSearchBook> {
    return axios
        .get(`volumes?q=${query}&startIndex=${startIndex}&maxResults=10&orderBy=${orderBy}&printType=books`)
        .then(res => res.data)
        .catch((err: Error) => {
            console.error(err);
            return err
        });
}