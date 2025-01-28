import { Link } from "react-router-dom";
import "./ItemList.css";

// Import images
import image1 from "./images/item1.jpg";
import image2 from "./images/item2.jpg";
import image3 from "./images/item3.jpg";
import image4 from "./images/item4.jpg";
import image5 from "./images/item5.jpg";
import image6 from "./images/item6.jpg";
import image7 from "./images/item7.jpg";
import image8 from "./images/item8.jpg";

const items = [
  {
    src: image1,
    alt: "すてきな物語を。こだわりのキッズコスチューム",
    price: 1200,
  },
  {
    src: image2,
    alt: "「Victor」キャラクターボイスも聴けるイヤホン",
    price: 1300,
  },
  {
    src: image3,
    alt: "2025年のスケジュール帳&カレンダーがたくさん",
    price: 1400,
  },
  {
    src: image4,
    alt: "柔らかボディで癒しを届けてくれるベイマックス",
    price: 1500,
  },
  {
    src: image5,
    alt: "可愛いミツバチコスチュームのプーさんがいっぱい",
    price: 1600,
  },
  {
    src: image6,
    alt: "FEILER (フェイラー)からプーさんデザインが登場",
    price: 1700,
  },
  {
    src: image7,
    alt: "おでかけのお供に！炭酸対応のドリンクボトルなど",
    price: 1800,
  },
  { src: image8, alt: "【告知】KEITAMARUYAMA", price: 2000 },
];

const ItemList = () => {
  return (
    <div className="item-list">
      {items.map((item, index) => (
        <Link to={`/item/${index}`} key={index} className="item">
          <img src={item.src} alt={item.alt} className="item-image" />
          <div className="item-description">{item.alt}</div>
          <div className="item-price">
            {item.price?.toLocaleString()}円
          </div>{" "}
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
