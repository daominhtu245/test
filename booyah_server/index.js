const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public/booyah.live'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/v3/server-ts', (req, res) => {
    res.json({
        server_ts: new Date - 0
    });
});

app.post('/api/v3/auths/sessions', (req, res) => {
    res.json({
        server_ts: new Date - 0
    });
});

app.post('/api/v3/reports/client-heartbeats', (req, res) => {
    res.json({});
});

app.post('/api/v3/reports/client-events', (req, res) => {
    res.json({rcv_ts: 1632902286786, rsp_ts: 1632902286789});
});

app.get('/api/v3/content-languages/default', (req, res) => {
    res.json({
        "content_lang": "vi"
    });
});

app.get('/api/v3/users/:id/followers/count', (req, res) => {
    res.json({count: 0});
});

app.get('/api/v3/gifts', (req, res) => {
    res.json({"gift_list":[],"free_gift_list":[{"gift_id":126,"region":"VN","name":"Lửa trại","description":"Bonfire","picture_url":"https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Gift/891ab804-bc3a-45d0-bdf6-5b8444ebb6e2.png","coin_amount":200,"category":1,"create_time":1623983756}]});
});

app.get('/api/v3/playbacks', (req, res) => {
    res.json({"playback_list":[],"cursor":0});
});

app.get('/api/v3/channels/:id/gifts/top-gifters', (req, res) => {
    res.json({"top_gifter_list":[],"me":{"uid":0,"nickname":"","avatar":"","coin_amount":"0","rank":0}});
});

app.get('/api/v3/channels/:id/streams', (req, res) => {
    res.json({
        "game_build_id": 0,
        "snapshot": "https://resmambet-a.akamaihd.net/mambet-storage/Stream/Snapshot/90037022/90037022.jpg",
        "snapshot_webp": "https://resmambet-a.akamaihd.net/mambet-storage/Stream/Snapshot/90037022/90037022.webp",
        "stream_addr_list": [
        {
        "resolution": "720p",
        "url_path": "/hls/1400018/90037022.m3u8"
        }
        ],
        "mirror_list": [
        {
        "name": "kingsoft-vn.cdn.booyah.live",
        "url_domain": "https://kingsoft-vn.cdn.booyah.live"
        },
        {
        "name": "wangsu-vn.cdn.booyah.live",
        "url_domain": "https://wangsu-vn.cdn.booyah.live"
        },
        {
        "name": "conversant-vn.cdn.booyah.live",
        "url_domain": "https://conversant-vn.cdn.booyah.live"
        }
        ],
        "default_mirror": "kingsoft-vn.cdn.booyah.live",
        "viewer_count": 0,
        "viewer_count_info": [],
        "encoder": "obs-output module (libobs version 27.0.1)",
        "tag_uniq": "",
        "create_time": 1632899247,
        "update_time": 1632902576,
        "source_stream_url_path": "/hls/1400018/90037022.m3u8"
        });
});

app.get('/api/v3/chatrooms/:id/audiences/count', (req, res) => {
    res.json({
        "ccu": 0,
        "logged_in_ccu": 0,
        "viewer_count": 0
        });
});

