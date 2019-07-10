const data_source={
    prefix:{
        sh:"sh",
        sz:"sz"
    },
    stock_list:{
        url:"http://vip.stock.finance.sina.com.cn/quotes_service/api/json_v2.php/Market_Center.getHQNodeData?page={}&num=200&sort=symbol&asc=1&node=hs_a&_s_r_a=init",
    },
    stock_daily_his:{
        url:"http://data.gtimg.cn/flashdata/hushen/daily/{0}/{1}.js"
    },
    stock_week_his:{
        url:"http://data.gtimg.cn/flashdata/hushen/weekly/{}.js"
    },
    stock_month_his:{
        url:"http://data.gtimg.cn/flashdata/hushen/monthly/{}.js"
    },
    stock_min:{
        url:"http://data.gtimg.cn/flashdata/hushen/minute/{}.js"
    },
    stock_issue:{
        url:"http://vip.stock.finance.sina.com.cn/corp/go.php/vISSUE_NewStock/stockid/{}.phtml"
    }
}

module.exports = data_source;