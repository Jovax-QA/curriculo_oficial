# Currículo - Jovani Miguel Custódio

Site de currículo pessoal desenvolvido em React + Vite + TypeScript + Tailwind CSS.

## Como rodar localmente

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Abrir no navegador
# http://localhost:5173
```

## Como fazer o build (versão final para hospedar)

```bash
npm run build
```

Os arquivos prontos estarão na pasta `dist/`. Você pode hospedar essa pasta em qualquer servidor estático (Netlify, Vercel, GitHub Pages, etc.).

## Stack

- React 18
- Vite 5
- TypeScript 5
- Tailwind CSS 3

## Estrutura

```
src/
  App.tsx                    # Layout principal (sidebar + conteúdo)
  components/
    Sidebar.tsx              # Menu lateral de navegação
    sections/
      About.tsx              # Seção "Sobre"
      Experience.tsx         # Seção "Experiência"
      Education.tsx          # Seção "Educação"
      Skills.tsx             # Seção "Habilidades" (barras de progresso)
      Contact.tsx            # Seção "Contato"
```
