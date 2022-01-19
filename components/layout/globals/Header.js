import Image from "next/image";

const Header = () => {
  return (
    <p className="text-center">
      <Image
        src="/nep-icon.svg"
        alt="Neptune Mutual Logo"
        width={100}
        height={100}
      />
    </p>
  );
};

export default Header;
