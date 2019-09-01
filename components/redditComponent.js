import React, { useState, useEffect  } from 'react';

const RedditComponent = () => {

    const [items, setItems] = useState([]);
    const [tag, setTag] = useState();
    const [resultQt, setResultQt] = useState("");

    useEffect(() => {
        
        const LoadData = async () => {
            setItems([]);
            setResultQt("Quantidade encontrada");

            fetch(`api/discussions/${tag}`)
            .then(res => res.json())
            .then(json => {
                setItems(json.data.children);
                setResultQt(`Quantidade encontrada para ${tag}`);
            })
            .catch(err => setItems([]))
        }

        LoadData();
    }, [tag]);

    return (
        <div>
            <h4 className="search">Digite uma palavra para procurar no Reddit (via API): <input type="text" onChange={ e => setTag(e.target.value)} >
                </input>
            </h4>
            <p><span className="result">{resultQt}: </span> {items.length}</p>
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
    )
}

export default RedditComponent