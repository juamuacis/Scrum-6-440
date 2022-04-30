import ItemsList from '../Components/Items/ItemsList';
import React from 'react'
import { useState, useEffect } from 'react';


function Home () {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedItems, setLoadedItems] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        fetch('https://csuf-online-shop-default-rtdb.firebaseio.com/items.json'
        ).then((response) => {
            return response.json();
        }).then((data) => {
            const items = [];

            for(const key in data) {
                const item = {
                    id: key,
                    ...data[key]

                };
                items.push(item);
            }

            setIsLoading(false);
            setLoadedItems(items);
        });
    
    }, [ ]);

    if(isLoading){
        return(
            <section>
                <p>Loading...</p>
                </section>
            
        )
    }
    return (

        
        <section>
            <h1>Items For Sale</h1>
            <ItemsList items = {loadedItems}/>
        </section>
    )
}
export default Home