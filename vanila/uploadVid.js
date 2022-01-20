        // UPLOAD THE VIDEO TO FIREBASE STORAGE
        import { addDoc, collection, serverTimestamp, updateDoc, doc } from '/firebase/firestore';
        import { ref, getDownloadURL, uploadString } from '/firebase/storage';

        let send = document.getElementById('btnSend');

        send.addEventListener('click', (ev)=>{
          // Function to send the data to firebase
          function uploadPost() {
            // Create a post and add to firestore 'posts' collection
            // Get the post ID for the newly created post
            // Upload the image to firebase storage with the post ID
            // Get the download URL for the image from the fb storage and update the orginal post with image

            const docRef = await addDoc(collection(db, 'videos'), {
                username: 'William',
                caption: 'Review for CDK',
                timestamp: serverTimestamp()
            })

            console.log('new doc added with id', docRef.id)

            const imageRef = ref(storage, `posts/${docRef.id}/image`)
            // await uploadString(imageRef, selectedFile, "data_url").then(async (snapshot) => {
            //   const donwloadURL = await getDownloadURL(imageRef)
            //   await updateDoc(doc(db, 'posts', docRef.id), {
            //     image: donwloadURL
            //   })
            // })
            }
        })