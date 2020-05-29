// const { nav, sideBar } = require("vuepress-bar")();
const autobar_options = {
    stripNumbers: true,
    maxLevel: 2,
    navPrefix: "nav",
    skipEmptySidebar: true,
    skipEmptyNavbar: true,
    multipleSideBar: false,
    setHomepage: "hide",
    pinyinNav: true
};

module.exports = {
    // base: "/dipiper/",
    title: "dipiper",
    description: "一个基于 nodejs 的开源的财经数据接口包",
    head: [
        ["link", { rel: "icon", href: `./favicon.ico` }],
        ["script", { type: "text/javascript", src: "/js/baidutongji.js" }],
        ["script", { type: "text/javascript", src: "/js/baidupush.js" }]
    ],
    dest: "./docs/.vuepress/dist",
    plugins: ["@vuepress/back-to-top", "permalink-pinyin", "rpurl", ["autobar", autobar_options]],
    theme: "antdocs",
    themeConfig: {
        ads: {
            style: 3,
            title: "赞助商",
            btnText: "成为赞助商",
            msgTitle: "成为赞助商",
            msgText: "如果您有品牌推广、活动推广、招聘推广、社区合作等需求，欢迎联系我们，成为赞助商。您的广告将出现在 dipiper 文档侧边栏等页面。",
            msgOkText: "确定"
        },
        logo: "logo.png",
        modePicker: false,
        nav: [
            { text: "首页", link: "/" },
            { text: "文档", link: "/zhi-nan/" }
        ],
        displayAllHeaders: true,
        record: "滇ICP备16007768号",
        recordLink: "http://www.beian.miit.gov.cn",
        repo: "https://github.com/andyesfly/dipiper",
        repoLabel: "My Github",
        startYear: "2018"
    }
};
