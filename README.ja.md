# **Bing 壁紙を取得**

Bing 壁紙を取得は、Bing の毎日の壁紙を取得できるシンプルで軽量な Node.js モジュールです。Bing の画像アーカイブ API から壁紙画像、タイトル、開始日、終了日を取得します。

## **インストール**

このパッケージをインストールするには、次のコマンドを実行します：

```
npm install fetch-bing-wallpaper

```

## **使い方**

fetchBingWallpaper 関数を使用するには、最初にモジュールをインポートします：

```
const fetchBingWallpaper = require("fetch-bing-wallpaper");

```

次に、必要なオプションで関数を呼び出します：

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

## **オプション**

fetchBingWallpaper 関数は、以下のプロパティを持つオプションオブジェクトを受け入れます：

- **`market`**：（文字列）Bing の壁紙を取得する市場（デフォルト："en-US"）。
- **`count`**：（数値）取得する壁紙の数（デフォルト：1）。
- **`format`**：（文字列）レスポンスデータの形式（デフォルト："js"）。
- **`idx`**：（数値）壁紙のインデックス（デフォルト：0）。
- **`n`**：（数値）取得する壁紙の数、ページングに使用されます（デフォルト：1）。

## **戻りデータ**

関数は、以下のプロパティを持つ壁紙オブジェクトの配列を返します：

- **`url`**：（文字列）壁紙画像の URL。
- **`title`**：（文字列）壁紙のタイトル。
- **`startdate`**：（文字列）壁紙の開始日。
- **`enddate`**：（文字列）壁紙の終了日。

## **エラー処理**

エラーが発生した場合、関数はエラーをスローし、何が間違っているかを説明します。エラーを適切に処理するために、try-catch ブロックを使用してください。

## **ライセンス**

このモジュールは、**[MIT ライセンス](https://opensource.org/licenses/MIT)**でライセンスされています。
