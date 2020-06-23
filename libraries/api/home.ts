const baseUrl: string = process.env.NEXT_SERVER_API || '';

class Home {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  public read = () => ({
    method: 'get',
    uri: `${this.url}/api`,
  });
}

export default new Home(baseUrl);