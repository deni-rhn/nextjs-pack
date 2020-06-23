const baseUrl: string = process.env.NEXT_SERVER_API || '';

class Statistic {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  public readDaily = () => ({
    method: 'get',
    uri: `${this.url}/api/harian`,
  });

  public readByProvince = () => ({
    method: 'get',
    uri: `${this.url}/api/provinsi`,
  });
}

export default new Statistic(baseUrl);