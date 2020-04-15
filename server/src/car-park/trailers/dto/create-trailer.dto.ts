import { TrailerType } from "../../../models"

export class CreateTrailerDto {
  model: string
  registrationNumber: string
  trailerType: TrailerType
  weight: number
}
