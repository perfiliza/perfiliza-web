# Design tokens — referência epic.new

Tokens extraídos de https://epic.new (homepage pt-BR) via Playwright + DevTools em 2026-05-01.
Usar como **inspiração visual** (paleta, tipografia, escala). Nada de copiar conteúdo nem layout protegido.

## Paleta — versão Perfiliza

Mantemos o CTA principal em verde WhatsApp (`#25D366`) porque é a cor canônica do canal. O resto da paleta segue o "warm light mode" da epic.new.

| Token              | Hex         | Uso                                        | Origem epic.new                    |
|--------------------|-------------|--------------------------------------------|------------------------------------|
| `--color-bg`       | `#F6F0E9`   | Fundo principal (beige creme)              | `--beige-default` / `--background` |
| `--color-surface`  | `#F8F4ED`   | Cards e containers elevados                | `--card`                           |
| `--color-surface-alt` | `#EDE8DD` | Seções alternadas                          | `--muted`                          |
| `--color-ink`      | `#231D17`   | Texto principal (warm deep brown)          | `--foreground`                     |
| `--color-muted`    | `#75695B`   | Texto secundário                           | `--muted-foreground`               |
| `--color-line`     | `#D6C9B5`   | Bordas suaves                              | `--border`                         |
| `--color-primary`  | `#4A5A3A`   | Verde-oliva — links, números, ícones       | `--primary`                        |
| `--color-accent`   | `#CB6149`   | Terracota — destaque secundário            | `--red-default`                    |
| `--color-action`   | `#25D366`   | Verde WhatsApp — CTA principal             | (manter, marca canônica)            |
| `--color-action-dark` | `#1FA851`| Hover do CTA WhatsApp                      | (manter)                            |

## Tipografia

| Elemento | Família                    | Tamanho/lh                | Weight | Letter-spacing |
|----------|----------------------------|---------------------------|--------|----------------|
| h1       | **Lora** (serif)           | 48px / 57.6px             | 400    | -0.96px        |
| h2       | Lora                       | 36px / 46.8px             | 400    | -0.72px        |
| h3       | Geist (sans)               | 14px / 21px               | 500    | normal         |
| body     | **Geist** (sans)           | 16px / 24px               | 400    | -0.025em       |
| small    | Geist                      | 15px / 22px               | 400    | normal         |

- Hero usa Lora em peso 400 (serif elegante, não bold) — escala bem em 48–72px no desktop.
- Body inteiramente em Geist com `letter-spacing: -0.025em` para densidade visual.
- Line-heights apertadas em headings (1.2–1.3), 1.5 em body.

## Espaçamento de seção

| Contexto             | Padding (top/bottom) |
|----------------------|----------------------|
| Hero (primeira)      | `96px / 64px`        |
| Demais seções        | `48px / 48px`        |
| Mobile (estimativa)  | reduzir ~30%         |

## Border-radius

- Padrão (`--radius`): **11.6px** (`0.725rem`) — usado em cards e botões médios.
- Variantes: `--radius-sm` ~7.6px, `--radius-2xl` 16px, `--radius-3xl` 24px.

## Sombras

- `--drop-shadow-xs`: `0 1px 1px rgba(0,0,0,0.05)` — bordas sutis.
- `--drop-shadow-lg`: `0 4px 4px rgba(0,0,0,0.15)` — destaques médios.
- Card forte: `rgba(0,0,0,0.25) 0 2px 13.7px 5px` — para hero/destaques específicos.

Para o nosso uso vamos manter um único `--shadow-lift` calmo:
`0 1px 2px rgba(35,29,23,0.04), 0 8px 24px -8px rgba(35,29,23,0.12)`.

## Notas

- Custom brand vars úteis caso a gente queira ampliar mais tarde:
  `--olive-default: #767e6b`, `--brown-default: #2b180a`, `--brown-light: #55463b`.
- Epic.new usa Tailwind v4 + tokens em `:root` (mesma abordagem que adotamos em `globals.css`).
- Não capturamos screenshots (só inspeção via DOM). Se surgir necessidade de comparação visual mais fina, abrir epic.new num navegador e tirar prints manualmente para `design-reference/`.
