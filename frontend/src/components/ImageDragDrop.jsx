import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { useSelector } from "react-redux";

const fileTypes = ["JPG", "PNG", "GIF"];

function ImageDragDrop() {
  const [file, setFile] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const { userInfo } = useSelector((state) => state.auth);

  const handleChange = async (file) => {
    setFile(file);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('userId', userInfo._id);

    try {
      const response = await fetch('http://localhost:4000/uploadProfilePic', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log(data.message);

      // Assuming your server responds with the uploaded image data
      setUploadedImage(data.profileImage.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <>
      {uploadedImage && (
        <img
          src={`data:image/jpeg;base64,${Buffer.from(uploadedImage).toString('base64')}`}
          alt="Profile"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      )}
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
    </>
  );
}

export default ImageDragDrop;
