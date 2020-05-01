export class EditFuelDto {
  id: Readonly<number>;
  amount: number;
  date: number;
  type: string;
  gasStation?: string;
}
