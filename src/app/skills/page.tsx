'use client'

import Navbar from "@/components/navbar/Navbar";
import type { Skill, SimpleSkill } from "@/types";

function SkillCard({ skill }: { skill: Skill }) {
    const getExpertiseLevel = (level: number): string => {
        if (level >= 90) return 'Expert';
        if (level >= 75) return 'Advanced';
        if (level >= 50) return 'Proficient';
        if (level >= 25) return 'Intermediate';
        return 'Beginner';
    };

    const getProgressColor = (level: number): string => {
        if (level >= 75) return 'bg-green-500';
        if (level >= 50) return 'bg-blue-500';
        if (level >= 25) return 'bg-yellow-500';
        return 'bg-orange-500';
    };

    return (
        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-4 mb-4">
                <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-16 h-16 object-contain"
                />
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800">{skill.name}</h3>
                    <span className="text-sm text-slate-500">{getExpertiseLevel(skill.level)}</span>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-200 rounded-full h-2.5">
                <div
                    className={`h-2.5 rounded-full ${getProgressColor(skill.level)} transition-all duration-500`}
                    style={{ width: `${skill.level}%` }}
                ></div>
            </div>
            <div className="text-right mt-1">
                <span className="text-xs text-slate-600">{skill.level}%</span>
            </div>
        </div>
    );
}

function FutureSkillCard({ skill }: { skill: SimpleSkill }) {
    return (
        <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center">
            <img
                src={skill.image}
                alt={skill.name}
                className="w-12 h-12 object-contain mb-2"
            />
            <h3 className="text-sm font-semibold text-slate-800 text-center">{skill.name}</h3>
        </div>
    );
}

function SkillsSection({ title, skills }: { title: string; skills: Skill[] }) {
    return (
        <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                ))}
            </div>
        </div>
    );
}

function FutureSkillsSection({ title, skills }: { title: string; skills: SimpleSkill[] }) {
    return (
        <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">{title}</h2>
            <div className="grid grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                    <FutureSkillCard key={index} skill={skill} />
                ))}
            </div>
        </div>
    );
}

