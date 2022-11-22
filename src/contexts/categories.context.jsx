import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js"; // pt upload lista produse in serer
// import SHOP_DATA from '../shop-data'; // pt upload lista produse in serer

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    // trigger pt upload lista produse in serer actioneaza la REFRESH in frontend
 /* useEffect(() => {
  addCollectionAndDocuments('categories', SHOP_DATA);
   }, [])  */        
   // trigger pt upload lista produse in serer actioneaza la REFRESH in frontend
   // activate only when changing products database aka categories

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }

        getCategoriesMap();
    }, []);

    const value = { categoriesMap };
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};