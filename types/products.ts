


// export interface Product {
//   quantity: number
//   _id: string,
//   productName: string,
//   _type: "product",
//   image?: {
//        url: string
//        asset: {
//         _ref: string,
//         _type: "image"
//        }
//   }
//   price: number,
//   description: string,
//   slug: {
//     _type: 'slug',
//     current: string
//   },
// }


export interface Product {
  _id: string;
  productName: string;
  price: number;
  slug: { current: string };
  image: { url: string } | string; // Allow both object and string
  description: string;
  quantity?: number; // Optional quantity
}
