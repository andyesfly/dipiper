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
        [
            "link",
            {
                rel: "icon",
                href: `./favicon.ico`
            }
        ]
    ],
    dest: "./docs/.vuepress/dist",
    plugins: ["permalink-pinyin", "rpurl", ["autobar", autobar_options]],
    theme: "reco",
    themeConfig: {
        author: "嘟嘟爸爸",
        logo: "logo.png",
        mode: "light",
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
