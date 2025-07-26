import React from 'react';

// uploadFileToFirebase.jsx
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import 'firebase/compat/storage'; // যদি error দেয় firebase version-এর কারণে
import auth from '../Authincation/Firebase.init.js/Firebase.init'; // ঠিক মতো path set করো


const uploadFileToFirebase = () => async (file) => {
    return new Promise((resolve, reject) => {
        const storage = getStorage();
        const storageRef = ref(storage, `user-photos/${Date.now()}-${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            null,
            (error) => reject(error),
            async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                resolve(downloadURL);
            }
        );
    });
};

export default uploadFileToFirebase;