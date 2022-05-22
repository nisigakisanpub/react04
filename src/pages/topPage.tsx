import React, { FC } from "react";
import TopMain from '../components/topPage/topMain.tsx';
import TopHeader from '../components/topPage/topHeader.tsx';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import ResultPage from "./resultPage.tsx";

const HeaderMain = () => {
    return (
        <>
            <TopHeader />
            <TopMain />
        </>
    );
}

const TopPage: FC = () => {
    return (
        <>
            {/* <h2>Reactコンポーネントだよ</h2> */}
            {/* <TopHeader />
            <TopMain /> */}

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HeaderMain />} />
                    <Route path="/search/:keyword" element={<ResultPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default TopPage;



