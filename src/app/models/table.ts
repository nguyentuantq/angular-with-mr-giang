export interface Table {
  data: TableRow[];
}

export interface TableRow {
  iconUrl: string;
  productName: string;
  location: string;
  dateTime: string;
  piece: number;
  amount: string;
  status: string;
}
