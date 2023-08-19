import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "./data";

export default function Home() {
  return (
    <main>
      <header className="container mx-auto max-w-screen-lg py-20">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Arthur Mendes Pereira</h1>
        <p className="text-xl text-muted-foreground">Desenvolvedor de Softwares</p>
      </header>

      <section className="container mx-auto max-w-screen-lg">
        <ul className="flex flex-col space-y-8">
          {projects.map((project) => (
            <li key={project.name}>
              <Card>
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                </CardHeader>
                <CardContent>{project.description}</CardContent>

                <CardFooter className="space-x-3">
                  <p className="text-sm text-muted-foreground">Tecnologias:</p>

                  <ul className="flex gap-2 flex-wrap">
                    {project.stack.map((technology) => (
                      <code
                        key={technology}
                        className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
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
