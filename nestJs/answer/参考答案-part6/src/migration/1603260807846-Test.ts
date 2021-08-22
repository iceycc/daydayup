import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1603260807846 implements MigrationInterface {
    name = 'Test1603260807846'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `posts` (`id` int NOT NULL AUTO_INCREMENT COMMENT '主键id', `title` varchar(50) NOT NULL COMMENT '帖子标题', `content` varchar(100) NULL COMMENT '帖子内容', `user_id` int NOT NULL COMMENT '用户id', `is_del` tinyint NOT NULL COMMENT '是否删除,1表示删除,0表示正常' DEFAULT 0, `created_at` timestamp(6) NOT NULL COMMENT '创建时间' DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL COMMENT '更新时间' DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `role` (`id` int NOT NULL AUTO_INCREMENT COMMENT '主键id', `title` varchar(50) NOT NULL COMMENT '角色名称', `description` varchar(100) NULL COMMENT '角色描素', `is_del` tinyint NOT NULL COMMENT '是否删除,1表示删除,0表示正常' DEFAULT 0, `created_at` timestamp(6) NOT NULL COMMENT '创建时间' DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL COMMENT '更新时间' DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user_role` (`id` int NOT NULL AUTO_INCREMENT COMMENT '主键id', `user_id` int NOT NULL COMMENT '用户id', `role_id` int NOT NULL COMMENT '角色id', PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT COMMENT '主键id', `username` varchar(50) NOT NULL COMMENT '用户名', `password` varchar(100) NOT NULL COMMENT '密码', `is_del` tinyint NOT NULL COMMENT '是否删除,1表示删除,0表示正常' DEFAULT 0, `created_at` timestamp(6) NOT NULL COMMENT '创建时间' DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL COMMENT '更新时间' DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_fe0bb3f6520ee0469504521e71` (`username`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_fe0bb3f6520ee0469504521e71` ON `users`");
        await queryRunner.query("DROP TABLE `users`");
        await queryRunner.query("DROP TABLE `user_role`");
        await queryRunner.query("DROP TABLE `role`");
        await queryRunner.query("DROP TABLE `posts`");
    }

}
