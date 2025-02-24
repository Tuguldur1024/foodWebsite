"use client";

import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="h-[545px] w-full bg-[#18BA51] flex flex-col  justify-center items-center grid-rows-5 -z-50"
      style={{
        backgroundImage: 'url("foodIcon.svg")',
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto text-center ">
        <div className="flex flex-col  justify-center items-center gap-7">
          <div className="flex items-center gap-2">
            <Image src="pine.svg" width={40} height={46} alt="icon" />
            <p className="text-xl font-bold text-white">Food Delivery</p>
          </div>
          <nav className="mt-8 flex justify-center space-x-4">
            <a href="Main Page" className="text-white hover:underline">
              Нүүр
            </a>
            <a href="Contact" className="text-white hover:underline">
              Холбоо барих
            </a>
            <a href="Food Menu" className="text-white hover:underline">
              Хоолны цэс
            </a>
            <a href="terms&service" className="text-white hover:underline">
              Үйлчилгээний нөхцөл
            </a>
            <a href="Delivery zones" className="text-white hover:underline">
              Хүргэлтийн бүс
            </a>
            <a href="Privacy&policy" className="text-white hover:underline">
              Нууцлалын бодлого
            </a>
          </nav>
          <div className=" flex justify-center space-x-4 items-center  ">
            <Image width={40} height={46} src="facebook.svg" alt="icon" />
            <Image width={40} height={46} src="insta.svg" alt="icon" />
            <Image width={40} height={46} src="twitter.svg" alt="icon" />
          </div>

          <div className="border-t border-white my-4 w-full">
            <p className="text-white"> 2024 Pinecone Foods LLC</p>
            <p className="text-white">Зохиогчийн эрх хуулиар хамгаалагдсан.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
