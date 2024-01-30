import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="relative p-3">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl z-10 relative mb-3">
          Vind en reageer als eerste op een huur woning.
        </h1>
        <p className="relative z-10">
          Ook opzoek naar een huurwoning? Ontvang het nieuwste woningaanbod van
          1.400+ huizensites direct via Whatsapp of mail, zodat je als eerste
          kunt reageren en bezichtigen!
        </p>
        <div className="bg-hero-image bg-cover top-0 left-0 opacity-20 h-full absolute w-full" />
      </div>
      <Link
        className="bg-[#FF8049] p-3 rounded-full relative z-10 m-auto mt-4 block text-white text-center font-semibold"
        href="/contact"
      >
        Neem contact op
      </Link>
    </>
  );
}
