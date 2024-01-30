import { Building2Icon, HomeIcon, Mail, PhoneIcon } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  return (
    <div>
      <h1 className="mb-4 mt-3 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Contact
      </h1>
      <div className="flex flex-col gap-3">
        <div className="flex gap-4">
          <HomeIcon />
          <p>Neerkanne 32 1082BH Amsterdam</p>
        </div>
        <div className="flex gap-4">
          <PhoneIcon />
          <Link href="tel:31620425506"> +31 (0)6 - 20 42 55 05</Link>
        </div>
        <div className="flex gap-4">
          <Mail />
          <Link href="mailto:info@huurscout.com">info@huurscout.com</Link>
        </div>
        <div className="flex gap-4">
          <Building2Icon />
          <p>KVK-nummer: 62051377</p>
        </div>
      </div>
    </div>
  );
}
