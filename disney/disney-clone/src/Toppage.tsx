import { useLocation } from "react-router-dom";
import "./TopPage.css";

import topImage from "./images/top_page_image.jpg";

const TopPage = () => {
  const location = useLocation(); // Get the current location (current route)

  // Only show the top image if the current route is NOT "/login" or "/signup"

  const showImage =
    location.pathname !== "/login" && location.pathname !== "/signup";

  return (
    <div className="top-page">
      {showImage && (
        <img src={topImage} alt="Top Page" className="top-page-image" />
      )}
    </div>
  );
};

export default TopPage;
