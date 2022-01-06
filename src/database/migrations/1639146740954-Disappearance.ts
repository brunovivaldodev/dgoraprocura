import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';


export class Disappearance1639146740954 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'disappearance',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: 'type',
                    type: 'enum',
                    enum: ["BI", "credit_card", "passport"],
                    enumName: 'TypeDocument',
                    default: '"BI"'
                },
                {
                    name: 'user_id',
                    isNullable: true,
                    type: 'varchar',
                },
                {
                    name: 'document_url',
                    type: 'varchar'
                },
                {
                    name: 'disappearance_place',
                    type: 'enum',
                    enum: ["taxi", "via"],
                    enumName: 'DisappearancePlace',
                    default: '"taxi"'
                },
                {
                    name: 'state',
                    type: 'enum',
                    enum: ["disappeared", "founded"],
                    enumName: 'State',
                    default: '"disappeared"'
                },
                {
                    name: 'location',
                    type: 'json'
                },
                {
                    name: 'message_sent',
                    type: 'boolean',
                    default : "false"
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'current_timestamp()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'current_timestamp()'
                }
            ]

        }))

        await queryRunner.createForeignKey('disappearance', new TableForeignKey({
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('disappearance')
    }

}
