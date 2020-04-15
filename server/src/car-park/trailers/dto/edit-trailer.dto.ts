import { TrailerType } from "../../../models"

export class EditTrailerDto {
  id: number
  model: string
  registrationNumber: string
  trailerType: TrailerType
  weight: number
}
