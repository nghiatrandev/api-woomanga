const Mangadex = require("mangadex-api");

exports.mangadexGetManga = function(i) {
  /* http://api.acgmonster.com/comics/45863?sign=04d75e3819b4d539b5c928991371f446 */
  let options = BASE_URL + id + sign;
  return new Promise((resolve, reject) => {
    request(options, (err, res, body) => {
      if (err) return reject(new Error("Error link"));
      resolve(body);
    });
  });
};

Mangadex.getManga(22723).then(({ manga, chapter }) => {
  console.log(manga.title, chapter.length);
});

Mangadex.getChapter(8857).then(chapter => {
  console.log(chapter.title, chapter.volume, chapter.chapter);
});

Mangadex.search("senko").then(response => {
  console.log(response.titles.length);
});
