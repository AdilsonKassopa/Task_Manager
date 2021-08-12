import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTask1628607959474 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"Tasks",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"nome",
                        type:"varchar"
                    },
                    {
                        name:"usuario_id",
                        type:"uuid"
                    },
                    {
                        name:"data_inicio",
                        type:"date"
                    },
                    {
                        name:"data_fim",
                        type:"date"
                    },
                    {
                        name:"estado",
                        type:"bit"
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    },
                    {
                        name:"updated_at",
                        type:"timestamp",
                        default:"now()"
                    }
                ],
                foreignKeys:[
                    {
                        name:"Fk_users_id_task",
                        referencedTableName:"Users",
                        referencedColumnNames:["id"],
                        columnNames:["usuario_id"],
                        onDelete:"SET NULL",
                        onUpdate:"SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Tasks")
    }

}
