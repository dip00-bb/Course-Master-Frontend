

export default function EducationHero() {

    return (
        <div>

            {/* Hero Section */}
            <section className="px-4 sm:px-6 lg:px-12 xl:px-20 py-12 sm:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto">
                    {/* Badge */}
                    <div className="inline-block mb-6 sm:mb-8">
                        <span
                            className="px-4 sm:px-6 py-2 rounded-full text-sm font-medium bg-(--primary-color)"
                            style={{
                                color: 'var(--accent-color)'
                            }}
                        >
                            Online Education
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-3xl lg:text-6xl xl:text-7xl font-serif leading-tight mb-6 sm:mb-8">
                        <span className="block">
                            Create <span className="text-(--accent-color)">New Experience</span>
                        </span>

                        <span className="block">
                            With Ways Of <span className="text-(--accent-color)">Perfect</span>
                        </span>

                        <span className="block text-(--accent-color)">
                            Learning.
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-sm sm:text-lg md:text-xl max-w-3xl mb-8 sm:mb-10 lg:mb-12 leading-relaxed text-gray-700">
                        At study Buddy, we understand that every student is unique and so are their learning needs. Our mission is to match students with experienced and caring home tutors who will provide personalized support, inspire confidence and ignite a passion for learning.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-16 sm:mb-20 lg:mb-24">

                        {/* Primary Button */}
                        <button
                            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg flex items-center justify-center gap-2 transition-all hover:opacity-90 shadow-lg bg-(--accent-color) text-(--primary-color) cursor-pointer"
                        >
                            Get Started
                        </button>

                        {/* Secondary Button */}
                        <button
                            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg flex items-center justify-center gap-2 transition-all hover:shadow-lg bg-(--primary-color) border-2 border-[#333] cursor-pointer"
                        >
                            Explore Courses
                        </button>
                    </div>

                </div>
            </section>

        </div>
    );
}