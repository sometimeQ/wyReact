/**
 * 顶部数据
 */
export const headerLinks = [
    {
        title: "发现音乐",
        link: "/discover"
    },
    {
        title: "我的音乐",
        link: "/mine"
    },
    {
        title: "朋友",
        link: "/friend"
    },
    {
        title: "商城",
        link: "https://music.163.com/store/product"
    },
    {
        title: "音乐人",
        link: "https://music.163.com/nmusician/web/index#/"
    },
    {
        title: "下载客户端",
        link: "https://music.163.com/#/download"
    }
]

/**
 * 底部数据
 */
export const footerLinks = [
    {
        title: "服务条款",
        link: "https://st.music.163.com/official-terms/service"
    },
    {
        title: "隐私政策",
        link: "https://st.music.163.com/official-terms/privacy"
    },
    {
        title: "儿童隐私政策",
        link: "https://st.music.163.com/official-terms/children"
    },
    {
        title: "版权投诉指引",
        link: "https://music.163.com/st/staticdeal/complaints.html"
    },
    {
        title: "意见反馈",
        link: "#"
    }
]

/**
 * 底部图片
 */
export const footerImages = [
    {
        link: "https://music.163.com/st/userbasic#/auth"
    },
    {
        link: "https://music.163.com/recruit"
    },
    {
        link: "https://music.163.com/web/reward"
    },
    {
        link: "https://music.163.com/uservideo#/plan"
    }
]

/**
 * discover中的数据
 */
export const dicoverMenu = [
    {
        title: "推荐",
        link: "/discover/recommend"
    },
    {
        title: "排行榜",
        link: "/discover/ranking"
    },
    {
        title: "歌单",
        link: "/discover/songs"
    },
    {
        title: "主播电台",
        link: "/discover/djradio"
    },
    {
        title: "歌手",
        link: "/discover/artist"
    },
    {
        title: "新碟上架",
        link: "/discover/album"
    },
]

/**
 * 热门主播
 */
export const hotRadios = [
    {
        picUrl: "http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg",
        name: "陈立",
        position: "心理学家、美食家陈立教授",
        url: "/user/home?id=278438485"
    },
    {
        picUrl: "http://p1.music.126.net/y5-sM7tjnxnu_V9LWKgZlw==/7942872001461517.jpg",
        name: "DJ艳秋",
        position: "著名音乐节目主持人",
        url: "/user/home?id=91239965",
    },
    {
        picUrl: "http://p1.music.126.net/6cc6lgOfQTo6ovNnTHPyJg==/3427177769086282.jpg",
        name: "国家大剧院古典音乐频道",
        position: "国家大剧院古典音乐官方",
        url: "/user/home?id=324314596",
    },
    {
        picUrl: "http://p1.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg",
        name: "谢谢收听",
        position: "南京电台主持人王馨",
        url: "/user/home?id=1611157",
    },
    {
        picUrl: "http://p1.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg",
        name: "DJ晓苏",
        position: "独立DJ，CRI环球旅游广播特邀DJ",
        url: "/user/home?id=2313954"
    }
]

/**
 * 歌手侧边栏类别数据
 */
export const artistCategories = [
    {
        title: "推荐",
        area: -1,
        artists: [
            {
                name: "推荐歌手",
                type: 1,
                url: "/discover/artist",
                id: 0,
            },
            {
                name: "入驻歌手",
                type: 2,
                url: "/discover/artist/signed",
                dataPath: "/artist/list?cat=5001",
            },
        ],
    },
    {
        title: "华语",
        area: 7,
        artists: [
            {
                name: "华语男歌手",
                url: "/discover/artist?id=1001",
                type: 1,
            },
            {
                name: "华语女歌手",
                url: "/discover/artist?id=1002",
                type: 2,
            },
            {
                name: "华语组合/乐队",
                url: "/discover/artist?id=1003",
                type: 3,
            },
        ],
    },
    {
        title: "欧美",
        area: 96,
        artists: [
            {
                name: "欧美男歌手",
                url: "/discover/artist?id=2001",
                type: 1,
            },
            {
                name: "欧美女歌手",
                url: "/discover/artist?id=2002",
                type: 2,
            },
            {
                name: "欧美组合乐队",
                url: "/discover/artist?id=2003",
                type: 3,
            },
        ],
    },
    {
        title: "日本",
        area: 8,
        artists: [
            {
                name: "日本男歌手",
                url: "/discover/artist?id=6001",
                type: 1,
            },
            {
                name: "日本女歌手",
                url: "/discover/artist?id=6002",
                type: 2,
            },
            {
                name: "日本组合/乐队",
                url: "/discover/artist?id=6003",
                type: 3,
            },
        ],
    },
    {
        title: "韩国",
        area: 16,
        artists: [
            {
                name: "韩国男歌手",
                url: "/discover/artist?id=7001",
                type: 1,
            },
            {
                name: "韩国女歌手",
                url: "/discover/artist?id=7002",
                type: 2,
            },
            {
                name: "韩国组合/乐队",
                url: "/discover/artist?id=7003",
                type: 3,
            },
        ],
    },
    {
        title: "其他",
        area: 0,
        artists: [
            {
                name: "其他男歌手",
                url: "/discover/artist?id=4001",
                type: 1,
            },
            {
                name: "其他女歌手",
                url: "/discover/artist?id=4002",
                type: 2,
            },
            {
                name: "其他组合乐队",
                url: "/discover/artist?id=4003",
                type: 3,
            },
        ],
    },
];

