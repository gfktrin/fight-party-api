import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Character } from './character.model';
import { CharactersService } from './characters.service';

class CreateCharacter {
  name: string;
}

@Controller('characters')
export class CharactersController {
  constructor(private characterService: CharactersService) {}

  @UseGuards(JwtAuthGuard)
  @Post(':id')
  async create(
    @Param('id') id: string,
    @Body() createBody: CreateCharacter,
  ): Promise<Character> {
    const { name } = createBody;
    return this.characterService.create(id, name);
  }
}
