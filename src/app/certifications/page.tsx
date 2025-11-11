// Certification Card Component
import Navbar from "@/components/navbar/Navbar";
import type { Certification, WantedCertification } from "@/types";

function CertificationCard({ certification }: { certification: Certification }) {
    return (
        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col">
            {/* Centered Image */}
            <div className="flex justify-center mb-4">
                <img
                    src={certification.image}
                    alt={certification.title}
                    className="w-64 h-64 object-contain"
                />
            </div>

            {/* Centered Title */}
            <h3 className="text-lg font-bold text-slate-800 text-center mb-2">
                {certification.title}
            </h3>

            {/* Issuer */}
            <p className="text-xs text-slate-500 text-center mb-3">
                Issued by {certification.issuer}
            </p>

            {/* Left-justified Description */}
            <p className="text-sm text-slate-600 text-left mb-4 flex-grow">
                {certification.description}
            </p>

            {/* Dates */}
            <div className="text-xs text-slate-500 mb-3">
                <div className="flex justify-between">
                    <span>Issued: {certification.issueDate}</span>
                    <span className={certification.expirationDate ? '' : 'text-green-600 font-medium'}>
            {certification.expirationDate ? `Expires: ${certification.expirationDate}` : 'No Expiration'}
          </span>
                </div>
            </div>

            {/* Skill Tags/Pills */}
            <div className="flex flex-wrap gap-2 mt-auto">
                {certification.skills.map((skill, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full hover:bg-slate-200 transition-colors"
                    >
            {skill}
          </span>
                ))}
            </div>
        </div>
    );
}

// Wanted Certification Card Component (simplified)
function WantedCertificationCard({ certification }: { certification: WantedCertification }) {
    return (
        <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex items-center gap-4">
            <img
                src={certification.image}
                alt={certification.title}
                className="w-16 h-16 object-contain"
            />
            <div className="flex-1">
                <h3 className="text-base font-semibold text-slate-800 mb-1">
                    {certification.title}
                </h3>
                <p className="text-xs text-slate-500">
                    {certification.issuer}
                </p>
            </div>
        </div>
    );
}

