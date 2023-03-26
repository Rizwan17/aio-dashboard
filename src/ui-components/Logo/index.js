import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href={`/`}>
        <Image src={"/AIO.png"} width={"50"} height={"50"} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
