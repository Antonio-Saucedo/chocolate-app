import { PartialType } from '@nestjs/mapped-types';
import { CreateChocolateDto } from '../create-chocolate.dto/create-chocolate.dto';

export class UpdateChocolateDto extends PartialType(CreateChocolateDto) {}