// Main Certifications Page Component
export default function CertificationsPage() {
    const certificationsData: Certification[] = [
        {
            title: 'Six Sigma Green Belt',
            image: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/166144976',
            issuer: 'Institude of Industrial and Systems Engineers (IISE)',
            issueDate: 'November 10, 2025',
            expirationDate: 'November 18, 2028',
            description: 'An individual that possesses a thorough understanding of enhanced problem-solving skills, with an emphasis on the DMAIC (Define, Measure, Analyze, Improve and Control) model. The Green Belt Certification designation also reflects the knowledge by the individual to serve as a trained team member within his or her function-specific area of the organization.',
            skills: ['Six Sigma', 'DMAIC', 'Performance Improvement', 'Operational Excellence', 'Control Charts', 'Process Control']
        },
        {
            title: 'Certificate of Participation: Modeling Ancestry in Admixed Human Populations',
            image: 'https://www.ucsd.edu/_resources/img/logo_UCSD.png',
            issuer: 'UCSD',
            issueDate: 'August 11, 2023',
            expirationDate: null,
            description: 'Developed file a format validator for complex .HAP files. Modelled a tree-based model to speed up haplotype file transformation operations.',
            skills: [
                'Research & Development (R&D)',
                'Genomics',
                'UCSD',
                'Computer System Validation',
                'Algorithm Design'
            ]
        },
        {
            title: 'FIRST DIVE Mentor Certificate',
            image: '/pictures/first-dive-cert.svg',
            issuer: 'For Inspiration and Recognition of Science and Technology',
            issueDate: 'January 2024',
            expirationDate: null,
            description: 'As a FIRST Alumni and previous Programming & Electronics Head of Department, I have decided to stay and support my team in future competitions through mentorship, providing valuable resources and insight for future projects.',
            skills: [
                'Algorithm Design',
                'Laboratory Robotics',
                'Department management',
                'Robot Programming',
                'Computer Vision',
                'Leadership',
                'Professional Mentoring',
                'Educational Leadership'
            ]
        },
        {
            title: 'LIDERA Program Participation',
            image: 'https://javier.rodriguez.org.mx/itesm/escudo/escudo-itesm-black.svg',
            issuer: 'Monterrey Institute of Technology and Higher Education',
            issueDate: 'June 2022',
            expirationDate: null,
            description: 'Selected from just 2 people per campus, LIDERA participants are trained in high-engagement leadership skills and team collaboration activities throughout the course of several days.',
            skills: [
                'Leadership',
                'Educational Leadership',
                'Teamwork',
            ]
        },
    ];

    // Wanted certifications data
    const wantedCertificationsData: WantedCertification[] = [
        {
            title: 'Advanced Vision Applications with DL & Transformers',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
            issuer: 'OpenCV University'
        },
        {
            title: 'CVDL Master Program',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
            issuer: 'OpenCV University'
        },
        {
            title: 'Deep Learning with TensorFlow & Keras',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
            issuer: 'OpenCV University'
        },
        {
            title: 'Deep Learning with PyTorch',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
            issuer: 'OpenCV University'
        },
        {
            title: 'Fundamentals of Computer Vision & Image Processing',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
            issuer: 'OpenCV University'
        },
        {
            title: 'Mastering OpenCV with Python',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
            issuer: 'OpenCV University'
        },
        {
            title: 'OpenCV Free Bootcamps',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
            issuer: 'OpenCV University'
        },
        {
            title: 'NVIDIA AI Infrastructure Professional',
            image: '/pictures/nvidia-logo-square-2d.jpg',
            issuer: 'NVIDIA Deep Learning Institute'
        },
        {
            title: 'NVIDIA AI Operations Professional',
            image: '/pictures/nvidia-logo-square-2d.jpg',
            issuer: 'NVIDIA Deep Learning Institute'
        },
        {
            title: 'NVIDIA AI Networking Professional',
            image: '/pictures/nvidia-logo-square-2d.jpg',
            issuer: 'NVIDIA Deep Learning Institute'
        },
        {
            title: 'NVIDIA AI Infrastructure and Operations Associate',
            image: '/pictures/nvidia-logo-square-2d.jpg',
            issuer: 'NVIDIA Deep Learning Institute'
        },
        {
            title: 'NVIDIA Gen AI LLMsProfessional',
            image: '/pictures/nvidia-logo-square-2d.jpg',
            issuer: 'NVIDIA Deep Learning Institute'
        },
        {
            title: 'NVIDIA Agentic AI Professional',
            image: '/pictures/nvidia-logo-square-2d.jpg',
            issuer: 'NVIDIA Deep Learning Institute'
        },
        {
            title: 'NVIDIA Accelerated Data Science Professional',
            image: '/pictures/nvidia-logo-square-2d.jpg',
            issuer: 'NVIDIA Deep Learning Institute'
        },
        {
            title: 'NVIDIA OpenUSD Development Professional',
            image: '/pictures/nvidia-logo-square-2d.jpg',
            issuer: 'NVIDIA Deep Learning Institute'
        },
        {
            title: 'NVIDIA Gen AI LLMs Associate',
            image: '/pictures/nvidia-logo-square-2d.jpg',
            issuer: 'NVIDIA Deep Learning Institute'
        },
        {
            title: 'NVIDIA Gen AI Multimodal Associate',
            image: '/pictures/nvidia-logo-square-2d.jpg',
            issuer: 'NVIDIA Deep Learning Institute'
        },
        {
            title: 'NVIDIA Accelerated Data Science Associate',
            image: '/pictures/nvidia-logo-square-2d.jpg',
            issuer: 'NVIDIA Deep Learning Institute'
        },
        {
            title: 'NVIDIA OpenUSD Development Associate',
            image: '/pictures/nvidia-logo-square-2d.jpg',
            issuer: 'NVIDIA Deep Learning Institute'
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            <Navbar />

            <main className="container mx-auto px-8 py-12">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-slate-900 mb-4">Certifications & Courses</h1>
                    <p className="text-xl text-slate-600">
                        Professional certifications and completed courses that showcase my continuous learning journey.
                    </p>
                </div>

                {/* Certifications Grid - 3 per row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificationsData.map((cert, index) => (
                        <CertificationCard key={index} certification={cert} />
                    ))}
                </div>

                {/* Wanted Certifications Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Certifications I Want to Pursue</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Future learning goals and certifications on my roadmap.
                        Yes, they are a lot. Yes, I am commited to getting them all.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {wantedCertificationsData.map((cert, index) => (
                            <WantedCertificationCard key={index} certification={cert} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}