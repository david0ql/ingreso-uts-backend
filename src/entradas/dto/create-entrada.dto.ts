import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateEntradaDto {

  @IsString()
  @IsEmail()
  @MinLength(8)
  correo_docente: string;

  @IsString()
  @IsEmail()
  @MinLength(8)
  correo_estudiante: string;
}
