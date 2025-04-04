import { Injectable } from '@nestjs/common';
import { CreateEspecialidadeDto } from './dto/create-especialidade.dto';

@Injectable()
export class EspecialidadesService {
  create(createEspecialidadeDto: CreateEspecialidadeDto) {
    console.log(createEspecialidadeDto);
    throw new Error('não implementado');
  }

  findAll() {
    throw new Error('não implementado');
  }
}
