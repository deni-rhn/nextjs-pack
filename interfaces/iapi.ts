export interface IDefaultHeaders {
  Accept: string;
  'Content-Type': string;
  Authorization?: string;
}

export default interface IPayloadAPI {
  method: string;
  uri: string;
  params?: object;
  additionalHeader?: object;
}
