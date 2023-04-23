# **Fetch Bing Wallpaper**

Fetch Bing Wallpaper is a simple and lightweight Node.js module that allows you to retrieve the daily wallpaper from Bing. It fetches the wallpaper image, title, start date, and end date from Bing's Image Archive API.

## **Installation**

To install this package, run the following command:

```
npm install fetch-bing-wallpaper

```

## **Usage**

To use the fetchBingWallpaper function, first import the module:

```
const fetchBingWallpaper = require("fetch-bing-wallpaper");

```

Next, call the function with the desired options:

```
(async () => {
  try {
    const wallpapers = await fetchBingWallpaper({
      market: "en-US",
      count: 1,
      format: "js",
      idx: 0,
      n: 1,
    });

    console.log(wallpapers);
  } catch (error) {
    console.error(error);
  }
})();

```

## **Options**

The fetchBingWallpaper function accepts an optional options object with the following properties:

- **`market`**: (string) The market where the Bing Wallpaper should be fetched from (default: "en-US").
- **`count`**: (number) The number of wallpapers to fetch (default: 1).
- **`format`**: (string) The format of the response data (default: "js").
- **`idx`**: (number) The index of the wallpaper (default: 0).
- **`n`**: (number) The number of wallpapers to fetch, used for pagination (default: 1).

## **Returned Data**

The function returns an array of wallpaper objects with the following properties:

- **`url`**: (string) The URL of the wallpaper image.
- **`title`**: (string) The title of the wallpaper.
- **`startdate`**: (string) The start date of the wallpaper.
- **`enddate`**: (string) The end date of the wallpaper.

## **Error Handling**

In case of an error, the function will throw an error with a description of what went wrong. Make sure to use a try-catch block to handle errors properly.

## **License**

This module is licensed under the **[MIT License](https://opensource.org/licenses/MIT)**.
