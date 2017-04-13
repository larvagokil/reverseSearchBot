var privateSettings = require("./private.js");

var settings = {
  url: {
    sauceNao: "https://saucenao.com/search.php?",
    sauceNaoParams: {
      db: 999,
      output_type: 2,
      testmode: 1,
      numres: 5,
      minSimilarity : 50
    },
    pixiv_id: "http://www.pixiv.net/member_illust.php?mode=medium&illust_id=",
    danbooru_id: "https://danbooru.donmai.us/post/show/",
    gelbooru_id: "https://gelbooru.com/index.php?page=post&s=view&id=",
    sankaku_id: "https://chan.sankakucomplex.com/post/show/",
    "anime-pictures_id": "https://anime-pictures.net/pictures/view_post/",
    imdb_id: "https://www.imdb.com/title/",
    anidb_aid: "https://anidb.net/perl-bin/animedb.pl?show=anime&aid="
  },
  id_buttonName: {
    pixiv_id: "Pixiv",
    danbooru_id: "Danbooru",
    gelbooru_id: "Gelbooru",
    sankaku_id: "Sankaku",
    "anime-pictures_id": "Anime-Pictures",
    imdb_id: "IMDb",
    anidb_aid: "AniDB",
    share: "↗️Share",
    loading: "🍝",
    pageLink: "📃Source",
    picLink: "🖼️High res",

  },
  msg: {
    invalidUrl: "That doesn't look like a photo or a URL",
    invalidForm: "Invalid form. Please check if you sent a non-photo file or your photo is sent as file.",
    loading: "_Pouring some sauce on it..._",
    zeroResult: "No sauce found. _Maybe try butter instead?_",
    help: "Send me an image or an image URL to find your SauceRightNao.",
    tooManyRequests: "Too many requests. Please send one by one and take time between requests.",
    reachLimitation: "The request limitation has been reached. Please wait for a few minutes.",
    unknownError: "*Unknown error occured.* Please contact @dangou if this happens repeatedly.",
    invalidFileId: "_Invalid file id_",
    requestRating: "[★ Rate](https://telegram.me/storebot?start=reverseSearchBot)",
    keywordHelp: "Dont just click me like that. \n\nReply to a pic with /source or /sauce to find its source."
  },
  moduleSwitch: {
    report: {on: false, notify: false},
    flooder: {on: true, notify: true}
  },
  report: {
    condition: [
      "reconnect", "reconnected", "error"
    ],
    receiver_id: "YOU_SHOULD_OVERWRITE_WITH_YOUR_OWN_TELEGRAM_ID(NUM_TYPE)"
  },
  flooder: {
    msg: "DO NOT EDIT IN THIS PROPERTY. GOTO settings.msg.tooManyRequests",
    interval: 5,
    numMsgs: 10
  },
  reportToOwnerSwitch: {
    reportLimitsOfSaucenao: {on: false, notify: false},
    reportRequestError: {on: true, notify: true},
    reportFileUrl: {on: true, notify: false}
  },
  keywords: ["sauce", "/sauce", "#sauce", "source", "/source", "#source"],
  private: privateSettings,
  userAgents: [
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/600.7.12 (KHTML, like Gecko) Version/8.0.7 Safari/600.7.12",
  ]
};

settings.flooder.msg = settings.msg.tooManyRequests;
module.exports = settings;
