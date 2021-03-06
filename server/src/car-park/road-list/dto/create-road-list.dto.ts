export class CreateRoadListDto {
  roadListId: string;
  odometerStart: number;
  fuelStart: number;
  adBlueStart: number;
  dayStart: number;
  temperature: number;
  driverId: number;
  carId: number;
  trailerId?: number;
  dailyReportId: number;
}
