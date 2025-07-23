import Link from "next/link";
import React from "react";
import { Mail, Phone } from "lucide-react";

export default function Privacy() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-auto bg-gradient-to-tl from-black via-zinc-600/20 to-black p-4">
      <div className="w-full max-w-3xl bg-white bg-opacity-90 text-black rounded-lg shadow-lg p-8 overflow-y-auto h-full">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">1. Data Controller</h2>
          <p>
            The data controller is <strong>Michele Avino</strong>, VAT No. 06257910650, registered office at via Capone 76, Scafati (SA) 84018, Italy.<br />
            Contact: <a href="mailto:michele.avino.2000@gmail.com" className="text-blue-600 underline">michele.avino.2000@gmail.com</a> | +39 339 471 6560
          </p>
        </section>
        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">2. Personal Data Collection</h2>
          <p>
            The website <a href="https://micheleavino.vercel.app/" className="text-blue-600 underline">https://micheleavino.vercel.app/</a> does not automatically collect any personal data from visitors.
          </p>
          <p className="mt-2">
            <strong>Exception:</strong> if you contact me via email at <a href="mailto:michele.avino.2000@gmail.com" className="text-blue-600 underline">michele.avino.2000@gmail.com</a>, any personal data you voluntarily provide (e.g. name, email address, message content) will be processed solely to respond to your inquiry.
          </p>
        </section>
        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">3. Purpose and Legal Basis of Processing</h2>
          <p>
            Any data you voluntarily send by email will be used for:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Responding to information requests or quotes</li>
            <li>Performing agreed-upon services (contractual necessity, Art. 6(1)(b) GDPR)</li>
          </ul>
        </section>
        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">4. Data Retention</h2>
          <p>
            Email-transmitted data will be retained:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Only as long as necessary to fulfill your request (maximum 6 months)</li>
            <li>Afterwards, all such data will be securely deleted.</li>
          </ul>
        </section>
        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">5. Data Sharing and Disclosure</h2>
          <p>
            Your email-submitted data will not be sold or shared with third parties, except:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Technical service providers (e.g. email host, web host)</li>
            <li>Public authorities if required by law</li>
          </ul>
        </section>
        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">6. International Transfers</h2>
          <p>
            Any servers or subprocessors located outside the EU comply with EU adequacy decisions or Standard Contractual Clauses.
          </p>
        </section>
        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">7. Data Security</h2>
          <p>
            Appropriate technical and organizational measures are in place, including:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>SSL/TLS encryption for web and email services</li>
            <li>Regular backups and disaster-recovery procedures</li>
            <li>Secure access controls with strong credentials</li>
          </ul>
        </section>
        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">8. Data Subject Rights</h2>
          <p>
            You may exercise the following rights at any time by emailing <a href="mailto:michele.avino.2000@gmail.com" className="text-blue-600 underline">michele.avino.2000@gmail.com</a>:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Right of access (Art. 15 GDPR)</li>
            <li>Right to rectification (Art. 16 GDPR)</li>
            <li>Right to erasure (“right to be forgotten,” Art. 17 GDPR)</li>
            <li>Right to restriction of processing (Art. 18 GDPR)</li>
            <li>Right to object (Art. 21 GDPR)</li>
            <li>Right to withdraw consent (Art. 7(3) GDPR)</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">9. Changes to this Privacy Policy</h2>
          <p>
            This policy may be updated over time. The current version is always available at:
            <br />
            <a href="https://micheleavino.vercel.app/privacy" className="text-blue-600 underline">https://micheleavino.vercel.app/privacy</a>
          </p>
          <p className="mt-4 text-sm">Last Updated: July 23, 2025</p>
        </section>
      </div>
      <footer className="bg-zinc-900 text-zinc-400 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left space-y-1">
            <p className="text-zinc-200 font-semibold">Michele Avino</p>
            <p>P.IVA 06257910650</p>
            <p>via Capone 76, Scafati (SA) 84018, Italy</p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row items-center gap-6">
            <a href="tel:+393394716560" className="flex items-center hover:text-white">
              <Phone size={20} className="mr-2" />
              +39 339 471 6560
            </a>
            <a href="mailto:michele.avino.2000@gmail.com" className="flex items-center hover:text-white">
              <Mail size={20} className="mr-2" />
              michele.avino.2000@gmail.com
            </a>
            <Link href="/privacy" className="hover:text-white">
              Privacy &amp; Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
