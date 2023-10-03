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
    description: (
      <p>
        Minha participação nos projetos da claro foram manutenção e criação de automações em lojas online. O papel dos
        robôs é scanear preço nas demais lojas concorrentes e outros marketplaces, salvar no banco e com a finalidade do
        cliente conseguir ter uma base de valores e conseguir tomar decisões em cima das analises.
      </p>
    ),
    stack: ["Laravel", "Nodejs", "Playwright", "Puppeteer"],
  },
  {
    name: "SST Pro",
    description: (
      <p>
        O SST é uma comunidade de investidores focado no Day Trade. Este projeto, foi o primeiro que construi a maior
        parte desde o 0, e foi um divisor de águas na minha experiência. O projeto era uma “simples” aplicação para
        reunir a comunidade do SST em um lugar, inspirado no discord, contem um chat tempo-real podendo também fazer
        chamadas de voz (integrando uma API agora.io para as chamadas), além de um conjunto de ferramentas focadas no
        investimento que são liberadas através de uma integração com a Hotmart. Meu papel foi a construção de quase todo
        o projeto, incluindo os CRUDS, as integrações com agora.io e hotmart, além de ser o projeto em que usei
        microserviços pela primeira vez.
      </p>
    ),
    stack: ["Nodejs", "Express", "React", "Typescript", "Socket.io", "Agora.io", "Mongodb"],
  },
  {
    name: "GPTexto",
    description: (
      <p>
        Este projeto tem como objetivo facilitar o uso do GPT da OpenAI, para criação automática de páginas HTML, com
        prompts compostos (incluindo geração de imagens). Além disso ele também serve como uma rede social com todas as
        funcionalidades básicas, de curtidas, seguidores, compartilhamentos, comentários, coleções. O projeto foi feito
        100% por mim, incluindo todas as áreas de integração, frontend, backend, design.
      </p>
    ),
    stack: ["NextJS", "Mysql", "Typescript", "OpenAI"],
  },
  {
    name: "Thauros",
    description: (
      <p>
        Este projeto é uma automação para busca automática no preço de relógios. Foi um projeto rápido por ser mais
        simples: o usuário agenda uma execução do robô que vai em algumas plataformas de venda de relógios e busca o
        preço de todos os items vendidos e apresenta no dashboard. O projeto também foi feito 100% por mim. A minha
        decisão foi criar uma fila para execução dos robôs utilizando BullMQ (Redis).
      </p>
    ),
    stack: ["NextJS", "Mysql", "Typescript", "Redis"],
  },
  {
    name: "Fox Analytics",
    description: (
      <p>
        Este projeto serve para análise da quantidade de ouvintes em determinadas rádios. O meu papel foi a construção
        de uma automação que busca os ouvintes (através do IP) em cada rádio e fica monitorando para entender novos
        ouvintes e antigos. Com isso foi possível construir uma base com informações relevantes (incluindo localidade,
        tempo médio, quantidade, pico) para as rádios associadas.
      </p>
    ),
    stack: ["Typescript", "Golang", "PHP"],
  },
  {
    name: "Bulbe",
    description: (
      <div>
        <p>
          É um projeto usado para gerenciar consumidores de energia fotovoltáica. Meu papel foi a contribuição na
          construção de parte do backend e principalmente no desenvolvimento de diversas automações:
        </p>

        <ul>
          <li>Leitura e interpretação de PDFs</li>
          <li>Leitura e interpretação de XMLs</li>
          <li>Automações para navegar na web para download de arquivos</li>
          <li>Upload, Download e Leitura de arquivos no S3 da AWS</li>
        </ul>

        <p>
          Neste projeto aproveitei para aprimorar boas práticas de programação, construi todos os serviços modulados
          para que fosse fácil a customização do fluxo sem influenciar outras partes.
        </p>

        <p>
          Com isso foi possível construção de comandos especificos para que a automação se comportasse de diferentes
          maneiras (Salvando em arquivo ou banco de dados, Utilizar cron ou não, PDF ou XML, mudar a fonte dos arquivos
          entre S3 ou Local...)
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
          É um dos meus projetos favoritos. Fui responsável pela criação de uma feature que permite testes iniciais de
          Transtorno do Espectro Autista
        </p>

        <p>
          Meu papel foi desde a estruturação do banco de dados MySQL responsável para gerenciar os testes e histórico,
          até construção de todo um frontend por onde seria feito os testes.
        </p>

        <p>
          O teste consiste em diferentes etapas: Wizard, Eye Tracking Gifs, Eye Tracking Pessoas. Para o wizard utilizei
          uma estrutura básica para o React. O desafio começa para o Eye Tracking: foi necessário integração com
          Webgazer para receber as coordenadas do olho, edição de imagens e gifs, interpretação das coordenadas para
          definir a pontuação de acordo com as figuras passadas.
        </p>
      </div>
    ),
    stack: ["NextJS", "Typescript", "Prisma", "Webgazer"],
  },
  {
    name: "Curso JS Fullstack",
    description: (
      <div>
        <p>Dentro da Green Signal existe um programa de cursos para web desde aulas de empreendimento até PHP</p>
        <p>Eu fui chamado para criar um curso ensinando Javascript avançado (ES6+), NodeJS e ReactJS</p>
        <p>
          Para isso tive a ideia de ensinar a criação de um Chat Realtime, onde ensinei desde o necessário do JS para
          começar com React, criação de APIs usando ExpressJS, estruturação do banco de dados usando Prisma, conexão
          entre Frontend e Backend, Socket.io para realtime.
        </p>
      </div>
    ),
    stack: ["NodeJS", "ReactJS", "ExpressJS", "Socket.io"],
  },
];
