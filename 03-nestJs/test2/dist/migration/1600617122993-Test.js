"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test1600617122993 = void 0;
class Test1600617122993 {
    constructor() {
        this.name = 'Test1600617122993';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `role` CHANGE `is_del` `is_del` tinyint NOT NULL COMMENT '是否删除，0为正常，1为不正常' DEFAULT 0");
        await queryRunner.query("ALTER TABLE `users` CHANGE `is_del` `is_del` tinyint NOT NULL COMMENT '是否已经删除,1已经删除，0正常' DEFAULT 0");
        await queryRunner.query("ALTER TABLE `posts` CHANGE `is_del` `is_del` tinyint NOT NULL COMMENT '是否被删除' DEFAULT 0");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `posts` CHANGE `is_del` `is_del` tinyint NOT NULL COMMENT '是否被删除' DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `users` CHANGE `is_del` `is_del` tinyint NOT NULL COMMENT '是否已经删除,1已经删除，0正常' DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `role` CHANGE `is_del` `is_del` tinyint NOT NULL COMMENT '是否删除，0为正常，1为不正常' DEFAULT '0'");
    }
}
exports.Test1600617122993 = Test1600617122993;
//# sourceMappingURL=1600617122993-Test.js.map