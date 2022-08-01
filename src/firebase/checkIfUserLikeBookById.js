import { db } from "./firebase"
import { getDocs, query, collection, where } from "firebase/firestore"

const checkIfUserLikeBookById = async (userId, bookId) => {
    let arr = [];
    const q = query(collection(db, "users"), where("id", "==", userId), where("likedBooks", "array-contains", bookId));
    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(doc => {
            arr.push(doc.data());
        });
        if (arr.length === 0) return false
        return true;
    }
    catch (err) {
        return err;
    }
}

export default checkIfUserLikeBookById;