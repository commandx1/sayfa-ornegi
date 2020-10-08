import React, { Fragment, useEffect, useState } from "react";
import useHttpClient from "../../hooks/useHttpClient";
import AddImage from "../form/addImage";
import Modal from "../modal/modal";
import "./content.scss";

const Content = () => {
  const { sendRequest, isLoading } = useHttpClient();
  const [films, setfilms] = useState([]);
  const [openModal, setopenModal] = useState(false);

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const res = await sendRequest(
          "https://picsum.photos/v2/list?page=1&limit=10"
        );
        console.log(res);
        setfilms(res);
      } catch (error) {}
    };
    fetchDatas();
  }, [sendRequest]);

  const submitHandler = (newImage) => {
    setfilms([...films, newImage]);
    modalCloseHandler();
  };

  const modalCloseHandler = () => setopenModal(false);

  return (
    <Fragment>
      <p className="add-new-image">
        Yeni fotoğraf eklemek için
        <span onClick={() => setopenModal(true)}> tıklayınız</span>.
      </p>
      <div className="content-wrapper">
        {!isLoading &&
          films.length > 0 &&
          films.map((film) => (
            <div className="content-card" key={film.id}>
              <div className="imgBox">
                <img src={film.download_url} alt={film.author} />
              </div>
              <div className="card-description">
                <h2>
                  by {film.author} <br />
                  <a href={film.url} target="_blank">
                    Sitede Gör
                  </a>
                </h2>
              </div>
            </div>
          ))}
      </div>
      <Modal open={openModal} onClose={modalCloseHandler}>
        <AddImage submitHandler={submitHandler} />
      </Modal>
    </Fragment>
  );
};

export default Content;
