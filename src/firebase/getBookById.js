import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

const getBookById = async (id) => {
    const docRef = doc(db, "books", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        return {};
    }
}

export default getBookById;