import { useParams } from "react-router-dom";
import { useState } from "react";
import "./ItemDetail.css";

// Import images
import image1 from "./images/item1.jpg";
import image2 from "./images/item2.jpg";
import image3 from "./images/item3.jpg";
import image4 from "./images/item4.jpg";
import image5 from "./images/item5.jpg";
import image6 from "./images/item6.jpg";
import image7 from "./images/item7.jpg";
import image8 from "./images/item8.jpg";

// Array of items to use for displaying details
const items = [
  {
    src: image1,
    alt: "すてきな物語を。こだわりのキッズコスチューム",
    additionalImages: [image1, image2, image3],
  },

  {
    src: image2,
    alt: "「Victor」キャラクターボイスも聴けるイヤホン",
    additionalImages: [image2, image3, image4],
  },
  {
    src: image3,
    alt: "2025年のスケジュール帳&カレンダーがたくさん",
    additionalImages: [image3, image4, image5],
  },
  {
    src: image4,
    alt: "柔らかボディで癒しを届けてくれるベイマックス",
    additionalImages: [image4, image5, image6],
  },
  {
    src: image5,
    alt: "可愛いミツバチコスチュームのプーさんがいっぱい",
    additionalImages: [image5, image6, image7],
  },
  {
    src: image6,
    alt: "FEILER (フェイラー)からプーさんデザインが登場",
    additionalImages: [image4, image5, image6],
  },
  {
    src: image7,
    alt: "おでかけのお供に！炭酸対応のドリンクボトルなど",
    additionalImages: [image7, image8, image1],
  },
  {
    src: image8,
    alt: "【告知】KEITAMARUYAMA",
    additionalImages: [image8, image5, image6],
  },
];

const ItemDetail = () => {
  const { id } = useParams<{ id: string }>();
  const itemIndex = id ? parseInt(id) : -1;
  const item = items[itemIndex];
  const [mainImage, setMainImage] = useState(item.src);
  const [itemCount, setItemCount] = useState(1);

  if (!item) {
    return <div>Item not found.</div>;
  }

  const addToCart = () => {
    console.log(`Added ${itemCount} of ${item.alt} to cart.`);
  };

  return (
    <div className="item-detail">
      <div className="left-column">
        <div className="additional-images">
          {item.additionalImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Additional ${index}`}
              className="thumbnail"
              onClick={() => setMainImage(image)}
            />
          ))}
        </div>
      </div>
      <div className="middle-column">
        <img src={mainImage} alt={item.alt} className="item-detail-image" />
      </div>
      <div className="right-column">
        <h1>{item.alt}</h1>
        <p>商品詳細: {item.alt}</p>
        <div className="item-count-controls">
          <span>数量:</span>
          <button onClick={() => setItemCount(Math.max(itemCount - 1, 1))}>
            -
          </button>
          <span>{itemCount}</span>
          <button onClick={() => setItemCount(itemCount + 1)}>+</button>
        </div>
        <button onClick={addToCart} className="add-to-cart-button">
          カートに入れる
        </button>
        <div className="action-tabs">
          <div className="tab">
            <i className="fas fa-heart"></i>
            <span>お気に入りに追加</span>
          </div>
          <div className="tab">
            <i className="fas fa-map-marker-alt"></i>
            <span>店舗の在庫を確認</span>
          </div>
          <div className="tab">
            <i className="fas fa-share-alt"></i>
            <span>シェアする</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
