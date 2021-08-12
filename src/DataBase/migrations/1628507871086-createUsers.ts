import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1628507871086 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"Users",
                columns:[{
                    name:"id",
                    type:"uuid",
                    isPrimary:true
                },
                {
                    name:"Nome",
                    type:"varchar"
                },
                {
                    name:"Email",
                    type:"varchar"
                },
                {
                    name:"Senha",
                    type:"varchar"
                },
                {
                    name:"FotoImg",
                    type:"varchar"
                },
                {
                    name:"Created_at",
                    type:"timestamp",
                    default:"now()"
                },
                {
                    name:"Updated_at",
                    type:"timestamp",
                    default:"now()"
                }
            ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Users")
    }

}
