import { Injectable, NotFoundException } from '@nestjs/common';
import { Chocolate } from './entities/chocolate.entities';

@Injectable()
export class ChocolatesService {
  private chocolates: Chocolate[] = [
    {
      id: 1,
      name: 'Ferrero',
      brand: 'Ferrero Rocher',
      flavors: ['chocolate', 'vanilla', 'Hazelnut'],
    },
  ];

  findAll() {
    return this.chocolates;
  }

  findOne(id: string) {
    const chocolate = this.chocolates.find((item) => item.id === +id);
    if (!chocolate) {
      throw new NotFoundException(`Chocolate with ID ${id} was not found`);
    }
    return chocolate;
  }

  create(createChocolateDto: any) {
    this.chocolates.push(createChocolateDto);
    return createChocolateDto;
  }

  update(id: string, updateChocolateDto: any) {
    const existingChocolate = this.findOne(id);
    if (existingChocolate) {
      // update the existing entity
    }
  }

  remove(id: string) {
    const chocolateIndex = this.chocolates.findIndex((item) => item.id === +id);
    if (chocolateIndex >= 0) {
      this.chocolates.splice(chocolateIndex, 1);
    }
  }
}
