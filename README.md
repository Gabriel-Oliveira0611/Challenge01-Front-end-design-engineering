# 🌿 EcoPulse | SoulUp Challenge - FIAP

Link para o repositório:
https://github.com/Gabriel-Oliveira0611/Challenge01-Front-end-design-engineering

## 📖 Sobre o Projeto
O **EcoPulse** é uma plataforma de engajamento e gamificação sustentável desenvolvida para o *SoulUp Challenge* em parceria com a Rede Prospera. O objetivo principal do ecossistema é transformar pequenas ações ecológicas cotidianas (como economia de energia e reciclagem) em uma experiência dinâmica, onde o usuário acumula pontos para trocar por benefícios reais, como descontos na conta de luz e créditos de mobilidade urbana (EcoMobilidade).

O grande diferencial interativo da plataforma é o **Souly**, um assistente virtual baseado em IA (representado por uma arara-azul) que guia o usuário, sugere missões diárias personalizadas e informa sobre recompensas em tempo real.

## 👨‍💻 Equipe de Desenvolvimento
Projeto desenvolvido pelos alunos do curso de Análise e Desenvolvimento de Sistemas (ADS) - FIAP:

* **Gabriel Pereira de Oliveira** - RM 572262
* **Adalto Massahiro Nagabe** - RM 57298
* **Pedro Henrique Carvalho** - RM 570492
* **Murillo Siviero Lopes** - RM 572724

## 🚀 Estrutura e Funcionalidades da Aplicação
O front-end foi arquitetado em múltiplas páginas, mantendo uma identidade visual consistente e navegação fluida:

* `index.html`: Landing page principal com apresentação do projeto e vitrine das soluções autossustentáveis.
* `sobre.html`: Detalhamento institucional, apresentando a Missão, Visão e Valores da startup.
* `sobreSouly.html`: Perfil técnico do assistente virtual, destacando suas funcionalidades de inteligência artificial.
* `soulyComoGuia.html`: Demonstração prática (via mockups em vídeo) do Souly interagindo com a interface da rede social.
* `faq.html`: Central de ajuda com sistema de *Accordion* interativo para as perguntas frequentes da comunidade.
* `integrantes.html`: Perfis da equipe de desenvolvimento com links de contato profissional.
* `contato.html`: Formulário completo para suporte e parcerias.

## 🛠️ Destaques Técnicos e Critérios de Avaliação (FIAP)

Este projeto foi construído seguindo rigorosamente as boas práticas de desenvolvimento web moderno:

1. **Acessibilidade (Web Content Accessibility Guidelines - WCAG):**
   * Implementação intensiva de atributos `aria-label` nas tags semânticas (`<nav>`, `<section>`, `<main>`, `<footer>`) para descrever blocos de conteúdo para leitores de tela.
   * Uso de `aria-hidden="true"` em ícones e emojis puramente decorativos.
   * Atributos dinâmicos (`aria-expanded`, `aria-controls`) e atributos de formulário (`aria-required`, `aria-describedby`) para garantir uma navegação inclusiva e acessível a portadores de deficiência visual.

2. **Responsividade Avançada (Mobile First & Media Queries):**
   * Estrutura inteiramente baseada em **Flexbox** para alinhamento dinâmico e flexível.
   * Uso de funções CSS modernas como `clamp()` na Hero Section para tipografia fluida.
   * *Media Queries* configuradas em pontos de quebra estratégicos (ex: `1300px`, `1150px`, `992px`, `768px`) garantindo que layouts complexos — como o grid de integrantes de 4 colunas — se adaptem perfeitamente para 2 colunas em tablets e 1 coluna em smartphones.

3. **UI/UX e Consistência Visual:**
   * Utilização de variáveis CSS (`:root`) para controle global da paleta de cores, tipografia e espaçamentos.
   * Implementação do comportamento *Sticky Footer* utilizando `flex: 1` no container principal, evitando que o rodapé flutue em páginas com pouco conteúdo.

## ⚙️ Como executar o projeto
1. Faça o clone ou o download deste repositório.
2. Extraia os arquivos.
3. Abra o arquivo `index.html` em qualquer navegador web moderno.
4. *(Recomendado)* Para uma experiência de desenvolvimento completa, abra a pasta do projeto no VS Code e utilize a extensão **Live Server**.

---
*Projeto acadêmico desenvolvido para a FIAP - 2026*