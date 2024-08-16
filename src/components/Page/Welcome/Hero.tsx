import heroImage from "@/src/assets/images/hero-image.jpg";
import { ROUTES } from "@/src/contexts/routes";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <header>
      <section className=" text-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary-700 mb-4 leading-tight">
            Empower Your Health: Track, Plan, and Thrive
          </h1>

          <div className="mt-8">
            <p className="text-base sm:text-lg lg:text-xl text-darks-primary mb-6">
              Comprehensive tools for tracking menstrual cycles, managing
              fertility, and accessing personalized health insights.
            </p>
            <img
              src={heroImage}
              alt="App Screenshots"
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        <Link
          to={ROUTES.access.dashboard._}
          className="bg-secondary-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-secondary-600 transition duration-300"
        >
          Get Started
        </Link>
        <br />
        <Link
          to={ROUTES.about._}
          className="text-amber-500 underline mt-4 inline-block hover:text-amber-600 transition duration-300"
        >
          Learn More
        </Link>
      </section>
    </header>
  );
}
