import Navbar from "@/components/navbar/Navbar";
import TabsIsland, { TabItem } from "@/components/tabs/TabsIsland";

export default function AboutPage() {
    const items: TabItem[] = [
        {
            key: 'about',
            label: 'About Me',
            content: (
                <div className="w-full flex flex-col md:flex-row">
                    <div className="md:w-1/2 w-full flex items-center justify-center px-4 md:px-8 py-6">
                        <div className="max-w-xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
                            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                                I am a robotics engineer passionate about exploration, automation, and intelligent systems. I focus on advancing
                                quality control and process improvement through automation, designing systems that think, adapt, and elevate
                                performance. This page shares a bit about who I am, what I enjoy, and where I’m headed next.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full h-56 md:h-80">
                        <img src="/pictures/intro-picture.jpg" alt="About me" className="w-full h-full object-cover rounded-lg" />
                    </div>
                </div>
            ),
        },
        {
            key: 'hobbies',
            label: 'Hobbies & Interests',
            content: (
                <div className="w-full flex flex-col md:flex-row-reverse">
                    <div className="md:w-1/2 w-full flex items-center justify-center px-4 md:px-8 py-6">
                        <div className="max-w-xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Hobbies & Interests</h2>
                            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                                Outside my passion for robotics, I love everything that the world has to offer. Primarily,
                                    I love ocean exploration and  ghealthcare
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full h-56 md:h-80">
                        <img src="/pictures/hobbies.jpg" alt="Hobbies" className="w-full h-full object-cover rounded-lg" />
                    </div>
                </div>
            ),
        },
        {
            key: 'roadmap',
            label: 'Roadmap',
            content: (
                <div className="w-full flex flex-col md:flex-row">
                    <div className="md:w-1/2 w-full flex items-center justify-center px-4 md:px-8 py-6">
                        <div className="max-w-xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Roadmap</h2>
                            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                                Hi! This section is a work in progress. Expect my future goals and a roadmap here soon!
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full h-56 md:h-80">
                        <img src="/pictures/future.jpg" alt="Roadmap" className="w-full h-full object-cover rounded-lg" />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
            <Navbar />

            <main className="flex-1 flex items-start md:items-center justify-center px-4 md:px-8 py-8 md:py-16">
                <TabsIsland items={items} className="w-full max-w-5xl" />
            </main>
        </div>
    );
}
