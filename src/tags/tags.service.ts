import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag } from './entities/tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ObjectId, Repository } from 'typeorm';

@Injectable()
export class TagsService {

  constructor(
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) { }

  async create(createTagDto: CreateTagDto): Promise<Tag> {
    const eventTag = new Tag()
    eventTag.id = createTagDto.id;
    eventTag.description = createTagDto.description;
    return await this.tagRepository.save(eventTag);
  }

  async findAll(): Promise<Tag[]> {
    return await this.tagRepository.find();
  }

  async findOne(tagId: string): Promise<Tag> {
    return await this.tagRepository.findOne({
      where: {
        id: tagId
      }
    })
  }

  update(id: string, updateTagDto: UpdateTagDto) {
    return `This action updates a #${id} tag`;
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.tagRepository.delete({id: id})
  }
}
