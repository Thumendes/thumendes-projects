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
        Sistema pelo qual comecei a carreira de Desenvolvedor Junior. Minhas principais responsabilidades envolviam a
        criação e manutenção de formulários avançados com integrações a diversas APIs, destacando-se a integração com a
        API do Google Maps, utilizada para calcular tempo e distância entre pontos de uma rota. Adicionalmente,
        desenvolvi e mantive automações, incluindo um RPA que interage com plataformas de órgãos públicos para gerar
        documentos essenciais aos motoristas da cooperativa. Este projeto foi fundamental para meu crescimento no
        Desenvolvimento Web.
      </div>
    ),
    stack: ["Laravel", "Nodejs", "Selenium", "Puppeteer"],
  },
  {
    name: "Claro",
    description: (
      <p>
        Participei ativamente dos projetos da Claro, focando na manutenção e desenvolvimento de automações para lojas
        online. Essas automações têm como função escanear e comparar preços de lojas concorrentes e outros marketplaces,
        armazenando esses dados em um banco. Isso proporciona ao cliente uma base sólida de valores, permitindo tomadas
        de decisões baseadas em análises concretas.
      </p>
    ),
    stack: ["Laravel", "Nodejs", "Playwright", "Puppeteer"],
  },
  {
    name: "SST Pro",
    description: (
      <p>
        O SST é uma plataforma dedicada à comunidade de investidores com ênfase em Day Trade. Fui fundamental na
        construção deste projeto desde sua concepção, o que marcou um momento decisivo em minha trajetória profissional.
        Inspirado no Discord, o sistema possui um chat em tempo real e capacidade de chamadas de voz, integrando a API
        da agora.io. Adicionalmente, oferece ferramentas de investimento disponibilizadas por meio da integração com a
        Hotmart. Fui responsável por desenvolver a maior parte das funcionalidades, incluindo os CRUDs e integrações com
        as APIs mencionadas. Importante destacar que a implementação de microserviços, que utilizei pela primeira vez
        neste projeto, foi uma ideia que propus.
      </p>
    ),
    stack: ["Nodejs", "Express", "React", "Typescript", "Socket.io", "Agora.io", "Mongodb"],
  },
  {
    name: "GPTexto",
    description: (
      <p>
        O objetivo deste projeto é otimizar o uso do GPT da OpenAI, permitindo a geração automática de páginas HTML
        através de prompts avançados, incluindo a criação de imagens. Adicionalmente, incorpora características de uma
        rede social, abrangendo funcionalidades essenciais como curtidas, seguidores, compartilhamentos, comentários e
        coleções. Fui integralmente responsável por todas as etapas do projeto, desde a integração até o design,
        passando pelo frontend e backend.
      </p>
    ),
    stack: ["NextJS", "Mysql", "Typescript", "OpenAI"],
  },
  {
    name: "Thauros",
    description: (
      <p>
        O projeto consiste em uma automação destinada à busca automática de preços de relógios em diversas plataformas
        de venda. A interface permite que o usuário programe a execução do robô, que, por sua vez, recupera e exibe os
        preços dos itens no dashboard. Toda a concepção e desenvolvimento foi realizado exclusivamente por mim. Optei
        por implementar uma fila para a execução dos robôs utilizando BullMQ com base em Redis.
      </p>
    ),
    stack: ["NextJS", "Mysql", "Typescript", "Redis"],
  },
  {
    name: "Fox Analytics",
    description: (
      <p>
        O objetivo deste projeto é analisar a quantidade de ouvintes em rádios específicas. Fui responsável pela criação
        de uma automação que rastreia os ouvintes por meio de seus IPs em cada estação de rádio, monitorando tanto os
        novos quanto os antigos ouvintes. A partir desta automação, estabelecemos uma base de dados contendo informações
        cruciais, como localização, tempo médio de escuta, quantidade total de ouvintes e picos de audiência,
        beneficiando as rádios associadas.
      </p>
    ),
    stack: ["Typescript", "Golang", "PHP"],
  },
  {
    name: "Bulbe",
    description: (
      <div>
        <p>
          O projeto visa gerenciar consumidores de energia fotovoltaica. Desempenhei um papel fundamental contribuindo
          para o desenvolvimento do backend e, mais notavelmente, na elaboração de diversas automações:
        </p>

        <ul>
          <li>Interpretação e leitura de PDFs;</li>
          <li>Interpretação e leitura de XMLs;</li>
          <li>Automações web para baixar arquivos;</li>
          <li>Manipulação (upload, download e leitura) de arquivos no S3 da AWS.</li>
        </ul>

        <p>
          Durante o desenvolvimento, dediquei-me ao aperfeiçoamento de boas práticas de programação. Projetei todos os
          serviços de maneira modular, assegurando que qualquer customização em um fluxo não impactasse outras partes do
          sistema.
        </p>

        <p>
          Esse design permitiu a criação de comandos específicos, possibilitando que a automação operasse de variadas
          formas — seja salvando em arquivo ou banco de dados, usando cron jobs ou não, optando entre PDF ou XML, e
          alternando a fonte dos arquivos entre S3 e armazenamento local.
        </p>
      </div>
    ),
    stack: ["Typescript", "ExpressJS", "puppeteer", "playwright", "aws-sdk", "NodeJS"],
  },
  {
    name: "Jade Autism",
    description: (
      <div>
        <p>
          Este projeto ocupa um lugar especial em minha trajetória. Nele, fui incumbido da criação de uma funcionalidade
          que possibilita testes preliminares para o Transtorno do Espectro Autista.
        </p>

        <p>
          Assumi desde a concepção da estrutura do banco de dados MySQL, encarregado de administrar os testes e
          registros associados, até o desenvolvimento completo do frontend, interface pela qual os testes seriam
          realizados.
        </p>

        <p>
          O teste é segmentado em diferentes fases: um Wizard, Eye Tracking com Gifs e Eye Tracking com Pessoas. Para o
          Wizard, adotei uma estrutura padrão para o React. Entretanto, a complexidade aumentou no segmento de Eye
          Tracking. Foi imprescindível integrar o Webgazer para captar as coordenadas oculares, além de trabalhar com
          edição de imagens e gifs. A partir destas coordenadas, desenvolvi uma lógica para atribuir pontuações conforme
          as imagens apresentadas ao usuário.
        </p>
      </div>
    ),
    stack: ["NextJS", "Typescript", "Prisma", "Webgazer"],
  },
  {
    name: "Curso JS Fullstack",
    description: (
      <div>
        <p>
          A Green Signal oferece um programa abrangente de cursos voltados para a web, cobrindo tópicos desde
          empreendedorismo até programação em PHP.
        </p>

        <p>Fui convidado a desenvolver um curso focado em Javascript avançado (ES6+), NodeJS e ReactJS.</p>

        <p>
          Para proporcionar uma experiência prática e enriquecedora aos alunos, propus a construção de um Chat em Tempo
          Real. Durante o curso, abordei fundamentos de Javascript essenciais para trabalhar com React, a criação de
          APIs utilizando ExpressJS, estruturação de banco de dados com Prisma, a integração entre Frontend e Backend e
          a implementação do Socket.io para funcionalidades em tempo real.
        </p>
      </div>
    ),
    stack: ["NodeJS", "ReactJS", "ExpressJS", "Socket.io"],
  },
];
