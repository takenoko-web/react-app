import { useLocation } from "react-router-dom";

export const Query = () => {
    /**
     * useLocation()の中にはpathnameやkey,stateなどが入っている
     * その中にsearchというのがあり、そこにurlの?以降が入っている
     */
    const {search} = useLocation();
    //クエリパラメータに関する便利メソッドができる
    const query = new URLSearchParams(search)
    return (
        <>
            <div>idクエリ {query.get('id')}</div>
            <div>nameクエリ {query.get('name')}</div>
        </>
    );
};