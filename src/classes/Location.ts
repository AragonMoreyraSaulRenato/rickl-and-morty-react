import { Character } from "./Character";

export interface Location {
  id: string;
  nam?: string;
  type?: string;
  dimension?: string;
  residents?: Character[];
  created?: string;
}
