export interface IFetchData {
  method: string;
  uri: string;
  params?: any;
  body?: any;
  callback?: any;
  additionalHeader?: any;
  baseUrl?: string;
}
