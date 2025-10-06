import HeroText from '@/components/HeroText';
import MyActivities from '@/components/MyActivities';
import OtherActivities from '@/components/OtherActivities';

const About = () => {
  return (
    <div className="parent-container px-6 sm:px-10 md:pl-20 pt-10 relative max-w-[1400px] mx-auto">
      {/* Hero Section */}
      <div className="hero-text text-center md:text-left">
        <span className="font-inter text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-extrabold leading-tight md:leading-[90px] lg:leading-[107px] text-purple-700 tracking-wide block">
          I am Many things!
        </span>
        <HeroText />
      </div>
    
      {/* Intro Section */}
      <div className="w-full flex flex-col md:flex-row gap-10 mt-20 mb-20 mx-auto items-center md:items-start">
        <div className="w-full md:w-1/2">
          <span className="font-inter text-xl md:text-2xl font-bold text-color_faint block mb-5">
            Curiosity Never Ends
          </span>
          <p className="font-inter text-sm md:text-base font-bold text-color_logo mb-5">
            I am a curious soul who loves diving into the world of technology, experimenting with new recipes and spices, exploring uncharted places, and connecting with fascinating people from all walks of life.
          </p>
          <p className="font-inter text-sm md:text-base font-bold text-color_logo mb-5">
            I aim to bring creativity and a spark of curiosity to everything I do, while being an engaging and fun person to connect with! <span className="text-xl">💬</span>
          </p> 
          <p className="font-inter text-sm md:text-base font-bold text-color_logo mb-5">
            Feel free to reach out to me anytime for a chat or collaboration!
          </p>
        </div>
        <div className="intro-img w-[60%] sm:w-[40%] md:w-[25%] flex items-center rounded-sm">
          <img src="/profile.jpg" alt="Profile" className="rounded-sm w-full h-auto"/>
        </div>
      </div>

      {/* Contributions Section */}
      <span className="font-inter text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-extrabold leading-tight md:leading-[90px] lg:leading-[107px] text-color_faint block text-center md:text-left">
        Contributions.
      </span>

      {/* Contribution Items */}
      <div className="space-y-20 mt-10">
        <Contribution
          title="Salesforce Developer – Infinywise"
          subtitle="Jul 2024 – Current"
          description="Migrated workflows to Flows, developed Apex triggers, fixed daily issues, and explored Salesforce Einstein AI for predictive insights for a Finnish university client."
        />
        <Contribution
          title="Full Stack Shopify Developer"
          subtitle="HoneyOnline.pk (Jun 2021 – Jan 2022)"
          description="Developed and maintained the HoneyOnline.pk Shopify store, customized UI/UX with Liquid, and improved SEO visibility using SEMrush, Ahrefs, and Google Search Console."
        />
        <Contribution
          title="Frontend Lead – Final Year Project"
          subtitle="Stride (Apr 2023 – Jul 2024)"
          description="Led frontend development for Stride, an educational management platform. Built features like custom calendar, file uploads, and real-time graphs using React + Redux."
        />
        <Contribution
          title="Node.js Express – Backend Developer"
          subtitle="Quantum Academy Internship (Sept – Mar 2022)"
          description="Developed and tested backend APIs, collaborated using GitHub & Jira, and learned professional workflows with Slack, Google Meet, and Google Calendar."
        />
        <Contribution
          title="Full Stack Developer – CoinTracker"
          subtitle="University Project (2022 – 2023)"
          description="Built a crypto tracking app with MERN, integrated CoinGecko API, secure auth, blog CRUD, and React Table for data display. Used Formik + Yup for form validation."
        />
        <Contribution
          title="Full Stack Developer – Virtual Event Planner"
          subtitle="2023 – Ongoing (Part-time)"
          description="Developed a secure event management platform with OTP verification, role-based access, password reset, and real-time collaboration features, deployed with cloud scalability in mind."
        />
      </div>

      {/* MyActivities Section */}
      <MyActivities/>
      <div className="w-full md:w-[50%] mx-auto mb-20 text-center md:text-left">
        <span className="text-color_h1 text-base md:text-xl font-bold"> 
          And being a <span className="text-purple-700 font-bold">University of Engineering and Technology Peshawar</span> ALUMNUS
        </span>
      </div>

      {/* Others Section */}
      <span className="font-inter text-4xl sm:text-6xl md:text-7xl lg:text-[88px] text-color_faint font-extrabold leading-tight md:leading-[90px] lg:leading-[107px] block text-center md:text-left">
        others.
      </span>
      <OtherActivities/>
    </div>
  );
};

// ✅ Reusable Contribution Component (JS-friendly)
function Contribution({ title, subtitle, description }) {
  return (
    <div className="text-color_h1 flex flex-col md:flex-row items-start justify-center w-full md:w-[90%] mx-auto gap-6 md:gap-8 px-4 sm:px-6 md:px-0">
      {/* Left Section */}
      <div className="md:w-1/3 w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-color_h1 font-normal">
          {title}
        </h1>
        <br />
        <span className="text-color_h1 font-normal text-sm sm:text-base">{subtitle}</span>
      </div>
      {/* Right Section */}
      <div className="md:w-2/3 w-full space-y-4">
        <p className="text-base sm:text-lg md:text-xl font-bold leading-snug text-color_h1">
          {description}
        </p>
      </div>
    </div>
  );
}

export default About;
