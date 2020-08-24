const dip = require("../index");
const dbAdapter = require("../utils/DbAdapter");

module.exports = class FinanceDao {
    constructor() {
        let dap = new dbAdapter();
        this.dbContext = dap.context;
    }
};
