import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';
import { IsPasswordMatching } from 'src/common/decorator/match.decorator';

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
  @MinLength(1)
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
  password: string;

  @ApiProperty({
    example: 'h0397363542H@',
    description: 'Confirm password : must be the same with password',
    uniqueItems: false,
    nullable: false,
  })
  @IsStrongPassword()
  @IsString()
  @IsNotEmpty()
  @IsPasswordMatching('password')
  confirmPassword: string;


  @ApiProperty({
    example: 'developer',
    description: 'Put a short bio'
  })
  @IsString()
  @IsOptional()
  shortBio: string;
}
