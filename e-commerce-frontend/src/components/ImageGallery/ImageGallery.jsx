import "./ImageGallery.css";
import imageOne from "../../assets/images/galleryImageOne.webp";
import imageTwo from "../../assets/images/galleryImageTwo.webp";
import imageThree from "../../assets/images/galleryImageThree.webp";
import imageFour from "../../assets/images/galleryImageFour.webp";
import imageFive from "../../assets/images/galleryImageFive.webp";
import imageSix from "../../assets/images/galleryImageSix.webp";
import imageSeven from "../../assets/images/galleryImageSeven.webp";
import imageEight from "../../assets/images/galleryImageEight.webp";
import imageNine from "../../assets/images/galleryImageNine.webp";
const ImageGallery = () => {
  return (
    <>
      <div className="imageGalleryWrapper">
        <h1 className="imageGalleryHeading">Image Gallery</h1>
        <div className="image-grid">
          <img src={imageOne} alt="Shelf setup" />
          <img src={imageTwo} alt="Workspace" />
          <img src={imageThree} alt="Dining space" />
          <img src={imageFour} alt="Bedroom setup" />
          <img src={imageFive} alt="Dining table" />
          <img src={imageSix} alt="Chair" />
          <img src={imageSeven} alt="Side table with camera" />
          <img src={imageEight} alt="Framed art" />
          <img src={imageNine} alt="Kitchen rack" />
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
