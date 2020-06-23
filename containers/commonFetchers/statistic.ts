import Statistic from '@libraries/api/statistic';
import callAPI from '@utils/fetcher';
import { IFetchData } from '@interfaces/ifetchData';
import { notification } from '@components/notification';

export const getDailyStatistic = async () => {
  const payload: IFetchData = Statistic.readDaily();

  try {
    const response: any = await callAPI({ ...payload });
    return response.data.data;
  } catch (error) {
    notification.error({
      message: 'Gagal!',
      duration: 5,
      description: 'Terjadi kesalahan pada system!',
    });
  }
}

export const getProvinceStatistic = async () => {
  const payload: IFetchData = Statistic.readByProvince();

  try {
    const response: any = await callAPI({ ...payload });
    return response.data.data;
  } catch (error) {
    notification.error({
      message: 'Gagal!',
      duration: 5,
      description: 'Terjadi kesalahan pada system!',
    });
  }
}