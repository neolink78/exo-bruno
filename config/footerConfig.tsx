type FooterConfigProps = {
    [key: string]: {
      label: string
      url: string
    }[]
}

export const footerConfig: FooterConfigProps = {
      Solutions: [
          {label: 'For enterprises', url: '/enterprises'},
          {label: 'For investors', url: '/investors'},
          {label: 'For Banks & Insurers', url: '/insurers'},
          {label: 'Become a partner', url: '/partnership'},
      ],
      Platform: [
          {label: 'Collecte & Reporting ESG', url: '/esg'},
          {label: 'Bilan Carbone', url: '/carbone'},
          {label: 'Conformité CSRD', url: '/csrd'},
          {label: 'Analyse de la biodiversité', url: '/bio'},
          {label: 'Analyse des risques et de la double matérialité', url: '/analyse'},
      ],
      Greenscope: [
          {label: 'About us', url: '/about'},
          {label: 'Career', url: '/career'},
          {label: 'Press', url: '/press'},
          {label: 'Resources', url: '/resources'},
      ]
}
