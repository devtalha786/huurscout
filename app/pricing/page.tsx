import { Building2Icon, HomeIcon, Mail, PhoneIcon } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  return (
    <div>
      <h1 className="mb-4 mt-3 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Tarieven
      </h1>
      <p>De volgende abonnementen zijn beschikbaar:</p>
      <p><strong>3 maanden</strong><br />€15,- per maand (48% korting)</p>
      <p><strong>2 maanden</strong><br />€19,- per maand (34% korting)</p>
      <p><strong>1 maand</strong><br />€29,- per maand</p>      
      <p>Bij alle abonnementen is de notificatieservice via WhatsApp en e-mail inbegrepen.</p>
    </div>
  );
}
