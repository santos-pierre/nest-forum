import { BadRequestException, Body, Controller, Post, UnprocessableEntityException } from '@nestjs/common';
import { Category } from 'src/entities/category.entity';
import { CategoryService } from './category.service';
import { CreateCategoryDTO } from './dto/create-category.dto';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() dto: CreateCategoryDTO) {
    try {
      const c = new Category();
      c.name = dto.name;

      const category = await this.categoryService.save(c);
      return category;
    } catch (error) {
      console.log(error);

      throw new BadRequestException();
    }
  }
}
