import Image from 'next/image';

const techLogos = [
  { src: '/logos/salesforce.svg', alt: 'Salesforce' },
  { src: '/logos/react.svg', alt: 'React' },
  { src: '/logos/nextjs.svg', alt: 'Next.js' },
  { src: '/logos/nodejs.svg', alt: 'Node.js' },
  { src: '/logos/express.svg', alt: 'Express' },
  { src: '/logos/mongodb.svg', alt: 'MongoDB' },
  { src: '/logos/javascript.svg', alt: 'JavaScript' },
  { src: '/logos/html.svg', alt: 'HTML' },
  { src: '/logos/css.svg', alt: 'CSS' },
  { src: '/logos/git.svg', alt: 'Git' },
  { src: '/logos/tailwind.svg', alt: 'Tailwind CSS' },
  { src: '/logos/redux.svg', alt: 'Redux' },
  { src: '/logos/mysql.svg', alt: 'MySQL' },
  { src: '/logos/postman.svg', alt: 'Postman' },
  { src: '/logos/shopify.svg', alt: 'Shopify' },
  { src: '/logos/wordpress.svg', alt: 'WordPress' }
];

export default function TechnologyStack() {
  return (
    <div className="tech-stack mt-20 mb-20 flex flex-col justify-center w-full">
      <span className="font-inter text-[40px] sm:text-[50px] md:text-[70px] lg:text-[88px] font-extrabold leading-tight text-color_faint tracking-wide block mb-10 text-left">
        Technology Stack
      </span>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 bg-gray-300 py-6 px-4 justify-center rounded-md items-center w-full">
        {techLogos.map((logo) => (
          <div key={logo.alt} className="flex items-center justify-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={70}
              height={70}
              className="object-contain sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
