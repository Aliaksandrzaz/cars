export class EditRoadListDto {
  roadListId: string;
  odometerStart: number;
  odometerEnd: number;
  fuelStart: number;
  fuelEnd: number;
  adBlueStart: number;
  adBlueEnd: number;
  dayStart: number;
  dayEnd: number;
  temperature: number;
  driverId: number;
  carId: number;
  trailerId?: number;
  dailyReportId: number;
}
