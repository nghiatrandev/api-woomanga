const express = require("express");
const router = express.Router();
const Category = require("../db/category-model");
const constrollers = require("../controller/controllers");
const Mangadex = require("mangadex-api");

router.get("/", (req, res, next) => {
  res.send("fadsfdsafsdfsdfdsaf");
});

router.get("/MangaList", (req, res, next) => {
  constrollers
    .getMangaList(req.query.page, req.query.genre)
    .then(data => {
      res.status(200).send(data);
      // console.log(data)
    })
    .catch(err => {
      message: err;
    });
});

router.get("/Genres", (req, res, next) => {
  return new Promise((resolve, reject) => {
    Category.find()
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });
});

router.get("/MangaDetail", (req, res, next) => {
  constrollers
    .getMangaById(req.query.id)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      message: err;
    });
});

router.get("/Chapter", (req, res, next) => {
  console.log(req.query.id + "    " + req.query.chapter);
  constrollers
    .getChapter(req.query.id, req.query.chapter)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      message: err;
    });
});

router.get("/Search", (req, res, next) => {
  constrollers
    .searchManga(req.query.keyWord)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      message: err;
    });
});

router.get("/dex-get-manga", (req, res, next) => {
  Mangadex.getManga(22723).then(({ manga, chapter }) => {
    console.log(manga.title, chapter.length);
    res.status(200).send(manga);
  });
});
router.get("/dex-get-chapter", (req, res, next) => {
  Mangadex.getChapter(8857).then(chapter => {
    console.log(chapter);
    res.status(200).send(chapter);
  });
});
router.get("/dex-search", (req, res, next) => {
  Mangadex.search("conan").then(response => {
    console.log(response);
    res.status(200).send(response);
  });
});

// Mangadex.getManga(22723).then(({ manga, chapter }) => {
//     console.log(manga.title, chapter.length)
// })

// Mangadex.getChapter(8857).then(chapter => {
//     console.log(chapter.title, chapter.volume, chapter.chapter)
// })

// Mangadex.search('conan').then(response => {
//     console.log(response.titles.length)
// })

module.exports = router;
