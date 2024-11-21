
const images = [
  'https://png.pngtree.com/png-clipart/20201223/ourmid/pngtree-clothing-sweater-clothes-clothing-mens-clothing-spring-clothes-foreign-trade-tailor-png-image_2611494.jpg',
  'https://img.freepik.com/free-psd/running-shoes-sneakers-transparent-background_84443-1650.jpg?semt=ais_hybrid',
  'https://w7.pngwing.com/pngs/721/332/png-transparent-curved-screen-tv-refrigerator-water-dispenser-and-clothes-washer-home-appliance-icon-refrigerators-air-conditioners-washing-machines-household-appliances-electronics-household-gadget.png',
  'https://w7.pngwing.com/pngs/750/206/png-transparent-personal-care-lotion-hygiene-cosmetics-feminine-sanitary-supplies-soap-miscellaneous-food-cleaning-thumbnail.png',
  'https://e7.pngegg.com/pngimages/74/72/png-clipart-grocery-store-kabul-farms-supermarket-food-online-grocer-grocery-food-food-supermarket.png',
  'https://e7.pngegg.com/pngimages/460/226/png-clipart-incandescent-light-bulb-creativity-business-information-creative-thinking-light-bulb-text-lights-thumbnail.png',
  'https://png.pngtree.com/png-vector/20190120/ourmid/pngtree-isometric-electronic-devices-collection-png-image_324124.jpg'
];


export const categories = [
  {
    title: "Kiyim",
    image: images[0],
    description: "Clothing", // Optional description
  },
  {
    title: "Oyoq kiyimlar",
    image: images[1],
    description: "Footwear",
  },
  {
    title: "Uy uchun",
    image: images[2],
    description: "Home",
  },
  {
    title: "Gigiena va parvarish",
    image:
      images[3],
    description: "Hygiene & Care",
  },
  {
    title: "Oziq ovqat",
    image:
      images[4],
    description: "Food and groceries",
  },
  {
    title: "Ijodkorlik",
    image:
      images[5],
    description: "Creativity",
  },
  {
    title: "Elektronika",
    image:
      images[6],
    description: "Electronics",
  },
];


const proPics = [
  'https://reon.kz/upload/iblock/0fb/0fb818c241ea8e5371ab1acf3284bc64.png',
  'https://icon2.cleanpng.com/lnd/20240417/kg/transparent-camera-lens-black-iphone-11-pro-max-camera-extended661fa5684e92c0.77071282.webp',
  'https://www.citypng.com/public/uploads/preview/airpods-pro-2nd-generation-png-7040816946218451no0esezhy.png',
  'https://toppng.com/uploads/preview/apple-iphone-15-pro-max-natural-titanium-png-11695041051y3hjkvpdvc.png',
  'https://casegear.in/cdn/shop/files/2_b76caedc-8a26-4302-9bfb-43710ef2ed1d.png?v=1722138631&width=2000',
];

export const products = [
  {
      title: "Men's T-Shirt",
      image: proPics[0],
      description: "Comfortable cotton t-shirt, perfect for everyday wear.",
      price: 29.99,
      discount: 10,
      isNew: false,
      id: 1,
  },
  {
      title: "Sneakers",
      image: proPics[1],
      description: "Stylish sneakers, ideal for casual outings and workouts.",
      price: 89.99,
      // discount: 20,
      isNew: true,
      id: 2,
  },
  {
      title: "Smart TV",
      image: proPics[2],
      description: "4K Ultra HD Smart TV with HDR and voice control.",
      price: 599.99,
      // discount: 15,
      isNew: false,
      id: 3,
  },
  {
      title: "Skincare Set",
      image: proPics[3],
      description: "Natural skincare set for daily hydration and rejuvenation.",
      price: 49.99,
      discount: 5,
      isNew: false,
      id: 4,
  },
];