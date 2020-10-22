import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1599897661847 implements MigrationInterface {
    name = 'Test1599897661847'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `posts` DROP COLUMN `context`");
        await queryRunner.query("ALTER TABLE `posts` ADD `content` varchar(100) NULL COMMENT '帖子内容'");
        await queryRunner.query("ALTER TABLE `posts` ADD `user_id` int NOT NULL COMMENT '用户id'");
        await queryRunner.query("ALTER TABLE `posts` CHANGE `is_del` `is_del` tinyint NOT NULL COMMENT '是否删除,1表示删除,0表示正常' DEFAULT 0");
        await queryRunner.query("ALTER TABLE `role` CHANGE `is_del` `is_del` tinyint NOT NULL COMMENT '是否删除,1表示删除,0表示正常' DEFAULT 0");
        await queryRunner.query("ALTER TABLE `users` CHANGE `is_del` `is_del` tinyint NOT NULL COMMENT '是否删除,1表示删除,0表示正常' DEFAULT 0");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` CHANGE `is_del` `is_del` tinyint NOT NULL COMMENT '是否删除,1表示删除,0表示正常' DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `role` CHANGE `is_del` `is_del` tinyint NOT NULL COMMENT '是否删除,1表示删除,0表示正常' DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `posts` CHANGE `is_del` `is_del` tinyint NOT NULL COMMENT '是否删除,1表示删除,0表示正常' DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `posts` DROP COLUMN `user_id`");
        await queryRunner.query("ALTER TABLE `posts` DROP COLUMN `content`");
        await queryRunner.query("ALTER TABLE `posts` ADD `context` varchar(100) NULL COMMENT '帖子内容'");
    }

}
