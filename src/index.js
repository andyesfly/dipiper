require('events').EventEmitter.defaultMaxListeners = 0
module.exports = dip={
    stock:{
        index:require("./stock/index"),
        symbols:require("./stock/symbols"),
        trading:require("./stock/trading")
    }
}
