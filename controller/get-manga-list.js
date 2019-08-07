const puppeteer=require('puppeteer');
const fs = require('fs');
(async()=>{
const browser=await puppeteer.launch({headless:true});
const page=await browser.newPage();

await page.goto('https://mangakakalot.com/manga_list?type=latest&category=all&state=all&page=1');
const mangas = await page.evaluate(() => {
        let mangas = document.getElementsByClassName('list-truyen-item-wrap');
        mangas = [...mangas];
        let array = mangas.map(manga => ({
            title : manga.getElementsByTagName('a')[0].title,
            url : manga.getElementsByTagName('a')[0].href,
            img : manga.getElementsByTagName('img')[0].src,
            view : manga.getElementsByClassName('aye_icon')[0].innerHTML,
            decription : manga.getElementsByTagName('p')[0].innerHTML,
            lastChapter: manga.getElementsByTagName('a')[2].innerHTML,
        }));
        return array;
    });
    await browser.close();
})();