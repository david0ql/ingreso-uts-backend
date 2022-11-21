import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Entrada {

  @PrimaryGeneratedColumn()
  id_entrada: number;

  @Column()
  correo_docente: string;

  @Column()
  correo_estudiante: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  fecha_registro: Date;
}
