import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from "uuid"

@Entity("Users")
 class users {
    @PrimaryColumn()
    readonly id:string
    @Column()
    Nome:string
    @Column()
    Email:string
    @Column()
    Senha:string
    @Column()
    FotoImg:string
    @CreateDateColumn()
    Created_at:Date
    @UpdateDateColumn()
    Updated_at:Date

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}


export {users}