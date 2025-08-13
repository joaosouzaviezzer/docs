// @ts-check
/**
 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
*/
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Projetos',
      items: [
        {
          type: 'category',
          label: 'Logística',
          items: [
            'projetos/logistica/monitoramento-cd',
          ],
        },
        {
          type: 'category',
          label: 'Ferramentas',
          items: [
            'projetos/ferramentas/bip360',
          ],
        },
        {
          type: 'category',
          label: 'Comercial',
          items: [
            'projetos/comercial/cadastro-otb',
            'projetos/comercial/cadastro-margem-loja',
            'projetos/comercial/cadastro-sem-compradores',
            'projetos/comercial/simulador-otb',
          ],
        },
        {
          type: 'category',
          label: 'Administrativo',
          items: [
            'projetos/administrativo/cadastro-quadro-ideal',
            'projetos/administrativo/cadastro-quadro-realizado',
            'projetos/administrativo/cadastro-funcionarios',
            'projetos/administrativo/cadastro-lojas-maduras',
          ],
        },
        'projetos/crud-generico',
        'projetos/feedback',
      ],
    },
    {
      type: 'category',
      label: 'Guias',
      items: [
        {
          type: 'category',
          label: 'Logística',
          items: [
            'guias/logistica/como-interpretar-monitoramento-cd',
          ],
        },
        {
          type: 'category',
          label: 'Ferramentas',
          items: [
            'guias/ferramentas/como-usar-bip360',
          ],
        },
        {
          type: 'category',
          label: 'Comercial',
          items: [
            'guias/comercial/como-usar-cadastro-otb',
            'guias/comercial/como-usar-cadastro-margem-loja',
            'guias/comercial/como-usar-cadastro-sem-compradores',
            'guias/comercial/como-usar-simulador-otb',
          ],
        },
        {
          type: 'category',
          label: 'Administrativo',
          items: [
            'guias/administrativo/como-usar-cadastro-quadro-ideal',
            'guias/administrativo/como-usar-cadastro-quadro-realizado',
            'guias/administrativo/como-usar-cadastro-funcionarios',
            'guias/administrativo/como-usar-cadastro-lojas-maduras',
          ],
        },
        'guias/como-configurar-crud',
        'guias/como-enviar-feedback',
      ],
    },
    'faq'
  ],
};

export default sidebars;
