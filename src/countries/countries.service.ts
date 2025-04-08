import { Injectable } from "@nestjs/common";
import { GetCountryDTO } from "./countries.dto";
import countries from "../mockData/countriesMock.json";
@Injectable()
export class CountriesService {
  getAll(): GetCountryDTO[] {
    console.log(countries)
    return countries;
  }
  getById(id: number): GetCountryDTO | {} {
    return countries.find((country)=>country.id === id) || {}
  }
  getFunFactById(id: number): GetCountryDTO | {} {
    return countries.find((country)=>country.id === id)?.funFact || {}
  }
}
