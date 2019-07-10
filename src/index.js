require('events').EventEmitter.defaultMaxListeners = 0
module.exports = dip={
    stock:{
        symbols:require("./stock/symbols"),
        trading:require("./stock/trading")
    }
}
