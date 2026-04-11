import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dltg47wml",
  api_key: "872274738955133",
  api_secret: process.env.CLOUDINERY_HIGH_ENTROPY_VALUE,
  secure: true,
});

export default cloudinary;

