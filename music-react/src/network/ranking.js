import network from "./network";


// 左边列表的数据
export function getTopList() {
    return network({
        url: 'toplist',
    })
}

export function getLog() {
    return network({
        url: '/register/anonimous'
    })
}

// 右边的列表数据
export function getRankingList(id) {
    return network({
        // /playlist/track/all?id=24381616&limit=10&offset=1
        // method: 'POST',
        url: '/playlist/detail',
        params: {
            id: id,
            // csrf_token: 'fada24d733d13a9481d8fddb3b5602cd'
        }
    })
}
