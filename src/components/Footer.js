
"use client"; // This makes the component a client component

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="text-color_h1 py-10 w-[95%] mx-auto text-center border-t border-gray-300 dark:border-gray-700">
      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-semibold mb-2">
        Let's Get in Touch
      </h2>

      {/* Description */}
      <p className="mb-6 text-sm md:text-base max-w-2xl mx-auto">
        Reach out for work, friendly chats, advice, recipe tips (I’m a great
        chef!), or to talk about the amazing Hollywood movies and series! :)
      </p>

      {/* Social Links */}
      <div className="flex justify-center space-x-8 text-2xl mb-6">
        <a
          href="https://www.linkedin.com/in/hashir-asmat-5b6285343/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#034e77] transition-colors"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://x.com/hashir_asmat"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#575e5e] transition-colors"
          aria-label="Twitter"
        >
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a
          href="mailto:hashirkhattak123@gmail.com"
          className="hover:text-red-500 transition-colors"
          aria-label="Email"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>

      {/* Footer Note */}
      <p className="text-xs md:text-sm mb-1">
        Designed and coded by <span className="font-semibold">Hashir Asmat</span>
      </p>
      <p className="text-xs md:text-sm">© Hashir 2025</p>
    </footer>
  );
};

export default Footer;
