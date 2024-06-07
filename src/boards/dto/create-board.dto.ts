import { IsNotEmpty } from "class-validator";

export class createBoardDto {
    //test method validation
    @IsNotEmpty()
    title: string;

    //test method validation
    @IsNotEmpty()
    description: string;
}