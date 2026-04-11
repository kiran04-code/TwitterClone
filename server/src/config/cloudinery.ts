import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dltg47wml",
  api_key: process.env.CLOUDINERY_ASSIGNED_API_KEY_VALUE,
  api_secret: process.env.CLOUDINERY_HIGH_ENTROPY_VALUE,
  secure: true,
});

export default cloudinary;


