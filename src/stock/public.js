const data_source={
    stock_list:{
        url:"http://vip.stock.finance.sina.com.cn/quotes_service/api/json_v2.php/Market_Center.getHQNodeData?page={}&num=200&sort=symbol&asc=1&node=hs_a&_s_r_a=init",
        prefix:{
            6:"sh",
            0:"sz"
        }
    },
    stock_daily_his:{
        url:"http://data.gtimg.cn/flashdata/hushen/daily/{0}/{1}.js"
    },
    stock_week_his:{
        url:"http://data.gtimg.cn/flashdata/hushen/weekly/{}.js"
    },
    stock_month_his:{
        url:"http://data.gtimg.cn/flashdata/hushen/monthly/{}.js"
    }
}

module.exports = data_source;