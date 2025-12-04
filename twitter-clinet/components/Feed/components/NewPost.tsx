import { useCurrentUsert } from '@/hooks/user'
import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import { FaEarthAmericas } from "react-icons/fa6";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { TbCalendarTime } from "react-icons/tb";
import { FaFaceSmileWink } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import toast from 'react-hot-toast';
import { CreateTweets } from '@/hooks/Tweets';
const NewPost = () => {
    const { user } = useCurrentUsert()
    const [images, setImage] = useState<string | null>();
    const [images1, setImage1] = useState<string | null>();
    const toBase64 = (file: File): Promise<string> =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
        });

    const handleSelectImage = useCallback(() => {
        const input = document.createElement("input")
        input.setAttribute("type", "file")
        input.setAttribute("accept", "image/*")
        input.click()
        input.onchange = async () => {
            const file = input.files?.[0];
            if (!file) return;
            const base64 = await toBase64(file);
            setImage1(base64); // now this is valid
            if (file) {
                const imageURL = URL.createObjectURL(file);
                setImage(imageURL);
                console.log("Image URL:", imageURL);
            }
        };
    }, [])
    const { mutate } = CreateTweets();
    const [content, setContent] = useState("");
    const handlecreateTweet = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("TextContent:", content, "image:", images1)
        try {
            e.preventDefault();
            if (!content) {
                return toast.error(" First Write the Content for Tweet")
            }
            else {
                mutate({ textContent: content, imageUrl: images1 })
                toast.success("Post created sucessfull")
                setImage1("")
                setContent("")
            }

        } catch (error) {
            toast.error("Error happed by the some server issues")
            console.log(error)
        }

    }
    return (
        <div className='py-5 border-gray-500 border-b-2'>
            <div className='px-4 py-2 '>
                <div className="flex items-center gap-3">

                    <div className="rounded-full w-10 h-10 flex items-center justify-center font-bold text-black">
                        {user && user.profileImage && <Image
                            src={user?.profileImage || ""}
                            width={250}
                            height={250}
                            alt="Profile Image"
                            className='rounded-full  shadow-2xl'
                        />}
                    </div>

                    <div className="flex flex-col w-full">
                        <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={2} placeholder="what 's happening?" className='focus:outline-none placeholder:text-[18px]' />
                    </div>
                </div>
                {
                    images && <div className="flex justify-center overflow-hidden mt-1 ml-8 rounded-2xl w-[90%]">

                        <Image
                            src={images || "/placeholder.png"}
                            alt="preview"
                            width={250}
                            height={250}
                            className="object-cover w-full h-full "
                        />

                    </div>
                }
                <div className=' cursor-pointer text-blue-600 flex gap-1  items-center px-13 py-2'>
                    <FaEarthAmericas />   Everyone Can reply</div>
            </div>
            <div className='h-0.5 bg-gray-600 w-[90%] ml-8'></div>
            <div className='px-12 py-2  flex  gap-2  items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <button><CiImageOn onClick={handleSelectImage} className='text-blue-500 text-[25px]   cursor-pointer' /></button>
                    <button><MdOutlineGifBox className='text-blue-500 text-[25px]' /></button>
                    <button><TbCalendarTime className='text-blue-500 text-[25px]' /></button>
                    <button><FaFaceSmileWink className='text-blue-500 text-[22px]' /></button>
                </div>
                {
                    images && <div>
                        <RxCrossCircled onClick={() => setImage(null)} />
                        <Image
                            src={images || "/placeholder.png"}
                            alt=""
                            width={250}
                            height={250}
                            className="object-center w-12 h-12  rounded-2xl "
                        />
                    </div>
                }
                <div className='flex items-center justify-evenly gap-5'>
                    <button><CiCirclePlus className='text-blue-500 text-[25px]' /></button>
                    <button type='button' onClick={handlecreateTweet} className=' cursor-pointer bg-white p-2 px-4 rounded-full text-black font-bold'>post</button>
                </div>
            </div>
        </div>
    )
}

export default NewPost
