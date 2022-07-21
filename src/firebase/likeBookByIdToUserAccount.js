import { db } from "./firebase";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

const likeBookByIdToUserAccount = async (id, currentUserId) => {
    const currentUserRef = doc(db, "users", currentUserId);
    try {
        await updateDoc(currentUserRef, {
            likedBooks: arrayUnion(id)
        });
    } catch (err) {
        return err;
    }
}

export default likeBookByIdToUserAccount;