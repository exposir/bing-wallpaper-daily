# **获取必应壁纸**

获取必应壁纸是一个简单且轻量级的 Node.js 模块，可让您从必应检索每日壁纸。它从必应的图像存档 API 获取壁纸图像、标题、开始日期和结束日期。

## **安装**

要安装此软件包，请运行以下命令：

```
bashCopy code
npm install fetch-bing-wallpaper

```

## **使用方法**

要使用 fetchBingWallpaper 函数，请首先导入模块：

```
const fetchBingWallpaper = require("fetch-bing-wallpaper");

```

接下来，使用所需选项调用函数：

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

## **选项**

fetchBingWallpaper 函数接受一个可选的选项对象，其中包含以下属性：

- **`market`**：（字符串）获取必应壁纸的市场（默认值："en-US"）。
- **`count`**：（数字）要获取的壁纸数量（默认值：1）。
- **`format`**：（字符串）响应数据的格式（默认值："js"）。
- **`idx`**：（数字）壁纸的索引（默认值：0）。
- **`n`**：（数字）要获取的壁纸数量，用于分页（默认值：1）。

## **返回数据**

该函数返回带有以下属性的壁纸对象数组：

- **`url`**：（字符串）壁纸图像的 URL。
- **`title`**：（字符串）壁纸的标题。
- **`startdate`**：（字符串）壁纸的开始日期。
- **`enddate`**：（字符串）壁纸的结束日期。

## **错误处理**

如果发生错误，函数将抛出一个描述错误的错误。确保使用 try-catch 块正确处理错误。

## **许可证**

此模块在 **[MIT 许可证](https://opensource.org/licenses/MIT)** 下获得许可。
