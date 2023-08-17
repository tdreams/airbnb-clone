"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <>
      <Image
        alt="Logo"
        className="hidden lg:block cursor-pointer"
        height="100"
        width="100"
        src="/images/logo.png"
        onClick={() => router.push("/")}
      />

      <Image
        alt="Logo"
        className="hidden md:block lg:hidden cursor-pointer"
        height={20}
        width="29"
        src="/images/ABNB.png"
        onClick={() => router.push("/")}
      />
    </>
  );
};
export default Logo;
