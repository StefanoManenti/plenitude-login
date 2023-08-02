export function getStartImage(path, size) {
    if (!path) {
        return false;
    }

    let img_path_pre = "https://eniplenitude.scene7.com/is/image/enigaseluce/";
    let img_path_post;

    if (size == "big") {
        img_path_post = ":3-4?wid=420&hei=586"; //era ":3-4?wid=420&hei=546"
    } else if (size == "small") {
        img_path_post = "?hei=300&wid=300&fmt=png-alpha";
    }

    let filename = getOnlyFileName(path);
    let newpath = img_path_pre + filename + img_path_post;

    return newpath;
}

export function getOnlyFileName(path) {
    path = path.split("\\").pop().split("/").pop(); // removes path
    let filename = path.indexOf('.') > -1 ? path.split(".").slice(0, -1).join(".") : path; // removes extension
    return filename;
}

export function removeHTMLTags(html) {
    let regX = /(<([^>]+)>)/gi;
    return (html)?html.replace(regX, "").replaceAll('&lt;br&gt;', '<br>'):html;
}

export function formatPrice(price) {
    price = parseFloat(price);
    return price.toFixed(4).replace(".", ",").replace(/[.,]*(000+)$/g, "");
}