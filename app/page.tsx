import { Marquee } from "@devnomic/marquee";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Space_Mono } from "next/font/google";
import {
  FaAws,
  FaCss3,
  FaGithub,
  FaGolang,
  FaHtml5,
  FaJira,
  FaJs,
  FaLaravel,
  FaLinux,
  FaNodeJs,
  FaPhp,
  FaReact,
} from "react-icons/fa6";
import { SiMongodb, SiNestjs, SiPlaywright, SiPuppeteer } from "react-icons/si";
import { TbBrandCSharp, TbBrandMysql, TbBrandNextjs, TbBrandReactNative, TbBrandTypescript } from "react-icons/tb";
import { projects } from "./data";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <main>
      <header className="container mx-auto max-w-screen-lg py-20">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Arthur Mendes Pereira</h1>
        <p className={cn(spaceMono.className, "text-xl text-muted-foreground mb-4")}>Desenvolvedor de Softwares</p>
        <a
          className="flex space-x-2 items-center"
          href="https://github.com/Thumendes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          <span>Thumendes</span>
        </a>
      </header>

      <section className="flex space-x-6 items-center container mx-auto py-10 ">
        <Marquee fade={true} pauseOnHover={true}>
          <div className="p-5">
            <FaHtml5 size={75} />
          </div>
          <div className="p-5">
            <FaCss3 size={75} />
          </div>
          <div className="p-5">
            <FaJs size={75} />
          </div>
          <div className="p-5">
            <TbBrandTypescript size={75} />
          </div>
          <div className="p-5">
            <FaReact size={75} />
          </div>
          <div className="p-5">
            <FaNodeJs size={75} />
          </div>
          <div className="p-5">
            <TbBrandReactNative size={75} />
          </div>
          <div className="p-5">
            <TbBrandNextjs size={75} />
          </div>
          <div className="p-5">
            <SiNestjs size={75} />
          </div>
          <div className="p-5">
            <SiPlaywright size={75} />
          </div>
          <div className="p-5">
            <SiPuppeteer size={75} />
          </div>
          <div className="p-5">
            <FaGolang size={75} />
          </div>
          <div className="p-5">
            <TbBrandCSharp size={75} />
          </div>
          <div className="p-5">
            <FaPhp size={75} />
          </div>
          <div className="p-5">
            <FaAws size={75} />
          </div>
          <div className="p-5">
            <FaLaravel size={75} />
          </div>
          <div className="p-5">
            <TbBrandMysql size={75} />
          </div>
          <div className="p-5">
            <SiMongodb size={75} />
          </div>
          <div className="p-5">
            <FaLinux size={75} />
          </div>
          <div className="p-5">
            <FaJira size={75} />
          </div>
        </Marquee>
      </section>

      <section className="container mx-auto max-w-screen-lg">
        <div className="py-8">
          <h2 className="text-2xl text-muted-foreground">Projetos</h2>
        </div>

        <ul className="flex flex-col space-y-8">
          {projects.map((project) => (
            <li key={project.name}>
              <Card>
                <CardHeader>
                  <CardTitle className={spaceMono.className}>{project.name}</CardTitle>
                </CardHeader>
                <CardContent>{project.description}</CardContent>

                <CardFooter className="space-x-3">
                  <p className="text-sm text-muted-foreground">Tecnologias:</p>

                  <ul className="flex gap-2 flex-wrap">
                    {project.stack.map((technology, i) => (
                      <code
                        key={i}
                        className={cn(
                          spaceMono.className,
                          "relative rounded bg-muted px-[0.3rem] py-[0.2rem] text-sm font-semibold"
                        )}
                      >
                        {technology}
                      </code>
                    ))}
                  </ul>
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
