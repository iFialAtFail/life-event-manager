import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { randomInt } from 'crypto';

@Injectable()
export class EventsService {
  
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
  ) {}

  async create(createEventDto: CreateEventDto) {
    const event = new Event();
    event.description = createEventDto.description;
    event.pointInTime = createEventDto.pointInTime;
    event.userId = createEventDto.userId;
    event.id = randomInt(1000)

    await this.eventRepository.save(event);
    return event;
  }

  findAll(): Promise<Event[]> {
    return this.eventRepository.find();
  }

  findOne(id: number): Promise<Event | null> {
    return this.eventRepository.findOneBy({ id });
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    var event = this.eventRepository.findBy({})
    return `This action updates a #${id} event`;
  }

  async remove(id: number): Promise<void> {
    await this.eventRepository.delete(id);
  }
}
