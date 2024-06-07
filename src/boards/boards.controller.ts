import { Body, Controller, Get, Post, Param, Delete, Patch, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardsService } from './boards.service';
import {Board, BoardStatus} from './board.model';
import { createBoardDto } from './dto/create-board.dto';
import { create } from 'domain';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {

    constructor(private boardsService : BoardsService){}

    @Get('/')
    getAllBoards(): Board[] {
        return this.boardsService.getAllBoards();
    }

    @Get('/:id')
    getBoardById(@Param('id') id: string){
        return this.boardsService.getBoardById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createBoard(
        @Body() createBoardDto: createBoardDto
    ): Board {
        return this.boardsService.createBoard(createBoardDto)
    }

    @Delete('/:id')
    deleteBoard(@Param('id') id: string): void{
        this.boardsService.deleteBoard(id);
    }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id') id: string,
        @Body('status', BoardStatusValidationPipe) status: BoardStatus
    ){
        return this.boardsService.updateBoardStatus(id, status)
    }
    
}
