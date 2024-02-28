import Image from "next/image";
import image from "../../public/notFound.jpg";

const notFound = () => {
  return (
    <>
      <Image
        src={image}
        alt="not-found"
        className="w-full h-[100vh] object-cover"
      />
    </>
  );
};

export default notFound;
