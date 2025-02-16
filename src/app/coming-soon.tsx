import Image from "next/image";
import Footer from "./_components/footer";

interface HeaderTextProps {
  children: React.ReactNode;
  size?: "text-5xl" | "text-3xl" | "text-xl"; // Union type for valid sizes
  weight?: "font-bold" | "font-normal"; // Union type for valid weights
}
const HeaderText: React.FC<HeaderTextProps> = ({
  children,
  size = "text-5xl",
  weight = "font-bold",
}) => {
  return (
    <div
      className={`${size} font-[family-name:var(--font-work-sans)] ${weight}`}
    >
      {children}
    </div>
  );
};

export default function ComingSoon() {
  return (
    <div className="flex min-h-screen w-full px-10 items-center justify-center bg-white">
      <main className="min-h-screen flex w-full pt-10 text-black flex-col">
        <div className="gap-7 flex flex-grow items-center justify-center flex-col">
          <HeaderText>CLOUD WILL BE BACK SOON!</HeaderText>
          <HeaderText size="text-xl" weight="font-normal">
            Cloud&apos;s Portfolio is currently being improved. Check back
            later.
          </HeaderText>
        </div>
        <div className="flex items-center justify-center opacity-80">
          <Image src="/clouds.svg" alt="Cloud icon" width={100} height={100} />
        </div>
        <Footer />
      </main>
    </div>
  );
}
