import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookMessenger, FaUserGroup, FaRegBookmark } from "react-icons/fa6";
import { CiSearch, CiCircleMore, CiUser } from "react-icons/ci";
import { MdNotificationsNone } from "react-icons/md";
import { useCurrentUsert } from "@/hooks/user";
import Image from "next/image";
import { useRouter } from "next/navigation";
interface TwitterButton {
  title: string;
  icon: React.ReactNode;
  link?:string
}

const LeftSideNav = () => {
  const AllIcons: TwitterButton[] = [
    { title: "Home", icon: <GoHome /> ,link:"/"},
    { title: "Explore", icon: <CiSearch /> , link:"/Explore"},
    { title: "Notification", icon: <MdNotificationsNone />,link:"/Notification" },
    { title: "Messages", icon: <FaFacebookMessenger /> ,link:"/Notification"  },
    { title: "Communities", icon: <FaUserGroup />,link:"/Notification"  },
    { title: "Bookmark", icon: <FaRegBookmark /> ,link:"/Notification" },
    { title: "Profile", icon: <CiUser />,link:"/Profile"  },
    { title: "More", icon: <CiCircleMore />,link:"/Notification"  },
  ];

  const user = useCurrentUsert();
  const [openMenu, setOpenMenu] = useState(false);

  const handleLogout = () => {
    window.localStorage.removeItem("__twitter_token");
    window.location.reload();
  };
 const routes = useRouter()
  return (
    <div
      className="
        col-span-2 
        md:col-span-3 
        px-3 
        py-4 
        h-screen 
        border-r border-gray-700
        flex flex-col 
        justify-between
      "
    >
      {/* Logo */}
      <div >
        <div className="text-[35px] w-fit hover:bg-gray-900 p-2 rounded-full transition cursor-pointer">
          <RiTwitterXLine />
        </div>

        {/* Main Menu */}
        <ul className="flex flex-col gap-2 mt-4" >
          {AllIcons.map((item) => (
            <li
              key={item.title}
              className="
                flex items-center gap-3 
                hover:bg-[#2d2b30] 
                cursor-pointer 
                w-fit 
                p-2 
                rounded-full 
                transition
              "
              onClick={()=>routes.push(`${item.link}`)}
            >
              <span className="text-[24px]">{item.icon}</span>

              {/* Hide text on mobile */}
              <span className="text-[20px] md:flex hidden">{item.title}</span>
            </li>
          ))}
        </ul>

        {/* Post Button */}
        <div className="pt-3">
          <button
            className="
              bg-white 
              text-black 
              font-bold 
              px-6 
              py-2 
              rounded-full 
              md:flex hidden
            "
          >
            Post
          </button>
        </div>
      </div>

      {/* User Section */}
      {user?.data?.getCurrentUser && (
        <div
          className="
            flex items-center gap-3 
            hover:bg-[#2d2b30] 
            p-2 
            rounded-full 
            transition 
            relative
          "
        >
          {/* Profile Image */}
          <div className="w-11 h-11 bg-gray-700 flex items-center justify-center rounded-full overflow-hidden">
            {user.data?.getCurrentUser?.profileImage && (
              <Image
                src={user.data?.getCurrentUser?.profileImage}
                width={45}
                height={45}
                alt="Profile Image"
                className="rounded-full"
              />
            )}
          </div>

          {/* Name + Email */}
          <div className="md:flex hidden flex-col cursor-pointer" onClick={()=>routes.push("/Profile")}>
            <h1 className="text-white font-semibold">
              {user.data?.getCurrentUser?.firstName}{" "}
              {user.data?.getCurrentUser?.LastName}
            </h1>
            <p className="text-gray-500 text-sm">@{user.data?.getCurrentUser?.email}</p>
          </div>

          {/* Menu Icon */}
          <CiCircleMore
            onClick={() => setOpenMenu(!openMenu)}
            className="text-2xl text-white cursor-pointer md:flex hidden"
          />

          {/* Logout Popup */}
          {openMenu && (
            <div
              className="
                absolute 
                bottom-14 
                left-0 
                bg-black 
                border 
                border-gray-500 
                rounded-2xl 
                p-3 
           
                shadow-xl
              "
            >
            
              <button
                onClick={handleLogout}
                className="
                  w-full 
                  mt-2 
                  text-white 
                  text-sm 
                  hover:bg-white 
                  hover:text-black 
                  p-2 
                  rounded-xl 
                  transition
                "
              >
                Log out @{user.data?.getCurrentUser?.email}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LeftSideNav;
