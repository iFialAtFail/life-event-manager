import { IsDate, IsDateString, IsString } from "class-validator";

export class CreateEventDto {

    @IsDateString()
    pointInTime: Date;

    @IsString()
    description: string;

    details?: string;

    @IsString()
    userId: string;
}
