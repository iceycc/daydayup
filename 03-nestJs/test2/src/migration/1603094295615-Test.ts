import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1603094295615 implements MigrationInterface {
    name = 'Test1603094295615'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `usersExtend` (`id` int NOT NULL AUTO_INCREMENT COMMENT '主键id', `moble` varchar(11) NULL COMMENT '手机号', `address` varchar(100) NULL COMMENT '地址', `gender` tinyint NOT NULL COMMENT '性别:0男，1女', `created_at` timestamp(6) NOT NULL COMMENT '创建时间' DEFAULT CURRENT_TIMESTAMP(6), `update_at` timestamp(6) NOT NULL COMMENT '更新时间' DEFAULT CURRENT_TIMESTAMP(6), `userId` int NULL COMMENT '主键id', UNIQUE INDEX `REL_e514dd0968cd2c2c3e7af15cf1` (`userId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `role` (`id` int NOT NULL AUTO_INCREMENT COMMENT '主键id', `rolename` varchar(100) NOT NULL COMMENT '角色名', `is_del` tinyint NOT NULL COMMENT '是否删除，0为正常，1为不正常' DEFAULT 0, `created_at` timestamp(6) NOT NULL COMMENT '创建时间' DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL COMMENT '更新时间' DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_43f9a8f39c96d77962f5e24ce7` (`rolename`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT COMMENT '主键id', `username` varchar(50) NOT NULL COMMENT '用户名', `password` varchar(100) NOT NULL COMMENT '密码', `email` varchar(50) NOT NULL COMMENT '邮箱', `is_del` tinyint NOT NULL COMMENT '是否已经删除,1已经删除，0正常' DEFAULT 0, `created_at` timestamp(6) NOT NULL COMMENT '创建时间' DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL COMMENT '更新时间' DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_fe0bb3f6520ee0469504521e71` (`username`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `posts` (`id` int NOT NULL AUTO_INCREMENT COMMENT '主键id', `title` varchar(255) NOT NULL COMMENT '标题', `content` varchar(255) NULL COMMENT '内容', `is_del` tinyint NOT NULL COMMENT '是否被删除' DEFAULT 0, `created_at` timestamp(6) NOT NULL COMMENT '创建时间' DEFAULT CURRENT_TIMESTAMP(6), `update_at` timestamp(6) NOT NULL COMMENT '更新时间' DEFAULT CURRENT_TIMESTAMP(6), `userId` int NULL COMMENT '主键id', PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user_role` (`roleId` int NOT NULL, `usersId` int NOT NULL, INDEX `IDX_dba55ed826ef26b5b22bd39409` (`roleId`), INDEX `IDX_0d65428bf51c2ce567216427d4` (`usersId`), PRIMARY KEY (`roleId`, `usersId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `usersExtend` ADD CONSTRAINT `FK_e514dd0968cd2c2c3e7af15cf15` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `posts` ADD CONSTRAINT `FK_ae05faaa55c866130abef6e1fee` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user_role` ADD CONSTRAINT `FK_dba55ed826ef26b5b22bd39409b` FOREIGN KEY (`roleId`) REFERENCES `role`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user_role` ADD CONSTRAINT `FK_0d65428bf51c2ce567216427d46` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_role` DROP FOREIGN KEY `FK_0d65428bf51c2ce567216427d46`");
        await queryRunner.query("ALTER TABLE `user_role` DROP FOREIGN KEY `FK_dba55ed826ef26b5b22bd39409b`");
        await queryRunner.query("ALTER TABLE `posts` DROP FOREIGN KEY `FK_ae05faaa55c866130abef6e1fee`");
        await queryRunner.query("ALTER TABLE `usersExtend` DROP FOREIGN KEY `FK_e514dd0968cd2c2c3e7af15cf15`");
        await queryRunner.query("DROP INDEX `IDX_0d65428bf51c2ce567216427d4` ON `user_role`");
        await queryRunner.query("DROP INDEX `IDX_dba55ed826ef26b5b22bd39409` ON `user_role`");
        await queryRunner.query("DROP TABLE `user_role`");
        await queryRunner.query("DROP TABLE `posts`");
        await queryRunner.query("DROP INDEX `IDX_fe0bb3f6520ee0469504521e71` ON `users`");
        await queryRunner.query("DROP TABLE `users`");
        await queryRunner.query("DROP INDEX `IDX_43f9a8f39c96d77962f5e24ce7` ON `role`");
        await queryRunner.query("DROP TABLE `role`");
        await queryRunner.query("DROP INDEX `REL_e514dd0968cd2c2c3e7af15cf1` ON `usersExtend`");
        await queryRunner.query("DROP TABLE `usersExtend`");
    }

}
