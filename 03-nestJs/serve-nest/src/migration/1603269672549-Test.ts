import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1603269672549 implements MigrationInterface {
    name = 'Test1603269672549'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT COMMENT '主键id', `username` varchar(50) NOT NULL COMMENT '用户名', `password` varchar(100) NOT NULL COMMENT '密码', `is_del` tinyint NOT NULL COMMENT '是否删除,1表示删除,0表示正常' DEFAULT 0, `created_at` timestamp(6) NOT NULL COMMENT '创建时间' DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL COMMENT '更新时间' DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_fe0bb3f6520ee0469504521e71` (`username`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_fe0bb3f6520ee0469504521e71` ON `users`");
        await queryRunner.query("DROP TABLE `users`");
    }

}
