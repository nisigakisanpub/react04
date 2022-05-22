import React, { FC } from "react";
//import { useParams, useLocation } from 'react-router-dom';
import TopHeader from "../components/topPage/topHeader.tsx";
import ImageItemList from "../components/resultPage/resultImageList.tsx";

// type RouterParams {
//   keyword: string
// }

const ResultPage: FC = () => {

    // // URL path や パラメータなど。JSのlocationと同じ
    // const location: Location = useLocation();
    // // URLのパスパラメータを取得。例えば、 /uses/2 なら、2の部分を取得
    // const params: Readonly<Partial<RouterParams>> = useParams<RouterParams>();
    // console.log(location);
    // console.log(params);

    return (
        <div>
            <TopHeader />
            <ImageItemList />
        </div>
    )
}

export default ResultPage;


