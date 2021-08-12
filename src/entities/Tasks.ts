import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";
import { users } from "./users";
@Entity("Tasks")
 class Tasks {
    @PrimaryColumn()
    readonly id: string
    @Column()
    nome:string
    @Column()
    usuario_id:string
    @JoinColumn({name:"usuario_id"})
    @ManyToOne(()=> users)
    user:users
    @Column()
    data_inicio:Date
    @Column()
    data_fim:Date
    @Column()
    estado:boolean
    @CreateDateColumn()
    created_at:Date
    @UpdateDateColumn()
    updated_at:Date

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}

export {Tasks}