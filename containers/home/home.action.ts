import Home from '@libraries/api/home';
import { callAPI } from '@utils/fetcher';
import { IFetchData } from '@interfaces/ifetchData';
import { notification } from '@components/notification';

export const getHomeDatas = async () => {
  const payload: IFetchData = Home.read();

  try {
    const response: any = await callAPI({ ...payload });
    return response.data;
  } catch (error) {
    notification.error({
      message: 'Gagal!',
      duration: 5,
      description: 'Terjadi kesalahan pada system!',
    });
  }
}