import network from "./network";


// 左边列表的数据
export function getTopList() {
    return network({
        url: 'toplist',
    })
}

// 右边的列表数据
export function getRankingList(id) {
    return network({
        // /playlist/track/all?id=24381616&limit=10&offset=1
        url: '/playlist/detail',
        params: {
            id: id,
            csrf_token: 'aDWUDA_A8M4hHxoDb7ruSig4'
        }
    })
}

// 游客登陆
export function getAnonimousLogin() {
    return network({
        url: '/register/anonimous'
    })
}
