import { Router } from "./App/router/Router";

function App() {
/**
 * Atomic Design
 * コンポーネントをコンポーネントを5段階に分ける 例としてTwitterの場合
 * Atoms
 * 最も小さくそれ以上分解できない状態
 * 例）ボタン、テキストボックス、アイコンなど
 * Molecules
 * Atomの組み合わせで意味を持つデザインパーツ
 * 例）アイコン+メニュー名、プロフィール画像+テキストボックス、アイコンセットなど
 * Organisms
 * AtomやMoleculesの組み合わせ 単体である程度の意味を持つ要素群
 * ツイート入力エリア、サイドメニュー、１つのツイートエリアなど
 * Templates
 * ページのレイアウトのみを表現する要素（実際のデーエタは持たない）
 * 例）サイドメニュー、ツーとエリア、ロイックエリアなどのレイアウト情報
 * Pages
 * 最終的に表示される１画面
 * ページ遷移毎に表示する各画面
 */
  return (
    <>
      <Router/>
    </>
  );
}

export default App;
