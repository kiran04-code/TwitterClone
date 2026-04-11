import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dltg47wml",
  api_key: process.env.CLOUDINERY_ASSIGNED_API_KEY_VALUE,
  api_secret: "uMhmjknx9eGIgpyQdLa3VekNmPc",
  secure: true,
});

export default cloudinary;

