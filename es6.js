// 模块定义
module app {
    // 部分引入模块
    import log from 'foo';
    
    // 导出公共方法
    export function start (name) {
        log(name);
    };
}

// 引入模块
import 'app' as app;

app.start('hello es6');
