var events = require("events")

var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function connected() {
    console.log('连接成功。');

    // 触发 data_received 事件
    eventEmitter.emit('data_received',1111);
}
eventEmitter.on('data_received', function(dddd){
    console.log('数据接收成功。');
});

// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);;


eventEmitter.emit('connection');