/**
 * 国家编码列表
 */
export const countryCode = [
    ["China", "中国", "CN", 86],
    ["Hongkong", "中国香港", "HK", 852],
    ["Macao", "中国澳门", "MO", 853],
    ["Taiwan", "中国台湾", "TW", 886],
    ["Japan", "日本", "JP", 81],
    ["Korea", "韩国", "KR", 82],
    ["United Kingdom", "英国", "GB", 44],
    ["United States of America", "美国", "US", 1],
    ["Canada", "加拿大", "CA", 1],
    ["France", "法国", "FR", 33],
    ["Finland", "芬兰", "FI", 358],
    ["Germany", "德国", "DE", 49],
    ["Netherlands", "荷兰", "NL", 31],
    ["Italy", "意大利", "IT", 39],
    ["India", "印度", "IN", 91],
    ["Thailand", "泰国", "TH", 66],
    ["NewZealand", "新西兰", "NZ", 64],
    ["Portugal", "葡萄牙", "PT", 351],
    ["Russia", "俄罗斯", "RU", 7],
    ["Singapore", "新加坡", "SG", 65],
    ["Malaysia", "马来西亚", "MY", 60],
    ["Spain", "西班牙", "ES", 34],
    ["South Africa", "南非", "ZA", 27],
    ["Sweden", "瑞典", "SE", 46],
    ["Angola", "安哥拉", "AO", 244],
    ["Afghanistan", "阿富汗", "AF", 93],
    ["Albania", "阿尔巴尼亚", "AL", 355],
    ["Algeria", "阿尔及利亚", "DZ", 213],
    ["Andorra", "安道尔共和国", "AD", 376],
    ["Anguilla", "安圭拉岛", "AI", 1264],
    ["Antigua and Barbuda", "安提瓜和巴布达", "AG", 1268],
    ["Argentina", "阿根廷", "AR", 54],
    ["Armenia", "亚美尼亚", "AM", 374],
    ["Ascension", "阿森松", "AC", 247],
    ["Australia", "澳大利亚", "AU", 61],
    ["Austria", "奥地利", "AT", 43],
    ["Azerbaijan", "阿塞拜疆", "AZ", 994],
    ["Bahamas", "巴哈马", "BS", 1242],
    ["Bahrain", "巴林", "BH", 973],
    ["Bangladesh", "孟加拉国", "BD", 880],
    ["Barbados", "巴巴多斯", "BB", 1246],
    ["Belarus", "白俄罗斯", "BY", 375],
    ["Belgium", "比利时", "BE", 32],
    ["Belize", "伯利兹", "BZ", 501],
    ["Benin", "贝宁", "BJ", 229],
    ["BermudaIs.", "百慕大群岛", "BM", 1441],
    ["Bolivia", "玻利维亚", "BO", 591],
    ["Botswana", "博茨瓦纳", "BW", 267],
    ["Brazil", "巴西", "BR", 55],
    ["Brunei", "文莱", "BN", 673],
    ["Bulgaria", "保加利亚", "BG", 359],
    ["Burkina-faso", "布基纳法索", "BF", 226],
    ["Burma", "缅甸", "MM", 95],
    ["Burundi", "布隆迪", "BI", 257],
    ["Cameroon", "喀麦隆", "CM", 237],
    ["Cayman Is.", "开曼群岛", "KY", 1345],
    ["Central African Republic", "中非共和国", "CF", 236],
    ["Chad", "乍得", "TD", 235],
    ["Chile", "智利", "CL", 56],
    ["Colombia", "哥伦比亚", "CO", 57],
    ["Congo", "刚果", "CG", 242],
    ["Cook Is.", "库克群岛", "CK", 682],
    ["Costa Rica", "哥斯达黎加", "CR", 506],
    ["Cuba", "古巴", "CU", 53],
    ["Cyprus", "塞浦路斯", "CY", 357],
    ["Czech Republic", "捷克", "CZ", 420],
    ["Denmark", "丹麦", "DK", 45],
    ["Djibouti", "吉布提", "DJ", 253],
    ["Dominica Rep.", "多米尼加共和国", "DO", 1890],
    ["Ecuador", "厄瓜多尔", "EC", 593],
    ["Egypt", "埃及", "EG", 20],
    ["EISalvador", "萨尔瓦多", "SV", 503],
    ["Estonia", "爱沙尼亚", "EE", 372],
    ["Ethiopia", "埃塞俄比亚", "ET", 251],
    ["Fiji", "斐济", "FJ", 679],
    ["French Guiana", "法属圭亚那", "GF", 594],
    ["Gabon", "加蓬", "GA", 241],
    ["Gambia", "冈比亚", "GM", 220],
    ["Georgia", "格鲁吉亚", "GE", 995],
    ["Ghana", "加纳", "GH", 233],
    ["Gibraltar", "直布罗陀", "GI", 350],
    ["Greece", "希腊", "GR", 30],
    ["Grenada", "格林纳达", "GD", 1473],
    ["Guam", "关岛", "GU", 1671],
    ["Guatemala", "危地马拉", "GT", 502],
    ["Guinea", "几内亚", "GN", 224],
    ["Guyana", "圭亚那", "GY", 592],
    ["Haiti", "海地", "HT", 509],
    ["Honduras", "洪都拉斯", "HN", 504],
    ["Hungary", "匈牙利", "HU", 36],
    ["Iceland", "冰岛", "IS", 354],
    ["Indonesia", "印度尼西亚", "ID", 62],
    ["Iran", "伊朗", "IR", 98],
    ["Iraq", "伊拉克", "IQ", 964],
    ["Ireland", "爱尔兰", "IE", 353],
    ["Israel", "以色列", "IL", 972],
    ["IvoryCoast", "科特迪瓦", "CI", 225],
    ["Jamaica", "牙买加", "JM", 1876],
    ["Jordan", "约旦", "JO", 962],
    ["Kampuchea (Cambodia )", "柬埔寨", "KH", 855],
    ["Kazakstan", "哈萨克斯坦", "KZ", 7],
    ["Kenya", "肯尼亚", "KE", 254],
    ["Kuwait", "科威特", "KW", 965],
    ["Kyrgyzstan", "吉尔吉斯坦", "KG", 996],
    ["Laos", "老挝", "LA", 856],
    ["Latvia", "拉脱维亚", "LV", 371],
    ["Lebanon", "黎巴嫩", "LB", 961],
    ["Lesotho", "莱索托", "LS", 266],
    ["Liberia", "利比里亚", "LR", 231],
    ["Libya", "利比亚", "LY", 218],
    ["Liechtenstein", "列支敦士登", "LI", 423],
    ["Lithuania", "立陶宛", "LT", 370],
    ["Luxembourg", "卢森堡", "LU", 352],
    ["Madagascar", "马达加斯加", "MG", 261],
    ["Malawi", "马拉维", "MW", 265],
    ["Maldives", "马尔代夫", "MV", 960],
    ["Mali", "马里", "ML", 223],
    ["Malta", "马耳他", "MT", 356],
    ["Mariana Is", "马里亚那群岛", "MP", 1670],
    ["Martinique", "马提尼克", "MQ", 596],
    ["Mauritius", "毛里求斯", "MU", 230],
    ["Mexico", "墨西哥", "MX", 52],
    ["Republic of Moldova", "摩尔多瓦", "MD", 373],
    ["Monaco", "摩纳哥", "MC", 377],
    ["Mongolia", "蒙古", "MN", 976],
    ["Montserrat Is", "蒙特塞拉特岛", "MS", 1664],
    ["Morocco", "摩洛哥", "MA", 212],
    ["Mozambique", "莫桑比克", "MZ", 258],
    ["Namibia", "纳米比亚", "NA", 264],
    ["Nauru", "瑙鲁", "NR", 674],
    ["Nepal", "尼泊尔", "NP", 977],
    ["Netheriands Antilles", "荷属安的列斯", "AN", 599],
    ["Nicaragua", "尼加拉瓜", "NI", 505],
    ["Niger", "尼日尔", "NE", 227],
    ["Nigeria", "尼日利亚", "NG", 234],
    ["North Korea", "朝鲜", "KP", 850],
    ["Norway", "挪威", "NO", 47],
    ["Oman", "阿曼", "OM", 968],
    ["Pakistan", "巴基斯坦", "PK", 92],
    ["Panama", "巴拿马", "PA", 507],
    ["Papua New Cuinea", "巴布亚新几内亚", "PG", 675],
    ["Paraguay", "巴拉圭", "PY", 595],
    ["Peru", "秘鲁", "PE", 51],
    ["Philippines", "菲律宾", "PH", 63],
    ["Poland", "波兰", "PL", 48],
    ["French Polynesia", "法属玻利尼西亚", "PF", 689],
    ["PuertoRico", "波多黎各", "PR", 1787],
    ["Qatar", "卡塔尔", "QA", 974],
    ["Reunion", "留尼旺", "RE", 262],
    ["Romania", "罗马尼亚", "RO", 40],
    ["Saint Lueia", "圣卢西亚", "LC", 1758],
    ["Saint Vincent", "圣文森特岛", "VC", 1784],
    ["Samoa Eastern", "东萨摩亚(美)", "AS", 684],
    ["Samoa Western", "西萨摩亚", "WS", 685],
    ["San Marino", "圣马力诺", "SM", 378],
    ["Sao Tome and Principe", "圣多美和普林西比", "ST", 239],
    ["Saudi Arabia", "沙特阿拉伯", "SA", 966],
    ["Senegal", "塞内加尔", "SN", 221],
    ["Seychelles", "塞舌尔", "SC", 248],
    ["Sierra Leone", "塞拉利昂", "SL", 232],
    ["Slovakia", "斯洛伐克", "SK", 421],
    ["Slovenia", "斯洛文尼亚", "SI", 386],
    ["Solomon Is", "所罗门群岛", "SB", 677],
    ["Somali", "索马里", "SO", 252],
    ["Sri Lanka", "斯里兰卡", "LK", 94],
    ["St.Lucia", "圣卢西亚", "LC", 1758],
    ["St.Vincent", "圣文森特", "VC", 1784],
    ["Sudan", "苏丹", "SD", 249],
    ["Suriname", "苏里南", "SR", 597],
    ["Swaziland", "斯威士兰", "SZ", 268],
    ["Switzerland", "瑞士", "CH", 41],
    ["Syria", "叙利亚", "SY", 963],
    ["Tajikstan", "塔吉克斯坦", "TJ", 992],
    ["Tanzania", "坦桑尼亚", "TZ", 255],
    ["Togo", "多哥", "TG", 228],
    ["Tonga", "汤加", "TO", 676],
    ["Trinidad and Tobago", "特立尼达和多巴哥", "TT", 1868],
    ["Tunisia", "突尼斯", "TN", 216],
    ["Turkey", "土耳其", "TR", 90],
    ["Turkmenistan", "土库曼斯坦", "TM", 993],
    ["Uganda", "乌干达", "UG", 256],
    ["Ukraine", "乌克兰", "UA", 380],
    ["United Arab Emirates", "阿拉伯联合酋长国", "AE", 971],
    ["Uruguay", "乌拉圭", "UY", 598],
    ["Uzbekistan", "乌兹别克斯坦", "UZ", 998],
    ["Venezuela", "委内瑞拉", "VE", 58],
    ["Vietnam", "越南", "VN", 84],
    ["Yemen", "也门", "YE", 967],
    ["Yugoslavia", "南斯拉夫", "YU", 381],
    ["Zimbabwe", "津巴布韦", "ZW", 263],
    ["Zaire", "扎伊尔", "ZR", 243],
    ["Zambia", "赞比亚", "ZM", 260],
];
