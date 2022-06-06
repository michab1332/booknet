import { db } from "./firebase"
import { getDocs, query, collection, where } from "firebase/firestore"

const getBooksByCategories = async (categories) => {
    let tab = [];
    const q = query(collection(db, "books"), where("categories", "array-contains-any", [...categories]));
    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(doc => {
            tab.push(doc.data());
        });
        return tab;
    }
    catch (err) {
        return err;
    }
}

export default getBooksByCategories;