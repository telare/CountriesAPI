import {  Controller, Get, Param } from "@nestjs/common";
import { CountriesService } from "./countries.service";
import { GetCountryDTO } from "./countries.dto";

@Controller("countries")
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}
  @Get("")
  getAll(): GetCountryDTO[] {
    return this.countriesService.getAll();
  }

  @Get(":id")
  getById(@Param("id") id: string): GetCountryDTO | {} {
    return this.countriesService.getById(parseInt(id));
  }

  // -
  @Get(":id/fun-fact")
  getFunFactById(@Param("id") id: string): GetCountryDTO | {} {
    return this.countriesService.getFunFactById(parseInt(id));
  }
}
