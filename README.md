# Landing

Um teste simples de uma landing page montada com [PrimeNG](https://primeng.org).

## Instalação

```bash
npm install primeng primeicons primeflex
```

## Configuração

Importado os arquivos abaixo no `styles.css`:

```css
@import "primeng/resources/themes/lara-light-blue/theme.css";
@import "primeng/resources/primeng.css";
@import "primeflex/primeflex.css";
@import "primeicons/primeicons.css";
```

O tema pode ser escolhido em [https://primeng.org/theming](https://primeng.org/theming#builtinthemes).

## Uso

O único módulo importado neste exemplo foi o `ButtonModule` utilizado com `p-button`:

```typescript
import { ButtonModule } from "primeng/button";
```

Para renderizar o conteúdo, foram utilizados os blocos disponíveis em [https://blocks.primeng.org](https://blocks.primeng.org/#/free).
