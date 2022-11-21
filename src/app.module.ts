import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntradasModule } from './entradas/entradas.module';
import { Entrada } from './entradas/entities/entrada.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'ingresouts',
      entities: [Entrada],
      synchronize: true,
    }),
    EntradasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
