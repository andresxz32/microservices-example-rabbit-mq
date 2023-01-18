import { UserAuthCredentialsDto } from "./user-auth-credentials-dto";
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto extends UserAuthCredentialsDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}