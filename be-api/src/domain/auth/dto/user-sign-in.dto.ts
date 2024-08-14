import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class UserSingInDto {

    @ApiProperty({
        example : 'gia.huy@gmail.com'
    })
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email : string

    @ApiProperty({
        example : 'H0397363542h@'
    })
    @IsString()
    @IsNotEmpty()
    password : string
}