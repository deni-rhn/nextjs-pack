import axios, { AxiosResponse } from 'axios';
import { IDefaultHeaders } from '@interfaces/iapi';

export const callAPI = async ({
  method,
  uri,
  params,
  additionalHeader,
}: any) => {

  const defaultHeaders: IDefaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const url = uri;
  const headers = { ...defaultHeaders, ...additionalHeader };

  const dataOrParams = ['GET'].includes(method.toUpperCase())
    ? 'params'
    : 'data';
  const defaultConfig = { method, headers, url };
  const config = { ...defaultConfig, [dataOrParams]: params, timeout: 90000 };

  try {
    const response: AxiosResponse = await axios(config);

    return response;
  } catch (error) {
    // Expired Token
    // if (error.response.status === 401) {
    //   return doRefreshToken({ method, uri, params, additionalHeader });
    // }

    if (error.response && error.response.data) {
      throw error.response.data;
    }

    // tslint:disable-next-line: no-console
    console.error('ERROR NOT DEFINED', error);
    return null;
  }
};

export default callAPI;
