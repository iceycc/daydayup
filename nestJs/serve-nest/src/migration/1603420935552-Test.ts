import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1603420935552 implements MigrationInterface {
    name = 'Test1603420935552'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `access` (`id` int NOT NULL AUTO_INCREMENT COMMENT '主键id', `module_name` varchar(50) NULL COMMENT '模块名称', `type` tinyint NULL COMMENT '类型,模块顶级模块: 1, 表示菜单: 2, 操作: 3', `action_name` varchar(100) NULL COMMENT '操作名称', `icon` varchar(100) NULL COMMENT '小图标', `url` varchar(100) NULL COMMENT 'url地址', `method` varchar(10) NULL COMMENT '请求方式', `module_id` int NOT NULL COMMENT '父模块id' DEFAULT -1, `sort` int NOT NULL COMMENT '排序' DEFAULT 1, `description` varchar(100) NULL COMMENT '描素', `is_del` tinyint NOT NULL COMMENT '是否删除,1表示删除,0表示正常' DEFAULT 0, `created_at` timestamp(6) NOT NULL COMMENT '创建时间' DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL COMMENT '更新时间' DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_9ea9953cdc028452259b77dc8d` (`module_name`), UNIQUE INDEX `IDX_57391e4ce9e8cabc47a8336717` (`action_name`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `posts` CHANGE `is_del` `is_del` tinyint NOT NULL COMMENT '是否删除,1表示删除,0表示正常' DEFAULT 0");
        await queryRunner.query("ALTER TABLE `role` CHANGE `is_del` `is_del` tinyint NOT NULL COMMENT '是否删除,1表示删除,0表示正常' DEFAULT 0");
        await queryRunner.query("ALTER TABLE `users` CHANGE `is_del` `is_del` tinyint NOT NULL COMMENT '是否删除,1表示删除,0表示正常' DEFAULT 0");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` CHANGE `is_del` `is_del` tinyint NOT NULL COMMENT '是否删除,1表示删除,0表示正常' DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `role` CHANGE `is_del` `is_del` tinyint NOT NULL COMMENT '是否删除,1表示删除,0表示正常' DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `posts` CHANGE `is_del` `is_del` tinyint NOT NULL COMMENT '是否删除,1表示删除,0表示正常' DEFAULT '0'");
        await queryRunner.query("DROP INDEX `IDX_57391e4ce9e8cabc47a8336717` ON `access`");
        await queryRunner.query("DROP INDEX `IDX_9ea9953cdc028452259b77dc8d` ON `access`");
        await queryRunner.query("DROP TABLE `access`");
    }

}
