const axios = require("axios");

async function fetchBingWallpaper(options = {}) {
  const {
    market = "en-US",
    count = 1,
    format = "js",
    idx = 0,
    n = 1,
  } = options;

  const url = `https://www.bing.com/HPImageArchive.aspx?format=${format}&idx=${idx}&n=${n}&mkt=${market}&count=${count}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    if (data && data.images && data.images.length > 0) {
      return data.images.map((image) => ({
        url: `https://www.bing.com${image.url}`,
        title: image.title,
        startdate: image.startdate,
        enddate: image.enddate,
      }));
    } else {
      throw new Error("No images found");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = fetchBingWallpaper;
