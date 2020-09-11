import React, { useEffect, useState, useReducer } from 'react';
import ReactDOM from 'react-dom';
function useAjax(url) {
    let [offset, setOffset] = useState(0);
    let [data, setData] = useState([]);
    function loadMore() {
        fetch(`${url}?offset=${offset}&limit=5`)
            .then(response => response.json())
            .then(pageData => {
                setData([...data, ...pageData]);
                setOffset(offset + pageData.length);
                console.log(offset);

            })
    }
    useEffect(loadMore, []);
    return [data, loadMore];
}
function App() {
    const [users, loadMore] = useAjax('http://localhost:8000/api/users');
    if (users === null) {
        return <div>loading....</div>
    }
    return (
        <>
            <ul>
                {
                    users.map((item, index) => <li key={index}>{item.id}:{item.name}</li>)
                }

            </ul>
            <button onClick={loadMore}>loadMore</button>
        </>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));