export default function SkillsPage() {
    const skillsData: {
        programmingLanguages: Skill[];
        tools: Skill[];
        programs: Skill[];
        documenting: Skill[];
        oses: Skill[];
        frameworks: Skill[];
        machinery: Skill[];
        microcontrollers: Skill[];
        futureSkillsMaster: SimpleSkill[];
        futureSkillsImprove: SimpleSkill[];
        futureSkillsLearn: SimpleSkill[];
    } = {
        programmingLanguages: [
            { name: 'C++', level: 80, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
            { name: 'Kotlin', level: 80, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
            { name: 'Java', level: 80, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
            { name: 'Bash', level: 80, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
            { name: 'Python', level: 70, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'C', level: 70, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
            { name: 'Fish', level: 70, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
            { name: 'TypeScript', level: 40, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
            { name: 'MATLAB', level: 20, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg' },
            { name: 'Lua', level: 20, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg' },
            { name: 'Rust', level: 15, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg' },
            { name: 'r', level: 5, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },
        ],
        tools: [
            { name: 'Git', level: 80, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'Linux', level: 80, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
            { name: 'Gradle', level: 65, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-original.svg' },
            { name: 'SSH', level: 60, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ssh/ssh-original.svg' },
            { name: 'CMake', level: 60, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cmake/cmake-original.svg' },
            { name: 'Wolfram', level: 40, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wolfram/wolfram-original.svg' },
            { name: 'npm', level: 30, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original.svg' },
            { name: 'Vulkan', level: 20, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vulkan/vulkan-original.svg' },
            { name: 'OpenGL', level: 20, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opengl/opengl-original.svg' },
        ],
        programs: [
            { name: 'neovim', level: 80, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neovim/neovim-original.svg' },
            { name: 'CLion', level: 70, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clion/clion-original.svg' },
            { name: 'WebStorm', level: 70, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webstorm/webstorm-original.svg' },
            { name: 'Intellij', level: 70, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' },
            { name: 'PyCharm', level: 70, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg' },
            { name: 'Android Studio', level: 60, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
            { name: 'VS Code (Codium)', level: 65, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscodium/vscodium-original.svg' },
            { name: 'OnShape', level: 50, image: 'https://www.onshape.com/cdn-images/2db2486ec4e220b607223acf5f79cfe5e02d7859-216x49.svg?w=1536&fit=max' },
            { name: 'Figma', level: 15, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        ],
        documenting: [
            { name: 'LaTeX', level: 70, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg' },
            { name: 'Typst', level: 70, image: 'https://typst.app/assets/logo-name-C77aOd-H.png' },

        ],
        oses: [
            { name: 'Arch Linux', level: 85, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/archlinux/archlinux-original.svg' },
            { name: 'Windows', level: 50, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows11/windows11-original.svg' },
        ],
        frameworks: [
            { name: 'WPILib', level: 85, image: 'https://images.squarespace-cdn.com/content/v1/5d4b06a67cd3580001ded283/c5f7215d-4c18-462c-a2b6-67b866d6ff3d/WPILib+%286%29.png?format=500w' },
            { name: 'Discord.js', level: 60, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg' },
            { name: 'React', level: 50, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Next.js', level: 50, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
            // { name: 'ROS', level: 80, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ros/ros-original.svg' }, gimme a min
            { name: 'FastApi', level: 40, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
            { name: 'OpenCV', level: 40, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
        ],
        machinery: [
            { name: '3D Printing', level: 60, image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXB5cmFtaWQtaWNvbiBsdWNpZGUtcHlyYW1pZCI+PHBhdGggZD0iTTIuNSAxNi44OGExIDEgMCAwIDEtLjMyLTEuNDNsOS0xMy4wMmExIDEgMCAwIDEgMS42NCAwbDkgMTMuMDFhMSAxIDAgMCAxLS4zMiAxLjQ0bC04LjUxIDQuODZhMiAyIDAgMCAxLTEuOTggMFoiLz48cGF0aCBkPSJNMTIgMnYyMCIvPjwvc3ZnPg==' },
        ],
        microcontrollers: [
            { name: 'NI RoboRIO', level: 85, image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1pY3JvY2hpcC1pY29uIGx1Y2lkZS1taWNyb2NoaXAiPjxwYXRoIGQ9Ik0xOCAxMmgyIi8+PHBhdGggZD0iTTE4IDE2aDIiLz48cGF0aCBkPSJNMTggMjBoMiIvPjxwYXRoIGQ9Ik0xOCA0aDIiLz48cGF0aCBkPSJNMTggOGgyIi8+PHBhdGggZD0iTTQgMTJoMiIvPjxwYXRoIGQ9Ik00IDE2aDIiLz48cGF0aCBkPSJNNCAyMGgyIi8+PHBhdGggZD0iTTQgNGgyIi8+PHBhdGggZD0iTTQgOGgyIi8+PHBhdGggZD0iTTggMmEyIDIgMCAwIDAtMiAydjE2YTIgMiAwIDAgMCAyIDJoOGEyIDIgMCAwIDAgMi0yVjRhMiAyIDAgMCAwLTItMmgtMS41Yy0uMjc2IDAtLjQ5NC4yMjctLjU2Mi40OTVhMiAyIDAgMCAxLTMuODc2IDBDOS45OTQgMi4yMjcgOS43NzYgMiA5LjUgMnoiLz48L3N2Zz4=' },
            { name: 'Arduino', level: 85, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
            { name: 'Raspberry Pi', level: 80, image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg' },
            { name: 'ESP32', level: 70, image: 'https://www.espressif.com/sites/all/themes/espressif/logo-black.svg' },
            { name: 'TI Launchpad', level: 50, image: '//www.ti.com/etc/designs/ti/images/ui/ic-logo.svg' },
        ],
        futureSkillsMaster: [
            { name: 'Linux', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
            { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'C++', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
            { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'Kotlin', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
            { name: 'Rust', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg' },
            { name: 'Vulkan', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vulkan/vulkan-original.svg' },
            { name: 'OpenGL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opengl/opengl-original.svg' },
            { name: 'OpenCV', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
        ],
        futureSkillsImprove: [
            { name: 'OnShape', image: 'https://www.onshape.com/cdn-images/2db2486ec4e220b607223acf5f79cfe5e02d7859-216x49.svg?w=1536&fit=max' },
        ],
        futureSkillsLearn: [
            { name: 'Go', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
            { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg' },
            { name: 'Kubernetes', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg' },
            { name: 'TensorFlow', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
            { name: 'WebAssembly', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wasm/wasm-original.svg' },
        ],
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            <Navbar/>

            <main className="container mx-auto px-8 py-12">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-slate-900 mb-4">My Skills</h1>
                    <p className="text-xl text-slate-600">
                        A comprehensive overview of my technical expertise and proficiency levels
                    </p>
                </div>

                <SkillsSection title="Programming and Scripting Languages" skills={skillsData.programmingLanguages} />
                <SkillsSection title="Tools" skills={skillsData.tools} />
                <SkillsSection title="Project Development Programs" skills={skillsData.programs} />
                <SkillsSection title="Documentation Tools" skills={skillsData.documenting} />
                <SkillsSection title="Operating Systems" skills={skillsData.oses} />
                <SkillsSection title="Libraries and Frameworks" skills={skillsData.frameworks} />
                <SkillsSection title="Machinery" skills={skillsData.machinery} />
                <SkillsSection title="Microcontrollers & Microprocessors" skills={skillsData.microcontrollers} />

                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-slate-900 mb-4">For the future</h1>
                    <p className="text-xl text-slate-600">
                        There are skills I wish to master, improve and learn. Check out my interests!
                    </p>
                </div>

                <div className="flex gap-6">
                    <div className="w-1/3">
                        <FutureSkillsSection title="Master" skills={skillsData.futureSkillsMaster} />
                    </div>

                    <div className="w-0.5 bg-slate-300"></div>

                    <div className="w-1/3">
                        <FutureSkillsSection title="Improve" skills={skillsData.futureSkillsImprove} />
                    </div>

                    <div className="w-0.5 bg-slate-300"></div>

                    <div className="w-1/3">
                        <FutureSkillsSection title="Learn" skills={skillsData.futureSkillsLearn} />
                    </div>
                </div>


            </main>
        </div>
    );
}