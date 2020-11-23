# 自分のブログをgatsbyで作成してみる。

# Customize it according to the following site.
- https://gotohayato.com/content/502/
- https://medium.com/eureka-engineering/how-gatsby-works-bec4349caa12


## deployすると何をgatsbyはやってくれるのか？
### 1. <font color="yellowgreen">success</font> open and validate gatsby-configs - 0.037s

### 2. <font color="yellowgreen">success</font> load plugins - 1.724s

### 3. <font color="yellowgreen">success</font> success onPreInit - 0.030s

- まずはgatsby-configs.jsを見てpluginsをロードしてくれると。ふんふん。




+ public dirに自分の挙げたmd fileがHTMLレンダリングされてindex.htmlとして保存されている。

+ graphQL APIで取得してきたデータをオブジェクトに格納して利用しているのは理解した。

+ hot reload時にgraphQLは実行されないのか、siteMetadataを更新しても、ブラウザ上では更新されなかった。


+ `position: relative; /* Fixed Sidebar (stay in place on scroll) */` side barをrelativeにすると、headerの下にきてしまう問題が解決しない、→CSSの理解不足

これ実装出来る様に頑張る。
https://azouaoui-med.github.io/react-pro-sidebar/