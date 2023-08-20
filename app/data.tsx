import { ReactNode } from "react";

interface Project {
  name: string;
  description: ReactNode;
  image?: string;
  stack: ReactNode[];
}

export const projects: Project[] = [
  {
    name: "Sintesc",
    description: (
      <div className="space-y-3">
        <p>
          Foi o sistema em que comecei a carreira de Desenvolvedor Junior. Meu principal trabalho foi a criação e
          manutenção de formulários complexos contendo integrações com diferentes APIs, sendo a mais desafiadora a API
          do Google Maps que foi usada para calculo de tempo decorrido entre paradas e também a distância entre os
          pontos de uma viagem.
        </p>
        <p>
          Além disso, fui responsável pela manutenção e criação de automações. Com base nos formulários anteriores,
          criei um RPA que acessa plataformas de órgãos públicos e geram documentos que são usados pelos motoristas
          participantes da cooperativa.
        </p>
        <p>Aprendi muito com o projeto e foi com ele que eu consegui alavancar no Desenvolvimento Web.</p>
      </div>
    ),
    stack: ["Laravel", "Nodejs", "Selenium", "Puppeteer"],
  },
  {
    name: "Claro",
    description:
      "Minha participação nos projetos da claro foram manutenção e criação de automações em lojas online. O papel dos robôs é scanear preço nas demais lojas concorrentes e outros marketplaces, salvar no banco e com a finalidade do cliente conseguir ter uma base de valores e conseguir tomar decisões em cima das analises.",
    stack: ["Laravel", "Nodejs", "Playwright", "Puppeteer"],
  },
  {
    name: "SST Pro",
    description:
      "O SST é uma comunidade de investidores focado no Day Trade. Este projeto, foi o primeiro que construi a maior parte desde o 0, e foi um divisor de águas na minha experiência. O projeto era uma “simples” aplicação para reunir a comunidade do SST em um lugar, inspirado no discord, contem um chat tempo-real podendo também fazer chamadas de voz (integrando uma API agora.io para as chamadas), além de um conjunto de ferramentas focadas no investimento que são liberadas através de uma integração com a Hotmart. Meu papel foi a construção de quase todo o projeto, incluindo os CRUDS, as integrações com agora.io e hotmart, além de ser o projeto em que usei microserviços pela primeira vez.",
    stack: ["Nodejs", "Express", "React", "Typescript", "Socket.io", "Agora.io", "Mongodb"],
  },
  {
    name: "GPTexto",
    description:
      "Este projeto tem como objetivo facilitar o uso do GPT da OpenAI, para criação automática de páginas HTML, com prompts compostos (incluindo geração de imagens). Além disso ele também serve como uma rede social com todas as funcionalidades básicas, de curtidas, seguidores, compartilhamentos, comentários, coleções. O projeto foi feito 100% por mim, incluindo todas as áreas de integração, frontend, backend, design.",
    stack: ["NextJS", "Mysql", "Typescript", "OpenAI"],
  },
  {
    name: "Thauros",
    description:
      "Este projeto é uma automação para busca automática no preço de relógios. Foi um projeto rápido por ser mais simples: o usuário agenda uma execução do robô que vai em algumas plataformas de venda de relógios e busca o preço de todos os items vendidos e apresenta no dashboard. O projeto também foi feito 100% por mim. A minha decisão foi criar uma fila para execução dos robôs utilizando BullMQ (Redis).",
    stack: ["NextJS", "Mysql", "Typescript", "Redis"],
  },
  {
    name: "Fox Analytics",
    description:
      "Este projeto serve para análise da quantidade de ouvintes em determinadas rádios. O meu papel foi a construção de uma automação que busca os ouvintes (através do IP) em cada rádio e fica monitorando para entender novos ouvintes e antigos, ... PENDENTE FINALIZAR",
    stack: [],
  },
  {
    name: "Bulbe",
    description: "PENDENTE FINALIZAR",
    stack: [],
  },
  {
    name: "Jade Autism",
    description: "PENDENTE FINALIZAR",
    stack: [],
  },
  {
    name: "Curso JS Fullstack",
    description: "PENDENTE FINALIZAR",
    stack: [],
  },
];
