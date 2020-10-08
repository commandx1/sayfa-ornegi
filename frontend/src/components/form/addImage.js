import React, { useState } from "react";
import "./form.scss";

const AddImage = ({ submitHandler }) => {
  const [file, setFile] = useState();
  const [newImage, setNewImage] = useState({
    author: "",
    url: "https://unsplash.com/photos/LNRyGwIJr5c",
    download_url: null,
    //width ve height özelliklerini kullanmadığım için yenisine eklememeyi tercih ettim.
  });

  const reset = () =>
    setNewImage({ ...newImage, author: "", download_url: null });

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2)
        setNewImage({ ...newImage, download_url: reader.result });
    };

    reader.readAsDataURL(e.target.files[0]);
    setFile(e.target.files[0].name);
  };

  return (
    <form
      className="add-image-form"
      onSubmit={(e) => {
        e.preventDefault();
        if (newImage.download_url) {
          reset();
          submitHandler(newImage);
        } else {
          alert("Lütfen resim yükleyiniz!");
        }
      }}
    >
      <div className="imgBx">
        {newImage.download_url ? (
          <img src={newImage.download_url} alt={file} />
        ) : (
          <p>Lütfen resim yükleyiniz.</p>
        )}
      </div>
      <input type="file" name="img" accept="image/*" onChange={imageHandler} />
      <input
        type="text"
        placeholder="please enter a name"
        required
        value={newImage.author}
        onChange={(e) => setNewImage({ ...newImage, author: e.target.value })}
      />
      <input
        type="text"
        placeholder="please enter the website link"
        required
        value={newImage.url}
        onChange={(e) => setNewImage({ ...newImage, url: e.target.value })}
      />
      <button type="submit">Gönder</button>
    </form>
  );
};

export default AddImage;
