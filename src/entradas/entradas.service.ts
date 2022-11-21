import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEntradaDto } from './dto/create-entrada.dto';
import { UpdateEntradaDto } from './dto/update-entrada.dto';
import { Entrada } from './entities/entrada.entity';

@Injectable()
export class EntradasService {
  constructor(
    @InjectRepository(Entrada)
    private entradaRepository: Repository<Entrada>,
  ) {}
  async create(createEntradaDto: CreateEntradaDto) {
    const entrada = await this.entradaRepository.save(createEntradaDto);
    return entrada;
  }

  findAll() {
    return this.entradaRepository.find();
  }

  async findOne(correo_docente: string) {
    const entrada = await this.entradaRepository.findOneBy({
      correo_docente,
    });

    if (!entrada)
      throw new NotFoundException(
        `No encontramos al docente con correo: ${correo_docente}`,
      );

    return entrada;
  }
}
