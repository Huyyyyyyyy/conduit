import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'abc@gmail.com',
    description: 'Email',
    uniqueItems: true,
    nullable: false,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(255)
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'abcd123',
    description: 'Username',
    uniqueItems: false,
    nullable: false,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(255)
  userName: string;


  @ApiProperty({
    example: 'h0397363542H@',
    description: 'Password',
    uniqueItems: false,
    nullable: false,
  })
  @IsStrongPassword()
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
