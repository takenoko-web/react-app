import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../components/Home";
import { NotFound } from "../components/NotFound";
import { Page1 } from "../components/Page1";
import { Page1A } from "../components/Page1A";
import { Page1B } from "../components/Page1B";
import { Page2 } from "../components/Page2";
import { Query } from "../components/Query";
import { UrlParamater } from "../components/URLParamater";
export const Router = () => {
    /**
     * 以前は下のように入れ子でかけたが、今は不可
     * <Route path={'page1'} element={<Page1 />} >
     *    <Route path={'A'} element={<Page1A />} />
     *    <Route path={'B'} element={<Page1B />} />
     * </Route>
     * この書き方だと、page1/Aとやってもpage1がヒットしてその子は出力されない
     * そのため 下のようにRouteで囲って共通部分をpathに渡して、親はindex={true}として入れ子構造にしてかく
     */
    return(
        <>
            <BrowserRouter>
                <Routes>
                <Route path={''} element={<Home />} />
                <Route path={'page1'} >
                    <Route index={true} element={<Page1 />} />
                    <Route path={'A'} element={<Page1A />} />
                    <Route path={'B'} element={<Page1B />} />
                </Route>
                <Route path={'page2'} >
                    <Route index={true} element={<Page2 />} />
                    <Route path={':paramater'} element={<UrlParamater />} />
                </Route>
                <Route path={'query'} element={<Query />} />
                <Route path={`*`} element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}