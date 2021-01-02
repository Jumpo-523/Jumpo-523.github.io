import React from "react"
import { Link } from "gatsby"
// import Header from "../components/header"
export default () => (
  <div style={{ color: `teal` }}>
    <Link to="/">Home</Link>
    {/* <Header headerText="Contact" /> */}
    

    <h1>Who am I ???</h1>
    <h2>自己紹介</h2>
  
    <ul>
      <li> - 東京の西で経済学を学び(2011-2017)</li>
      <li> - 会津若松でpythonエンジニアとして働きはじめ(2018-2019)</li>
      <li> - 千葉の実家に戻ってきてデータサイエンスをやっています。(2019-)</li>
    </ul>  
    <p>name:田久保　純平<br></br>age: 28歳</p>
    <h2>データベース</h2>
    <p>Job: データ分析<br></br>
        skill: Python, , etc...<br></br>
        hobby: 漫画をよく読みます。chess<br></br>
        </p>
    <h2>やりたい事</h2>
    <p>
        IoTプログラミング / Deep learning実装
    </p>
    <h2> 勉強したい事</h2>
        <p>
            GO言語：<a href="https://go-tour-jp.appspot.com/welcome/1">Goのチュートリアルが出来るsite</a>
        </p>
    <h2>link</h2>
    <p>
      <a href="https://twitter.com/j_takurou">twitter</a>
    </p>
    <p>
      <a href="https://github.com/Jumpo-523">github</a>
    </p>
    <p>
      <a href="https://qiita.com/j_takurou">qitta</a>
    </p>
    {/* <p><a src="rouge.pdf"></a></p> */}
 
  </div>
  )