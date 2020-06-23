export interface IDashboard {
  jumlahKasus: number;
  meninggal: number;
  perawatan: number;
  sembuh: number;
  perHari: IEndpoint;
  perKasus: IEndpoint;
  perProvinsi: IEndpoint;
  wismaAtlet: IEndpoint;
}

interface IEndpoint {
  csv?: string;
  json: string;
  links?: string;
  old?: string;
  karyawan?: string;
  kasur?: string;
  ruangan?: string;
}