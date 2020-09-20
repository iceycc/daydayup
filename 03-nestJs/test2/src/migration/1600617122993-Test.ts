import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1600617122993 implements MigrationInterface {
    name = 'Test1600617122993'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `role` CHANGE `is_del` `is_del` tinyint NOT NULL COMMENT '是否删除，0为正常，1为不正常' DEFAULT 0");
        await queryRunner.query("ALTER TABLE `users` CHANGE `is_del` `is_del` tinyint NOT NULL COMMENT '是否已经删除,1已经删除，0正常' DEFAULT 0");
        await queryRunner.query("ALTER TABLE `posts` CHANGE `is_del` `is_del` tinyint NOT NULL COMMENT '是否被删除' DEFAULT 0");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `posts` CHANGE `is_del` `is_del` tinyint NOT NULL COMMENT '是否被删除' DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `users` CHANGE `is_del` `is_del` tinyint NOT NULL COMMENT '是否已经删除,1已经删除，0正常' DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `role` CHANGE `is_del` `is_del` tinyint NOT NULL COMMENT '是否删除，0为正常，1为不正常' DEFAULT '0'");
    }

}