app.get('/api/v3/game-builds', (req, res) => {
    res.json({
        "game_build_list": [
        {
        "game_build_id": 106,
        "game_id": 39,
        "name": "Clash Royale",
        "twitch_name": "Clash Royale",
        "lang": "en",
        "platform": 2,
        "picture": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/3de30c37-6ded-413a-873b-775c8cc3745d.jpg",
        "portrait": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/d197d7c6-d71d-4d06-9595-b0b8203b2e0e.jpg",
        "icon": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/39036f2d-8330-4f7c-ab45-409bfb174667.jpg",
        "url_scheme": "",
        "appstore_id": "",
        "package_name": "com.supercell.clashroyale",
        "highlight_avail": 0,
        "follower_count": 0,
        "viewer_count": 5
        },
        {
        "game_build_id": 36,
        "game_id": 10001,
        "name": "League of Legends",
        "twitch_name": "League of Legends",
        "lang": "en",
        "platform": 3,
        "picture": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/910a25c8-84b5-448b-8668-eec4d074c300.jpg",
        "portrait": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/1898344b-19d6-4ce4-9330-1fd59746dc0d.jpg",
        "icon": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/fa580ec4-2414-41ab-898b-d7986767bc2b.jpg",
        "url_scheme": "",
        "appstore_id": "",
        "package_name": "",
        "highlight_avail": 0,
        "follower_count": 0,
        "viewer_count": 358
        },
        {
        "game_build_id": 77,
        "game_id": 10010,
        "name": "Grand Theft Auto V",
        "twitch_name": "Grand Theft Auto V",
        "lang": "en",
        "platform": 3,
        "picture": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/be73a8d9-a44c-4213-98bf-b2763f3cab57.png",
        "portrait": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/56560127-c8a2-437d-923a-462125918683.jpg",
        "icon": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/179053ca-b33b-4267-a04c-9425632d3884.jpg",
        "url_scheme": "",
        "appstore_id": "",
        "package_name": "",
        "highlight_avail": 0,
        "follower_count": 0,
        "viewer_count": 10609
        },
        {
        "game_build_id": 100000,
        "game_id": 100000,
        "name": "IRL",
        "twitch_name": "",
        "lang": "en",
        "platform": 0,
        "picture": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/dca417e8-4a0c-43e0-8c36-7580110aea6a.png",
        "portrait": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/75e112e5-e93e-43a6-bf92-5020110b27c5.jpg",
        "icon": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/2bf31e88-feea-48a7-af32-5ec54a99c7f6.png",
        "url_scheme": "",
        "appstore_id": "",
        "package_name": "",
        "highlight_avail": 0,
        "follower_count": 0,
        "viewer_count": 3493
        },
        {
        "game_build_id": 14,
        "game_id": 5,
        "name": "Liên Quân Mobile",
        "twitch_name": " Arena of Valor",
        "lang": "vi",
        "platform": 2,
        "picture": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/c5d2d8f6-8d92-4964-8e4b-04257ae39152.jpg",
        "portrait": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/60c882cc-85c1-428d-b987-036e14f19c0b.jpg",
        "icon": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/317e1086-09d9-4573-b6e3-e2a3127750f3.jpg",
        "url_scheme": "",
        "appstore_id": "",
        "package_name": "com.garena.game.kgvn",
        "highlight_avail": 0,
        "follower_count": 0,
        "viewer_count": 6514
        },
        {
        "game_build_id": 76,
        "game_id": 10009,
        "name": "FIFA Online 4",
        "twitch_name": "FIFA Online 4",
        "lang": "en",
        "platform": 3,
        "picture": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/71037920-c64d-4c85-a52d-e0fe72bd0355.jpg",
        "portrait": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/8a1e11a5-edcd-46fb-a099-916b83282ca7.jpg",
        "icon": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/f7855466-4b26-4e99-8593-cc2b6ed483a8.jpg",
        "url_scheme": "",
        "appstore_id": "",
        "package_name": "",
        "highlight_avail": 0,
        "follower_count": 0,
        "viewer_count": 13
        },
        {
        "game_build_id": 2,
        "game_id": 1,
        "name": "Free Fire",
        "twitch_name": "Free Fire: Battlegrounds",
        "lang": "en",
        "platform": 2,
        "picture": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/e174847a-ab76-46ff-ac04-6dfec0f26fa9.png",
        "portrait": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/98fa81c6-a375-4252-a0ed-2b0ae3d6ab9a.jpg",
        "icon": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/dcf4245f-ce5d-4705-a3c3-0a438f7ac847.jpg",
        "url_scheme": "",
        "appstore_id": "",
        "package_name": "com.dts.freefireth",
        "highlight_avail": 1,
        "follower_count": 0,
        "viewer_count": 51782
        },
        {
        "game_build_id": 1,
        "game_id": 1,
        "name": "Free Fire",
        "twitch_name": "Free Fire: Battlegrounds",
        "lang": "en",
        "platform": 1,
        "picture": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/d372a57e-f103-44ce-ac35-8c174164ad0d.png",
        "portrait": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/cfd1c5dc-47a4-43d3-8f9b-96630b86b012.jpg",
        "icon": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/7a6fb117-d11e-4780-ab37-89113dbf7b38.jpg",
        "url_scheme": "freefire",
        "appstore_id": "1300146617",
        "package_name": "com.dts.freefireth",
        "highlight_avail": 1,
        "follower_count": 0,
        "viewer_count": 51782
        },
        {
        "game_build_id": 0,
        "game_id": 0,
        "name": "Others",
        "twitch_name": "",
        "lang": "en",
        "platform": 0,
        "picture": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/457c4977-5e88-495e-9cc2-0fce837f407f.png",
        "portrait": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/82f1f24f-22ad-4499-b962-cd865866e432.jpg",
        "icon": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/522cddb4-ae0a-41d3-99e1-03af5fb5a9b9.jpg",
        "url_scheme": "",
        "appstore_id": "",
        "package_name": "",
        "highlight_avail": 0,
        "follower_count": 0,
        "viewer_count": 5366
        },
        {
        "game_build_id": 100018,
        "game_id": 3,
        "name": "Fortnite",
        "twitch_name": "",
        "lang": "en",
        "platform": 3,
        "picture": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/4dcb26ed-aa8c-4d2a-ab18-322e6768ea65.jpg",
        "portrait": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/e84ab369-97a4-4f21-b998-b7d28de12773.jpg",
        "icon": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/c3cd1b84-17c2-4ae2-a9b4-ca56387640ed.jpg",
        "url_scheme": "",
        "appstore_id": "",
        "package_name": "",
        "highlight_avail": 0,
        "follower_count": 0,
        "viewer_count": 42
        },
        {
        "game_build_id": 5,
        "game_id": 3,
        "name": "Fortnite",
        "twitch_name": "Fortnite",
        "lang": "en",
        "platform": 1,
        "picture": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/8a8e7279-dd67-40d3-bde6-71012c4b2498.jpg",
        "portrait": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/832dd23e-7455-4d4b-ab42-b193883f2d1f.jpg",
        "icon": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/ce17bfd2-0e8d-4faa-a5fd-b9f5663a95f7.jpg",
        "url_scheme": "FortniteClient",
        "appstore_id": "1261357853",
        "package_name": "com.chairentertainment.Fortnite",
        "highlight_avail": 0,
        "follower_count": 0,
        "viewer_count": 42
        },
        {
        "game_build_id": 13,
        "game_id": 5,
        "name": "Liên Quân Mobile",
        "twitch_name": " Arena of Valor",
        "lang": "vi",
        "platform": 1,
        "picture": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/4bcadc82-f077-4e3b-8512-73c1f2eab307.jpg",
        "portrait": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/c00e5f87-1241-42f5-b289-98efa07e28e1.jpg",
        "icon": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/98201346-f24c-4c66-ba12-da0779ca97e6.jpg",
        "url_scheme": "gop100054",
        "appstore_id": "1150288115",
        "package_name": "com.garena.game.kgvn",
        "highlight_avail": 0,
        "follower_count": 0,
        "viewer_count": 6514
        },
        {
        "game_build_id": 105,
        "game_id": 39,
        "name": "Clash Royale",
        "twitch_name": "Clash Royale",
        "lang": "en",
        "platform": 1,
        "picture": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/73f9b653-7fd7-41ac-b533-38783c388ff6.jpg",
        "portrait": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/e093662c-3df9-4389-b735-dae839f215f7.jpg",
        "icon": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/5ba42506-7e8d-41cd-91ee-76f5451fbe61.jpg",
        "url_scheme": "clashroyale",
        "appstore_id": "1053012308",
        "package_name": "com.supercell.scroll",
        "highlight_avail": 0,
        "follower_count": 0,
        "viewer_count": 5
        },
        {
        "game_build_id": 6,
        "game_id": 3,
        "name": "Fortnite",
        "twitch_name": "Fortnite",
        "lang": "en",
        "platform": 2,
        "picture": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/f49351d5-4724-4de4-9be8-2e51ed3395bb.jpg",
        "portrait": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/99c224a5-f07c-4b8f-900f-9eda418dab7d.jpg",
        "icon": "https://resmambet-a.akamaihd.net/mambet-storage/Server/Admin/Game/8a2377e7-a6d5-44c8-bdc6-42e79fdaa6cc.jpg",
        "url_scheme": "",
        "appstore_id": "",
        "package_name": "com.epicgames.fortnite",
        "highlight_avail": 0,
        "follower_count": 0,
        "viewer_count": 42
        }
        ],
        "update_ts": 1632016778
        });
});

