import {Episode} from './Episode'
export interface Character {
  id: string ,
  name?: string ,
  status?: string ,
  species?: string ,
  type?: string ,
  gender?: string ,
  origin?: Location,
  location?: Location,
  image?: string ,
  episode?: Episode [],
  created?: string ,
}