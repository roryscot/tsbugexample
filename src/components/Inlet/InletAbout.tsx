import { COMPANY_NAME } from "@/env/env.api";
import Inlet from "./Inlet";
import { ROUTES } from "@/src/contexts/routes";
import { Link } from "react-router-dom";
import { styleBackgroundImage } from "@/src/utils";
import aboutUsBG from "@/src/assets/images/about-us.jpg";

export default function PageAbout() {
  return (
    <Inlet id="about">
      <div className="bg-fuchsia-50 text-gray-800">
        {/* Hero Section with Background Image */}
        <section
          className="relative py-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
          style={{ ...styleBackgroundImage(aboutUsBG) }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative max-w-3xl mx-auto text-center z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Our Commitment to Women's Health
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white mb-8">
              At {COMPANY_NAME}, our mission is to bridge the gap in women's
              health by providing a supportive and comprehensive platform. We
              believe in the power of community-driven resources and are
              committed to empowering women through shared knowledge and
              innovation.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-fuchsia-600 mb-6">
              Our Core Values
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8">
              We are dedicated to fostering a community that supports women's
              health through empathy, innovation, integrity, and empowerment.
              Our values guide us in delivering the most impactful and
              personalized health solutions.
            </p>
            <ul className="list-disc list-inside text-left space-y-4 mx-auto max-w-xl">
              <li className="text-base sm:text-lg">
                <strong>Empathy:</strong> Understanding and addressing the
                unique needs of women with compassion and support.
              </li>
              <li className="text-base sm:text-lg">
                <strong>Innovation:</strong> Utilizing the latest technology and
                ideas to offer cutting-edge health solutions.
              </li>
              <li className="text-base sm:text-lg">
                <strong>Integrity:</strong> Ensuring transparency and honesty in
                all aspects of our operations and communications.
              </li>
              <li className="text-base sm:text-lg">
                <strong>Empowerment:</strong> Equipping women with the tools and
                knowledge they need to manage their health confidently.
              </li>
            </ul>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-fuchsia-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-fuchsia-600 mb-6">
              Building a Supportive Community
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8">
              Our platform is more than just a tool—it's a community. We connect
              users with valuable resources, expert advice, and peer support. By
              fostering a space where women can share their experiences and
              learn from each other, we enhance the collective well-being and
              empower every individual.
            </p>
            <Link
              to={ROUTES.contact._}
              className="bg-amber-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-amber-600 transition duration-300"
            >
              Explore Community Resources
            </Link>
          </div>
        </section>
      </div>
    </Inlet>
  );
}
