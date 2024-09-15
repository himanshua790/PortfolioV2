import Saweria from '@/components/elements/Saweria'
import TypeAnimation from '@/components/elements/TypeAnimation'

export default function Introduction() {
  return (
    <section className="space-y-2 bg-cover bg-no-repeat">
      <div className="flex items-center justify-between">
        <div className="font-sora flex gap-2 text-2xl font-bold lg:text-3xl">
          <TypeAnimation sequence={["Hi, I'm Himanshu Soni", "Hi, I'm Software Engineer"]} delay={3000} />
        </div>
        <Saweria />
      </div>

      <div className="space-y-4">
        <ul className="ml-5 flex list-disc flex-col gap-1 text-neutral-700 dark:text-neutral-400 lg:flex-row lg:gap-8">
          <li>Full Stack Developer</li>
          <li>
            Based in India <span className="ml-1">🇮🇳</span>
          </li>
          <li>Remote worker</li>
        </ul>
        <p className="leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose">
          Passionate and seasoned Full Stack Developer with over 4 years of experience in building cutting-edge
          applications across AI, e-commerce, logistics, and Web3. Proficient in JavaScript, TypeScript, React, and
          Node.js, and highly skilled in both frontend and backend technologies. A collaborative team player who thrives
          on delivering scalable, high-performance, and visually appealing web applications.
        </p>
      </div>
    </section>
  )
}
