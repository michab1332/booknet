import { db } from "./firebase";
import { doc, updateDoc, arrayRemove } from "firebase/firestore";

const removeBookFromLikedArrayById = async (id, currentUserId) => {
    const currentUserRef = doc(db, "users", currentUserId);
    try {
        await updateDoc(currentUserRef, {
            likedBooks: arrayRemove(id)
        });
    } catch (err) {
        return err;
    }
}

export default removeBookFromLikedArrayById;