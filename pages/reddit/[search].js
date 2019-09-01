import React, { useState, useEffect  } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'

const Reddit = () => {

    const router = useRouter()
    const { search } = router.query;
    const [items, setItems] = useState([]);
    const [fetchFind, setFetchFind] = useState(true);
    const [searchProgress, setSearchProgress] = useState("Pesquisando...");

    useEffect(() => {
        
        const LoadData = async () => {
            
            fetch(`/api/discussions/${search}`)
            .then(res => res.json())
            .then(json => {
                if(fetchFind === true)
                    setItems(json.data.children);
                    setFetchFind(false);
                    setSearchProgress("");
                })
            .catch(err => {
                if(fetchFind === true){
                    setItems([]);
                    setSearchProgress("");
                }
            })
        }

        if(fetchFind){
            LoadData();
        }
    }, [items]);

    return <div>
        <Head>
        <title>Reddit: {search}</title>
        </Head>
        <h2>{searchProgress}</h2>
        <p><span className="result">Quantidade encontrada: </span> {items.length}</p>
        {items.map( item => 
            <div className="item">
                <h5>{item.data.title}</h5>
                <p>{item.data.selftext}</p>
            </div>
        )}

        <style jsx>{`
            .search {
                margin-left: 10px;
                border: 3px solid blue;
                border-radius: 8px;
                width: 450px;
                padding: 10px 0px 10px 20px;
                color: blue;
            }
            .result {
                margin-left: 15px;
                font-weight: bold;
            }
            .item {
                border: 3px solid blue;
                border-radius: 8px;
                background: lightblue;
                padding: 5px;
                margin: 10px 5px 20px 5px;
            }
        `}</style>
    </div>
}

export default Reddit