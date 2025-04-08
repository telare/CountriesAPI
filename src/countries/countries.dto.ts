import { IsNumber, IsOptional, IsString } from "class-validator";

export class CountryResponseDTO {
  @IsNumber()
  id: number;

  @IsNumber()
  population: number;

  @IsString()
  name: string;

  @IsString()
  continent: string;

  @IsString()
  capital: string;

  @IsString()
  funFact: string;
}

// export type CreateCountryDTO = Partial<
//   Pick<CountryResponseDTO, "funFact" | "population" | "continent">
// > &
//   Omit<CountryResponseDTO, "funFact" | "population" | "continent">;

export class CreateCountryDTO {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  capital: string;

  @IsOptional() 
  @IsString()
  funFact?: string;

  @IsOptional() 
  @IsNumber()
  population?: number;

  @IsOptional() 
  @IsString()
  continent?: string;
}

export class GetCountryDTO {
  @IsNumber()
  id: number;
}

// export type UpdateCountryDTO = Pick<CountryResponseDTO, "id" | "name"> &
//   Partial<Omit<CountryResponseDTO, "id" | "name">>;

export class UpdateCountryDTO {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsOptional() 
  @IsNumber()
  population?: number;

  @IsOptional() 
  @IsString()
  continent?: string;

  @IsOptional() 
  @IsString()
  capital?: string;

  @IsOptional() 
  @IsString()
  funFact?: string;
}

// export type DeleteCountryDTO = Pick<CountryResponseDTO, "id">

export class DeleteCountryDTO {
  @IsNumber()
  id: number;
}
