import { db } from "./firebase"
import { getDocs, query, collection, where } from "firebase/firestore"

const getBooksById = async (ids) => {
    let tab = [];
    const q = query(collection(db, "books"), where("id", "in", [...ids]));
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

export default getBooksById;