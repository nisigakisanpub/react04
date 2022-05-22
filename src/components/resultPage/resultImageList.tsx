import React, { FC, useState, useEffect } from "react";
import { TileDate } from "../../types/types";
import { useParams } from 'react-router-dom';

import { db, storage } from '../../firebase.ts';
import { getDocs,collection, query,where  } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";


type RouterParams = {
    keyword: string
}

const ImageItemList: FC = () => {

    const [data, setData] = useState<TileDate[]>([]);

    const params: Readonly<Partial<RouterParams>> = useParams<RouterParams>();
    const keyword = params.keyword;

    const getData = async (searchWord: string | undefined) => {
        console.log(searchWord);

        // const tileDataRef = db.collection("tileData");
        // const searchedData = tileDataRef.where("keyword", "array-contains", searchWord);
        // const snapShot = await searchedData.get();

        const tileDataRef = await collection(db, "tileData");
        const q = query(tileDataRef, where("keyword", "array-contains", searchWord));
//        const q = query(tileDataRef, where("keyword", "array-contains", "human"));
        const snapShot = await getDocs(q);

        snapShot.forEach((doc) => {
            console.log(`${doc.id}`);
            console.log(doc.data());
        });

        const temporaryData: TileDate[] = [];

        // tileDataRef.docs.map(doc => {
        //     temporaryData.push(doc.data());
        // })

        //snapShot.docs.forEach(doc => {
        for await (const doc of snapShot.docs) {
            const record = doc.data();
            var tileItem: TileDate = {
                image: record.image,
                keywords: record.keyword,
                title: record.title,
                public_url: "",
            };

            // getDownloadURL(ref(storage, record.image))
            //     .then((url) => {
            //         tileItem.public_url = url
            //     });
            tileItem.public_url = await getDownloadURL(ref(storage, record.image));

            temporaryData.push(tileItem);
        }

        setData(temporaryData);
    }

    useEffect(() => {
        getData(keyword);
    }, []);

    console.log(data);
    return (
        <div>
            {data.map((item: TileDate, idx: number) => {
                return (
                    <div key={idx}>
                        <img src={item.public_url} alt={item.title} />
                    </div>
                );
            })}
        </div>
    )
}

export default ImageItemList;
