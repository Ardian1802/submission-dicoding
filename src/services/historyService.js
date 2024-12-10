import { Firestore } from "@google-cloud/firestore"
import 'dotenv/config'
const path = require('path');

// Path ke file service key (pastikan path ini sesuai dengan lokasi file service_key.json Anda)
const serviceKeyPath = path.resolve(__dirname, '../submissionmlgc-ardian-9f82c7c9feea.json');  // Mengarah ke file service_key.json

// Project ID dari Google Cloud Console
const projectId = 'submissionmlgc-ardian';  // Pastikan project ID sesuai dengan project Anda

// Membuat instance Firestore dengan kredensial dan project ID
const db = new Firestore({
  keyFilename: serviceKeyPath,
  projectId: projectId,
});

export const storeHistory = async ({ id, result, suggestion, createdAt }) => {
    try {
        const collection = db.collection('predictions')

        await collection.doc(id).set({
            id,
            result,
            suggestion,
            createdAt
        });

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export const getAllHistory = async () => {

    try {
        const collection = db.collection('predictions')

        const snapshot = await collection.get()

        const data = snapshot.docs.map(doc => ({
            id: doc.id,
            history: doc.data()
        }));

        return data

    } catch (error) {

    }

}