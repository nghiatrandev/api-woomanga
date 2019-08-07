
const puppeteer = require('puppeteer');

(async() => {
    // Khởi tạo trình duyệt
    const browser = await puppeteer.launch({
        // Ở đây mình set false để nó hiện thị UI => dễ debug hơn
        headless: false
    });
    // Tạo tab mới nè
    const page = await browser.newPage();
    // Đến với trang sản phẩm thôi
    await page.goto('https://world.tmall.com/item/543285442762.htm');
    // Chuẩn bị mảng để chứa 5 cái ảnh to kia nào
    let images = []
    // Đếm số ảnh
    const totalThumbnailEles = await page.evaluate(() => {
        // Nội dung trong callback của hàm evaluate sẽ được chạy trong môi trường trình duyệt chứ không phải là tại localhost của chúng ta
        // Trả về kết quả
        return document.querySelectorAll("#J_UlThumb>li").length
    })

    for (let i = 1; i <= totalThumbnailEles; i++) {
        // Fake sự kiện hover vào thumbnail
        await page.hover(`#J_UlThumb>li:nth-child(${i})`)
        // Đợi nó chút để cho nó load ảnh ra :D
        await page.waitFor(3000)
        // Lại chạy evaluate để lấy ảnh to ra nào
        let newImg = await page.evaluate(() => {
            return document.querySelector("#J_ImgBooth").getAttribute('src')
        })
        // Push it
        images.push(newImg)
    }

    // Hiển thị kết quả
    console.log(images)

    browser.close();
})();
