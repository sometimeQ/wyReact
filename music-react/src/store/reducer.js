import { combineReducers } from "redux-immutable";


// 发现
import { reducer as recomendReducer } from '@/pages/discover/sub-cpns/recommend/store';
import { reducer as rankingReducer } from '@/pages/discover/sub-cpns/ranking/store';
import { reducer as songlistReducer } from '@/pages/discover/sub-cpns/songs/store';
import { reducer as albumReducer } from '@/pages/discover/sub-cpns/album/store';
import { reducer as discoverDjradioReducer } from '@/pages/discover/sub-cpns/djradio/store';
import { reducer as themeHeaderReducer } from '@/components/app-header/store';
import { reducer as discoverAristReducer } from "@/pages/discover/sub-cpns/artist/store";

// playlist
import { reducer as playListReducer } from '@/pages/discover/sub-cpns/playlist/store';
// player
import { reducer as playerReducer } from '@/pages/discover/sub-cpns/player/store';

// 合并reducer.js
const cReducer = combineReducers({
    recommend: recomendReducer,
    ranking: rankingReducer,
    songlist: songlistReducer,
    album: albumReducer,
    themeHeader: themeHeaderReducer,
    playlist: playListReducer,
    discoverDjradio: discoverDjradioReducer,
    arist: discoverAristReducer,
    player: playerReducer
});


export default cReducer;

