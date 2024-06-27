import { IsString } from "class-validator";

export class CreateTagDto {
    
    @IsString()
    id: string;

    description?: string;
}
