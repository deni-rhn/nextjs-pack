import { IProvinceStatistic } from '@interfaces/iprovinceStatistic';
import { IDailyStatistic } from '@interfaces/idailyStatistic';

export const pieChartParser = (data: IProvinceStatistic[]) =>
  data.map((item: IProvinceStatistic) => ({
    name: item.provinsi,
    value: item.kasusPosi
  }));

export const barChartParser = (data: IDailyStatistic[]) =>
  data.map((item: IDailyStatistic) => ({
    name: `hari ke ${item.harike}`,
    positif: item.jumlahKasusBaruperHari,
    sembuh: item.jumlahKasusSembuhperHari,
    meninggal: item.jumlahKasusMeninggalperHari,
    rawat: item.jumlahKasusDirawatperHari < 0 ? Math.abs(item.jumlahKasusDirawatperHari) : item.jumlahKasusDirawatperHari,
  }));