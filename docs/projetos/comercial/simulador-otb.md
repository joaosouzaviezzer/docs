# Simulador OTB

## Descrição
Aplicação para simular projeções de venda, margem e estoque por comprador, categoria e subcategoria.

## Funcionalidades
- Agrupamento por comprador e categoria;
- Linha "TOTAL GERAL" editável (Dias Meta, Estoque Meta);
- Linhas de totais de cada categoria editáveis nas colunas Simular Venda e Simular Margem;
- Navegação entre células via teclado (Enter, Tab, setas);
- Salvamento via múltiplos POSTs;
- API com fallback inteligente (últimos 12 meses caso o mês não tenha dados).

## Tecnologias
- Next.js, PostgreSQL, React Context + useReducer.

## Observações
- O cálculo de `dde_meta` depende do campo `dias_meta` editável;
- O campo `estoque_meta` vem da API e é sincronizado.

---

## Links Úteis
[Como usar o Simulador OTB](../../guias/comercial/como-usar-simulador-otb)

---