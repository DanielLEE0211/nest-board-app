import { Body, Controller, Get, Post, Param, Delete, Patch } from '@nestjs/common';
import { BoardsService } from './boards.service';
import {Board, BoardStatus} from './board.model';
import { createBoardDto } from './dto/create-board.dto';
import { create } from 'domain';

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

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id') id: string,
        @Body('status') status: BoardStatus
    ){
        return this.boardsService.updateBoardStatus(id, status)
    }

    @Delete('/:id')
    deleteBoard(@Param('id') id: string): void{
        this.boardsService.deleteBoard(id);
    }
    

    @Post()
    createBoard(
        @Body() createBoardDto: createBoardDto
    ): Board {
        return this.boardsService.createBoard(createBoardDto)
    }
}
