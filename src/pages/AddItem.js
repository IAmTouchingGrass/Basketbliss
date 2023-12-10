import React, { useState } from 'react';
import './AddItem.css';
import Dress1 from '../assets/dress1.jpg';
import Footer from '../components/Footer';

function AddItem() {
  const [variations, setVariations] = useState([]);

  const addVariation = () => {
    setVariations([...variations, { id: variations.length + 1, value: '' }]);
  };

  const removeVariation = (id) => {
    const updatedVariations = variations.filter((variation) => variation.id !== id);
    setVariations(updatedVariations);
  };

  return (
    <div className="additem">
      <h1>ADMIN PANEL</h1>
      <div className="main-container">
        <div className="additem-left">
          <h2>Post a Product:</h2>
          <div className="name-stocks">
            <div className="detail-container">
              <label>Product name:</label>
              <input type="text" />
            </div>
            <div className="detail-container">
              <label>Product stock:</label>
              <input type="number" />
            </div>
          </div>
          <div>
            <button className="addVariation" onClick={addVariation}>Add variation</button>
            <div className="variations">
              {variations.map((variation) => (
                <div key={variation.id} className="input-variation">
                  <label>Variation {variation.id}:</label>
                  <input
                    type="text"
                    value={variation.value}
                    onChange={(e) => {
                      const updatedVariations = variations.map((v) =>
                        v.id === variation.id ? { ...v, value: e.target.value } : v
                      );
                      setVariations(updatedVariations);
                    }}
                  />
                  <button className="variation-remove" onClick={() => removeVariation(variation.id)}>Remove</button>
                </div>
              ))}
            </div>
          </div>
          <div className="texarea-container">
            <div className="textarea">
              <label>Product Description:</label>
              <textarea></textarea>
            </div>
          </div>
          <div className="input-images">
            <h3>Insert images(Insert at least 1 picture 4 max)</h3>
            <input type="file" multiple/>
          </div>
          <button className="addProduct">Add product</button>
        </div>

        <div className="additem-right">
          <label>Product picture:</label>
          <img className="image-main" src={Dress1} />
          <div className="images-below">
            <img src={Dress1} />
            <img src={Dress1} />
            <img src={Dress1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddItem;