// components/MyActivities.js
import Image from 'next/image';

const OtherActivities = () => {
    const shows = [
        { title: 'breaking-bad', image: '/series_movies/breaking-bad.jpg' },
        { title: 'dark', image: '/series_movies/dark.jpg' },
        { title: "Game of Thrones", image: '/series_movies/got.jpg' },
        { title: "Peakyblinder", image: '/series_movies/peakyblinders.webp' },
        { title: 'prisonbreak', image: '/series_movies/prison-break.jpg' },
        { title: 'vikings', image: '/series_movies/vikings.jpg' },
      ];
  return (
    <div className="w-[90%] mx-auto py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Left Section: Text */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4 text-color_faint">What <span className='text-[#F5780F]'>I'm watching</span></h2>
          <p className="text-gray-600">
          From the grit of crime dramas to the magic of epic fantasies, my viewing list is a collection of worlds that inspire, thrill, and captivate. Each show has its own flavor, a portal to unforgettable stories.
          </p>
        </div>

        {/* Right Section: Grid of Images */}
        <div className="grid grid-cols-3 gap-4 md:w-[40%]">
          {shows.map((show, index) => (
            <div key={index} className="rounded-sm overflow-hidden shadow-md">
              <Image
                src={show.image}
                alt={show.title}
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherActivities;
