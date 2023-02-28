import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image src={"/AIO.png"} width={"50"} height={"50"} alt="logo" />
    </div>
  );
};

export default Logo;
