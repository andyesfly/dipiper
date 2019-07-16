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
    },
    stock_board:{
        url:"http://quote.eastmoney.com/center/sidemenu.json"
    },
    stock_boardele:{
        url:"http://45.push2.eastmoney.com/api/qt/clist/get?cb=jQuery1124016023132684011943_1563018432449&pn=1&pz=500&po=1&np=1&ut=bd1d9ddb04089700cf9c27f6f7426281&fltt=2&invt=2&fid=f3&fs=b:{}&fields=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152&_=1563018432450"
    },
    stock_boardk:{
        url:"http://push2his.eastmoney.com/api/qt/stock/kline/get?cb=jQuery172003776164541116689_1563019663413&secid=90.{0}&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58&klt={1}&fqt=0&beg=19900101&end={2}&_=1563019674093",
        lt:{
            day : 101,
            week: 102,
            month:103
        }
    }
}

module.exports = data_source;