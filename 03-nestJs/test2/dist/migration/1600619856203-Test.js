"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test1600619856203 = void 0;
class Test1600619856203 {
    constructor() {
        this.name = 'Test1600619856203';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `role` CHANGE `is_del` `is_del` tinyint NOT NULL COMMENT '是否删除，0为正常，1为不正常' DEFAULT 0");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `password`");
        await queryRunner.query("ALTER TABLE `users` ADD `password` varchar(100) NOT NULL COMMENT '密码'");
        await queryRunner.query("ALTER TABLE `users` CHANGE `is_del` `is_del` tinyint NOT NULL COMMENT '是否已经删除,1已经删除，0正常' DEFAULT 0");
        await queryRunner.query("ALTER TABLE `posts` CHANGE `is_del` `is_del` tinyint NOT NULL COMMENT '是否被删除' DEFAULT 0");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `posts` CHANGE `is_del` `is_del` tinyint NOT NULL COMMENT '是否被删除' DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `users` CHANGE `is_del` `is_del` tinyint NOT NULL COMMENT '是否已经删除,1已经删除，0正常' DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `password`");
        await queryRunner.query("ALTER TABLE `users` ADD `password` varchar(255) NOT NULL COMMENT '密码'");
        await queryRunner.query("ALTER TABLE `role` CHANGE `is_del` `is_del` tinyint NOT NULL COMMENT '是否删除，0为正常，1为不正常' DEFAULT '0'");
    }
}
exports.Test1600619856203 = Test1600619856203;
//# sourceMappingURL=1600619856203-Test.js.map