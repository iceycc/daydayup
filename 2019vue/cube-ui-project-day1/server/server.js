const Koa = require('koa');
const Router = require('koa-router');
const router = new Router();
const app = new Koa();
const cors = require('koa2-cors');
app.use(cors());

// 分类
const category = require('./category');
router.get('/api/category', async ctx => {
    let categories = category.map(cat => ({
        text: cat.name,
        value: cat.id
    }));
    ctx.body = {
        code: 0,
        data: categories
    }
});

const slides = require('./slides');
router.get('/api/slides', async ctx => {
    ctx.body = {
        code: 0,
        data: slides
    }
});

router.get('/api/lessonList/:id', async ctx => {
    let id = ctx.params.id;
    let {
        size,
        offset
    } = ctx.query;
    size = parseInt(size);
    offset = parseInt(offset)
    let item = category.find(c => c.id == id); // 找到对应分类
    let result = []
    if (!item) {
        let list = category.reduce((memo, current) => {
            return memo.concat(current.children)
        }, []);
        result = list.slice(offset, offset + size);
    } else {
        result = item.children.slice(offset, offset + size);

    }
    ctx.body = {
        code: 0,
        data: {
            result,
            hasMore: result.length == size
        },
    }
    //  ctx.body = {
    //      code: 0,
    //      data: slides
    //  }
})
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);