app.get('/api/v3/apps/configs', (req, res) => {
    res.json({
        "global": {
        "fb_approved_scopes": [
        "publish_video",
        "publish_to_groups",
        "pages_manage_ads",
        "pages_manage_posts",
        "pages_read_engagement",
        "pages_manage_engagement",
        "pages_manage_metadata",
        "pages_read_user_content"
        ],
        "stream_events_sample_rate": 0.1,
        "booyah_qrcode_image_url": "https://cdnmambet-a.akamaihd.net/booyah/images/qr-code-live.png",
        "mux": {
        "web": {
        "sample_rate_default": 0.08,
        "sample_rate_embed_player": 0.03
        },
        "ios": {
        "sample_rate_default": 0.08,
        "sample_rate_clip_feed": 0.03
        },
        "android": {
        "sample_rate_default": 0.08,
        "sample_rate_clip_feed": 0.03
        }
        },
        "streaming": {
        "android": {
        "use_v2": 1
        }
        },
        "video_editing": {
        "android": {
        "use_v2": 1,
        "use_v3": 1
        }
        },
        "lootdrop_configs": [
        {
        "game_id": 1,
        "login_url": "https://booyah.live/in-app/ffbinding"
        }
        ],
        "reserved_paths": [
        "about",
        "account",
        "admin",
        "api",
        "blog",
        "booyah",
        "booyahlive",
        "browse",
        "cashout",
        "channels",
        "clan",
        "clans",
        "clips",
        "cs",
        "customerservice",
        "daily_missions",
        "developers",
        "events",
        "facebook",
        "faq",
        "following",
        "forum",
        "freefire",
        "friends",
        "game",
        "games",
        "garena",
        "gm",
        "guidelines",
        "help",
        "highlights",
        "in-app",
        "login",
        "logout",
        "luckydraw",
        "mambet",
        "mobile",
        "mystudio",
        "news",
        "notifications",
        "official",
        "partner",
        "payment",
        "playback",
        "playbacks",
        "privacy",
        "program",
        "rankings",
        "security",
        "settings",
        "share",
        "standalone",
        "store",
        "streamer",
        "streamer_program",
        "streamers",
        "studio",
        "terms",
        "time_limited_events",
        "topup",
        "tutorial",
        "twitch",
        "twitter",
        "upload",
        "user",
        "users",
        "vk",
        "vod"
        ],
        "clan_manager_page_url": "https://booyah.live/in-app/clans/about",
        "assessment_request_interval_sec": 10,
        "voice_ws_addr": "ws://chat.booyah.live:9530",
        "voice_wss_addr": "wss://chat.booyah.live:9531"
        },
        "regional": {
        "region": "VN",
        "tabs": [
        "live",
        "clips",
        "follow",
        "studio"
        ],
        "disabled_features": [
        "custom_rtmp"
        ],
        "social_links": [
        {
        "platform": "Facebook",
        "link": "https://www.facebook.com/booyahvn/"
        },
        {
        "platform": "Instagram",
        "link": "https://www.instagram.com/booyahvn/"
        },
        {
        "platform": "Survey",
        "link": "https://docs.google.com/forms/d/1qIs06IKfy1IUluiJyUnet3oxp0XL9_BhDuBE4PuynLQ/edit"
        }
        ],
        "help_url": "https://booyah.live/in-app/faq",
        "help": {
        "url": "https://booyah.live/in-app/faq",
        "type": "booyah"
        },
        "clan_contact_email": "vncontact@booyah.live",
        "vn_cashcoin_tier_list": [
        30000,
        50000,
        80000,
        100000,
        150000,
        200000,
        250000,
        300000,
        350000,
        400000,
        450000
        ]
        },
        "ab_configs": {
        "clip_layout": {
        "tag": "clip_layout.waterfall",
        "value": "waterfall"
        },
        "tag_filter": {
        "tag": "tag_filter.with_filter",
        "value": "with_filter"
        }
        }
        });
});

// https://booyah.live/api/v3/channels/89403866
app.get('/api/v3/channels/90037022.html', (req, res) => {
    res.json({"channel":{"channel_id":90037022,"chatroom_id":89722306,"name":"Join my stream, powered by BOOYAH!","streaming_lang":"en","description":"","flag":16,"offline_pic":"","thumbnail":"","create_time":1632823856,"share_url":"https://booyah.live/channels/90037022","is_streaming":true,"is_verified_streamer":false,"is_content_creator":false,"is_enable_vod":false,"is_enable_download_vod":false,"is_enable_long_clip":false,"is_enable_lucky_draw":false,"is_enable_vote":true,"social_links":[]},"user":{"uid":90037022,"nickname":"Đào Minh Tú","nickname_next_update_time":2592000,"thumbnail":"https://resmambet-a.akamaihd.net/mambet-storage/Channel/Avatar/90037022/90037022.avatar","gender":2,"gender_next_update_time":1632823878,"age":25,"birthday":827280000,"birthday_next_update_time":1632823885,"platform":8,"following_count":0,"follower_count":0}});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
