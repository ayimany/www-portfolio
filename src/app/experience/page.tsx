import Navbar from "@/components/navbar/Navbar";

interface Experience {
    title: string;
    logo: string;
    startDate: string;
    endDate: string | null;
    description: string;
    country: string;
    state?: string;
}

interface ExperienceCardProps {
    experience: Experience;
}

function ExperienceCard({ experience }: ExperienceCardProps) {
    const formatDateRange = (start: string, end: string | null): string => {
        if (!end) {
            return `${start} - Present`;
        }
        return `${start} - ${end}`;
    };

    const getCountryCode = (country: string): string => {
        const countryMap: { [key: string]: string } = {
            'United States': 'US',
            'USA': 'US',
            'Canada': 'CA',
            'United Kingdom': 'GB',
            'UK': 'GB',
            'Germany': 'DE',
            'France': 'FR',
            'Japan': 'JP',
            'China': 'CN',
            'India': 'IN',
            'Brazil': 'BR',
            'Australia': 'AU',
            'Mexico': 'MX',
            'Spain': 'ES',
            'Italy': 'IT',
            'Netherlands': 'NL',
            'Sweden': 'SE',
            'Switzerland': 'CH',
            'Singapore': 'SG',
            'South Korea': 'KR',
        };
        return countryMap[country] || 'US';
    };

    const countryCode = getCountryCode(experience.country);
    const flagUrl = `https://flagcdn.com/24x18/${countryCode.toLowerCase()}.png`;

    return (
        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div className="flex gap-4">
                <div className="flex-shrink-0">
                    <img
                        src={experience.logo}
                        alt={experience.title}
                        className="w-16 h-16 object-contain"
                    />
                </div>

                <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-1">
                        {experience.title}
                    </h3>

                    <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                        <span>{formatDateRange(experience.startDate, experience.endDate)}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1.5">
                            <img src={flagUrl} alt={experience.country} className="w-5 h-4" />
                            <span>{experience.state ? `${experience.state}, ${experience.country}` : experience.country}</span>
                        </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                        {experience.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function ExperiencePage() {
    const experienceData: Experience[] = [
        {
            title: 'FRC Student Mentor',
            logo: 'https://my.firstinspires.org/Dashboard/Content/Images/Logo_Primary.svg',
            startDate: 'Jun 2022',
            endDate: null,
            country:'Mexico',
            state: 'Querétaro',
            description: 'As a mentor, the focus shifted from my own work to helping new students find their footing. I learned to guide instead of taking over, explain concepts clearly, and create space for others to experiment, fail safely, and improve. Supporting students through their challenges, technical or teamwork-related, taught me patience, leadership, and how to keep a group aligned during high-stress build periods. It deepened my understanding of how a team grows both technically and personally.'
        },
        {
            title: 'Genomics Research Assistant @ UCSD',
            logo: 'https://www.ucsd.edu/_resources/img/logo_UCSD.png',
            startDate: 'Jun 2023',
            endDate: 'Aug 2023',
            country:'United States',
            state: 'California',
            description: 'During my time in San Diego, I collaborated closely with undergraduate and doctoral students while connecting with a wide range of distinguished professors across the university. Living independently strengthened my ability to manage my own resources and navigate new environments with confidence. I also discovered a vibrant ecosystem of science and engineering that deeply resonated with me and expanded my academic motivations.'
        },
        {
            title: 'FRC Student',
            logo: 'https://my.firstinspires.org/Dashboard/Content/Images/Logo_Primary.svg',
            startDate: 'Aug 2021',
            endDate: 'Jul 2024',
            country:'México',
            state: 'Querétaro',
            description: 'Competing in FRC taught me how to turn rough ideas into reliable mechanisms, work under pressure, and communicate clearly when things weren’t going to plan. I dealt with failures constantly, such as broken prototypes, bad matches, rushed redesigns—but learned to treat each one as data rather than defeat. That cycle of building, breaking, and rebuilding gave me practical engineering confidence and the mindset to stay steady when a project hits turbulence.'
        }
    ];

    const competitionsData: Experience[] = [
        {
            title: 'Major League Hacking – HackMTY',
            logo: 'https://static.mlh.io/brand-assets/logo/official/mlh-logo-color.svg',
            startDate: 'October 2025',
            endDate: 'October 2025',
            country:'Mexico',
            state: 'Monterrey',
            "description": "Participated in Latin America's largest hackathon, developing a complete system under intense time pressure and delayed customer requirements. I learned to adapt quickly, distribute roles based on team strengths, and maintain focus through fatigue. Despite the constraints, our team delivered a fully functional solution integrating a web UI, mobile app, AI backend, database, and an object-classification workflow for loading airplane food carts. TODO: Add any final details you'd like to highlight."
        },
        {
            "title": "FIRST Robotics Competition – Championship",
            "logo": "https://frc-cdn.firstinspires.org/eventweb_frc/GameLogos/2025.png",
            "startDate": "April 2025",
            "endDate": "April 2025",
            "country": "United States",
            "state": "Houston, Texas",
            "description": "Supported problem-solving and guided technical decisions while working with a high-performing robot. Engaged with top teams and industry partners, gaining insight into professional engineering workflows and competitive strategy. This event broadened my perspective and strengthened my path forward."
        },
        {
            "title": "FIRST Robotics Competition – Regional Competition",
            "logo": "https://frc-cdn.firstinspires.org/eventweb_frc/GameLogos/2025.png",
            "startDate": "March 2025",
            "endDate": "March 2025",
            "country": "United States",
            "state": "Wisconsin",
            "description": "Acted as a student mentor, helping new leads build technical confidence and handle real-time issues with composure. This experience demonstrated how teaching deepens one’s own understanding and how shared learning strengthens a team."
        },
        {
            "title": "FIRST Robotics Competition – Regional Competition",
            "logo": "https://frc-cdn.firstinspires.org/eventweb_frc/GameLogos/2025.png",
            "startDate": "March 2025",
            "endDate": "March 2025",
            "country": "Mexico",
            "state": "León, Guanajuato",
            "description": "My first official event as a mentor. I initially focused too much on doing the work myself, but quickly learned the value of stepping back so newer members could grow. This experience instilled long-lasting habits of empathy, humility, and empowerment."
        },
        {
            "title": "ICPC Gran Premio de México",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/3/3f/ICPC_logo.png",
            "startDate": "October 2024",
            "endDate": "October 2024",
            "country": "Mexico",
            "state": "Monterrey",
            "description": "Represented ITESM at the national ICPC finals. The results highlighted the depth of knowledge required at this level and strengthened my motivation to study advanced algorithms and problem-solving techniques."
        },
        {
            "title": "FIRST Robotics Competition – Off-Season Competition",
            "logo": "https://frc-cdn.firstinspires.org/eventweb_frc/GameLogos/2024.png",
            "startDate": "October 2024",
            "endDate": "October 2024",
            "country": "Mexico",
            "state": "León, Guanajuato",
            "description": "My first off-season as a student mentor. Guiding a new lead pushed me toward a project-management mindset and taught me how to coordinate work rather than handle everything alone, marking an important shift in my engineering approach."
        },
        {
            "title": "FIRST Robotics Competition – Championship",
            "logo": "https://frc-cdn.firstinspires.org/eventweb_frc/GameLogos/2024.png",
            "startDate": "April 2024",
            "endDate": "April 2024",
            "country": "United States",
            "state": "Houston, Texas",
            "description": "Gained exposure to advanced robotics systems and learned the importance of diagnostics, logging, and robust debugging. Unexpected technical issues reinforced the value of safety and reliability in competition environments."
        },
        {
            "title": "FIRST Robotics Competition – Regional Competition",
            "logo": "https://frc-cdn.firstinspires.org/eventweb_frc/GameLogos/2024.png",
            "startDate": "March 2024",
            "endDate": "March 2024",
            "country": "Mexico",
            "state": "Coahuila",
            "description": "A milestone event where improved systems and outreach efforts led to strong rankings and an Engineering Inspiration Award, enabling the team to compete at the 2024 Championship. It emphasized the importance of consistency and reliability under pressure."
        },
        {
            "title": "FIRST Robotics Competition – Regional Competition",
            "logo": "https://frc-cdn.firstinspires.org/eventweb_frc/GameLogos/2024.png",
            "startDate": "March 2024",
            "endDate": "March 2024",
            "country": "Mexico",
            "state": "Sonora",
            "description": "My first senior-level competition. Implemented machine learning and vision processing for real-time scoring, helping the team achieve consistent on-field performance for the first time. This experience deepened my understanding of applied robotics and long-term technical growth."
        },
        {
            "title": "FIRST Robotics Competition – Off-Season Competition (All-Star)",
            "logo": "https://frc-cdn.firstinspires.org/eventweb_frc/GameLogos/2023.png",
            "startDate": "September 2023",
            "endDate": "September 2023",
            "country": "Mexico",
            "state": "Monterrey",
            "description": "A demanding event marked by rapid reprogramming and subsystem changes. Despite setbacks, the team reached playoffs with a streamlined and reliable chassis. This taught me how structured adaptation can convert obstacles into progress."
        },
        {
            "title": "FIRST Robotics Competition – Regional Competition (Port Hueneme)",
            "logo": "https://frc-cdn.firstinspires.org/eventweb_frc/GameLogos/2023.png",
            "startDate": "March 2023",
            "endDate": "March 2023",
            "country": "United States",
            "state": "California",
            "description": "My first international competition. Observing and interacting with top teams broadened my expectations and inspired deeper research into high-performance robotics strategies."
        },
        {
            "title": "FIRST Robotics Competition – Regional Competition",
            "logo": "https://frc-cdn.firstinspires.org/eventweb_frc/GameLogos/2023.png",
            "startDate": "February 2023",
            "endDate": "February 2023",
            "country": "Mexico",
            "state": "Puebla",
            "description": "A difficult event that taught me how to face significant setbacks constructively. The lessons from this failure became a foundation for future growth and resilience."
        },
        {
            "title": "FIRST Robotics Competition – Off-Season Competition",
            "logo": "https://frc-cdn.firstinspires.org/eventweb_frc/GameLogos/2022.png",
            "startDate": "October 2022",
            "endDate": "October 2022",
            "country": "Mexico",
            "state": "Puebla",
            "description": "Handled programming and electronics in high-pressure conditions for the first time. This experience strengthened my ability to improvise and deliver reliable solutions quickly."
        },
        {
            "title": "LIDERA – Leadership Program",
            "logo": "https://javier.rodriguez.org.mx/itesm/escudo/escudo-itesm-black.svg",
            "startDate": "June 2022",
            "endDate": "June 2022",
            "country": "Mexico",
            "state": "Cuernavaca",
            "description": "Selected among top ITESM students for a leadership program focused on teamwork, critical thinking, and developing personal strengths. This experience provided tools that have shaped my approach to guiding teams in high-pressure environments."
        },
        {
            "title": "FIRST Robotics Competition – Regional Competition",
            "logo": "https://frc-cdn.firstinspires.org/eventweb_frc/GameLogos/2022.png",
            "startDate": "March 2022",
            "endDate": "March 2022",
            "country": "Mexico",
            "state": "Monterrey",
            "description": "My first FRC event and the starting point of my passion for robotics and automated systems. This experience set the direction for my continued involvement in competitive engineering."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            <Navbar />

            <main className="container mx-auto px-8 py-12">
                <div className="mb-16">
                    <h1 className="text-5xl font-bold text-slate-900 mb-4">Professional Experience</h1>
                    <p className="text-xl text-slate-600 mb-8">
                        My journey in both personal and professional development.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {experienceData.map((exp, index) => (
                            <ExperienceCard key={index} experience={exp} />
                        ))}
                    </div>
                </div>

                <div>
                    <h1 className="text-5xl font-bold text-slate-900 mb-4">Competitions & Achievements</h1>
                    <p className="text-xl text-slate-600 mb-8">
                        Challenges that pushed my limits and shaped my skills
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {competitionsData.map((comp, index) => (
                            <ExperienceCard key={index} experience={comp} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}