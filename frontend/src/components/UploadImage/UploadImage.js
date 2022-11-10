import { storage } from "./firebase";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

export const UploadImage = (image) => {
  const imageRef = ref(storage, `images/${image.name + v4()}`);
  return uploadBytes(imageRef, image).then((snapshot) => {
    return getDownloadURL(snapshot.ref);
  });
};

export const UploadProfileImage = (image) => {
  const imageRef = ref(storage, `imageprofile/${image.name + v4()}`);
  return uploadBytes(imageRef, image).then((snapshot) => {
    return getDownloadURL(snapshot.ref);
  });
};