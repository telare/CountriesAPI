import { Module } from "@nestjs/common";
import { CountriesController } from "./countries/countries.controller";
import { CountriesService } from "./countries/countries.service";

@Module({
  controllers: [CountriesController],
  providers: [CountriesService],
})
export class AppModule {}
