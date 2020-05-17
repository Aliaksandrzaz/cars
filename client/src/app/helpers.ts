import { CarType } from './car/models';

export function chooseCarType(type: CarType) {
  switch (type) {
    case 'dumpTruck':
      return 'Самосвал';
    case 'tractor':
      return 'Тягач';
    default:
      return '';
  }
}
