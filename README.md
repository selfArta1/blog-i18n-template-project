This is a template for next js with local font.
To keep all of otf ttf woff2 file are binary, should create .gitatttibutes

only install following dependencies

pnpm i daisyui@latest
pnpm add --save-dev --save-exact prettier
pnpm install --save-dev eslint-config-prettier
pnpm install -D prettier-plugin-tailwindcss

for next i18n should
pnpm install next-intl

I18N configuration, reference https://nextjs.org/docs/app/building-your-application/routing/internationalization
Why favicon.ico can't not display in i18N environment
see https://github.com/vercel/next.js/issues/52813 only change favicon.ico to icon.ico
