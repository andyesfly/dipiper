require('events').EventEmitter.defaultMaxListeners = 0
module.exports = dip={
    stock:{
        finance:require("./stock/finance"),
        index:require("./stock/index"),
        symbols:require("./stock/symbols"),
        trading:require("./stock/trading")
    }
}
