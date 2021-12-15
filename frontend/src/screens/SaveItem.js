import { useState } from "react";

const SAVE = ({savedItem}, {handleSaveItem}) => {
    const setSavedItem = useState([]);

    savedItem = useState([]);
    function handleSaveItem (product) {
        const ItemExist = savedItem.find((item) => item.id === product.id);

        if (ItemExist) {
            setSavedItem(savedItem.map((item) =>
                item.id === product.id ?
                    { ...ItemExist, quantity: ItemExist.quantity + 1 }
                    : item)
            );
        }
        else {
            setSavedItem([...savedItem, { ...product, quantity: 1 }])
        }
    };
}

export default SAVE;