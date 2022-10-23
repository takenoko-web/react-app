import { Router } from "./router/Router";


function App() {
  /**
   * Browser RouterはReactプロジェクトの中で一度しか使えない
   * React RouteはBrowser Routerの中でしか使えない
   * React18からは完全一致のパスになる
   */
  return (
    <>
      <Router />
      <div className="App"></div>
    </>
  );
}

export default App;
