import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ChocolatesService } from './chocolates.service';
import { CreateChocolateDto } from './dto/create-chocolate.dto/create-chocolate.dto';
import { UpdateChocolateDto } from './dto/update-chocolate.dto/update-chocolate.dto';

@Controller('chocolates')
export class ChocolatesController {
  constructor(private readonly chocolatesService: ChocolatesService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    return this.chocolatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chocolatesService.findOne(id);
  }

  @Post()
  create(@Body() createChocolateDto: CreateChocolateDto) {
    return this.chocolatesService.create(createChocolateDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateChocolateDto: UpdateChocolateDto,
  ) {
    return this.chocolatesService.update(id, updateChocolateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chocolatesService.remove(id);
  }
}
