const productImages = {
  pa66: '/images/pellets.png',
  pbt: '/images/app-breaker.png',
  pcabs: '/images/app-connector.png',
  pom: '/images/app-dip-switch.png',
  pp: '/images/app-relay.png',
};

export const content = {
  en: {
    brandName: 'Guangjun Plastics Technology',
    brandCn: '广俊塑料科技',
    openMenu: 'Open navigation',
    closeMenu: 'Close navigation',
    nav: {
      home: 'Home',
      about: 'About Us',
      products: 'Products',
      news: 'News',
      contact: 'Contact Us',
    },
    hero: {
      title: 'Engineered Modified Plastics for Global Manufacturing',
      subtitle:
        'High-performance, sustainable compounds for automotive, electrical, energy and precision industrial applications.',
      primaryCta: 'Explore Products',
      secondaryCta: 'Contact Us',
      trustLabel: 'Manufacturing capabilities',
      proof: ['Export-ready service', 'Material customization', 'Reliable quality control'],
      imageAlt: 'Engineered plastic materials and factory production line',
    },
    about: {
      label: 'Company Video',
      title: 'Committed to Innovation. Focused on Value.',
      body:
        'GJ Guangjun integrates formulation development, compounding production and application support to deliver modified plastics that help global partners build better products with confidence.',
      points: ['R&D formulation support', 'Stable batch production', 'International trade response'],
      button: 'Watch Video',
      videoLabel: 'Company introduction video preview',
      videoAlt: 'GJ Guangjun modern factory building',
    },
    aboutPage: {
      title: 'About GJ Guangjun',
      body:
        'Watch how GJ Guangjun connects formulation development, compounding production and material testing into a responsive manufacturing system for global customers.',
      videoTag: 'Factory introduction',
      proof: ['Modified plastics specialist', 'Integrated production and testing', 'Export-ready technical support'],
      capabilityTitle: 'A practical manufacturing system for export customers',
      capabilityBody:
        'From requirement review to sample matching and batch delivery, every step is organized around stable material performance and responsive communication.',
      features: [
        {
          title: 'Formulation Development',
          body: 'Material platforms are adjusted for strength, flame retardancy, toughness, appearance and processing behavior.',
        },
        {
          title: 'Production Control',
          body: 'Batch production, testing records and traceable specifications support repeatable quality.',
        },
        {
          title: 'Trade Support',
          body: 'Export documents, sample coordination and technical replies help overseas buyers move faster.',
        },
      ],
      equipmentTitle: 'Factory Equipment & Testing Capability',
      equipmentBody:
        'Production and laboratory equipment support compounding, thermal analysis, flame-retardant evaluation and electrical safety verification.',
      equipment: [
        {
          title: 'Twin-screw Extrusion Line',
          tag: 'Compounding',
          body: 'Stable melt mixing and pelletizing for reinforced, flame-retardant and functional modified plastics.',
          image: '/images/设备仪器/挤出机.jpg',
        },
        {
          title: 'DSC Thermal Analyzer',
          tag: 'Thermal behavior',
          body: 'Evaluates melting, crystallization and thermal transitions for material formulation review.',
          image: '/images/设备仪器/DSC.jpg',
        },
        {
          title: 'TGA Analyzer',
          tag: 'Thermal stability',
          body: 'Measures decomposition and weight-loss behavior under controlled temperature programs.',
          image: '/images/设备仪器/TGA.jpg',
        },
        {
          title: 'Vertical Flame Tester',
          tag: 'Flame retardancy',
          body: 'Supports flame-retardant performance checks for electrical and electronic material applications.',
          image: '/images/设备仪器/垂直燃烧测试仪.jpg',
        },
        {
          title: 'Glow Wire Tester',
          tag: 'Safety testing',
          body: 'Verifies ignition resistance and glow-wire behavior for components used in electrical systems.',
          image: '/images/设备仪器/灼热丝测试仪.jpg',
        },
        {
          title: 'Tracking Index Tester',
          tag: 'Electrical safety',
          body: 'Tests resistance to tracking under surface contamination and electrical stress conditions.',
          image: '/images/设备仪器/漏电起痕测试仪.jpg',
        },
        {
          title: 'Infrared Spectrometer',
          tag: 'Material identification',
          body: 'Assists resin identification, formulation comparison and incoming material verification.',
          image: '/images/设备仪器/红外.jpg',
        },
      ],
      reportTitle: 'UL Certification Reports',
      reportBody:
        'UL report previews are shown below. Click any report to open the original certification page.',
      reportLinkText: 'Open original report',
      reports: [
        {
          code: 'GJ-QC-01',
          type: 'UL Inspection Report',
          title: '320G3 UL Certification Report',
          image: '/images/reports/320G3.png',
          link: 'https://iq.ul.com/ul/cert.aspx?ULID=104758973',
          meta: [
            { name: 'Grade', value: '320G3' },
            { name: 'Source', value: 'UL Prospector' },
            { name: 'Link', value: 'ULID 104758973' },
          ],
        },
        {
          code: 'GJ-QC-02',
          type: 'UL Inspection Report',
          title: '320G4 UL Certification Report',
          image: '/images/reports/320G4.png',
          link: 'https://iq.ul.com/ul/cert.aspx?ULID=104758972',
          meta: [
            { name: 'Grade', value: '320G4' },
            { name: 'Source', value: 'UL Prospector' },
            { name: 'Link', value: 'ULID 104758972' },
          ],
        },
        {
          code: 'GJ-QC-03',
          type: 'UL Inspection Report',
          title: '320G6 UL Certification Report',
          image: '/images/reports/320G6.png',
          link: 'https://iq.ul.com/ul/cert.aspx?ULID=104761111',
          meta: [
            { name: 'Grade', value: '320G6' },
            { name: 'Source', value: 'UL Prospector' },
            { name: 'Link', value: 'ULID 104761111' },
          ],
        },
      ],
    },
    products: {
      title: 'Product Families',
      subtitle: 'Application-led material platforms for demanding manufacturing conditions.',
      inquire: 'Inquire',
      items: [
        {
          title: 'Glass Fiber Reinforced Compounds',
          description: 'High strength and stiffness for structural applications.',
          image: productImages.pa66,
        },
        {
          title: 'Flame Retardant Compounds',
          description: 'Enhanced safety performance for electrical and electronics.',
          image: productImages.pbt,
        },
        {
          title: 'Impact Modified Compounds',
          description: 'Toughness and durability in demanding environments.',
          image: productImages.pcabs,
        },
        {
          title: 'Special Function Compounds',
          description: 'Tailored properties for unique industrial requirements.',
          image: productImages.pom,
        },
        {
          title: 'Custom Solutions & Technical Service',
          description: 'Material development and testing to drive your success.',
          image: productImages.pp,
        },
      ],
    },
    productsPage: {
      title: 'Modified Plastics Products',
      body:
        'Browse material families for automotive, electrical, electronics, energy, appliances and precision industrial applications.',
    },
    solutions: {
      label: 'Technical Platform',
      title: 'From resin selection to export delivery, every specification is traceable.',
      body:
        'Our team supports color matching, reinforcement, flame retardancy, weather resistance and processing optimization for injection molding and extrusion customers.',
      imageAlt: 'Laboratory material testing and modified plastics research',
      specs: [
        { name: 'Base resins', value: 'PA6, PA66, PBT, PC/ABS, PP, POM' },
        { name: 'Applications', value: 'Auto, electronics, energy, appliances' },
        { name: 'Support', value: 'TDS, sample matching, export documents' },
      ],
    },
    news: {
      title: 'Latest News',
      subtitle: 'Company updates, technical progress and international market activity.',
      featureLabel: 'Featured Update',
      readMore: 'Read more',
      categories: [
        {
          kicker: 'Company',
          title: 'Company Activity',
          body: 'Exhibition news, customer visits and export service updates from GJ Guangjun.',
        },
        {
          kicker: 'Technology',
          title: 'R&D Progress',
          body: 'Laboratory capability, material testing and formulation platform upgrades.',
        },
        {
          kicker: 'Application',
          title: 'Material Releases',
          body: 'New compound series and application notes for demanding manufacturing scenarios.',
        },
      ],
      items: [
        {
          date: 'May 15, 2026',
          category: 'Company Activity',
          title: 'Thank You for Visiting Us at Chinaplas 2026',
          summary:
            'The exhibition created direct conversations around modified plastics for automotive, electrical and precision component applications.',
          image: '/images/news/chinaplas-2026.png',
        },
        {
          date: 'April 28, 2026',
          category: 'Technology Progress',
          title: 'New R&D Lab Upgrade Strengthens Material Innovation',
          summary:
            'Expanded testing and sample evaluation capacity helps the team respond faster to custom performance requirements.',
          image: '/images/news/rd-lab-upgrade.png',
        },
        {
          date: 'April 10, 2026',
          category: 'Product Release',
          title: 'New Glass Fiber Reinforced Series for Demanding Applications',
          summary:
            'The new series focuses on higher stiffness, dimensional stability and processing consistency for structural parts.',
          image: '/images/news/glass-fiber-series.png',
        },
        {
          date: 'March 26, 2026',
          category: 'Export Service',
          title: 'Export Documentation Workflow Optimized for Overseas Buyers',
          summary:
            'Quotation, sample confirmation and technical document preparation are organized to shorten cross-border communication cycles.',
          image: '/images/news/export-documentation.png',
        },
        {
          date: 'March 8, 2026',
          category: 'Application Note',
          title: 'Material Selection Notes for Electrical Component Housings',
          summary:
            'The guide reviews flame retardancy, tracking resistance, toughness and appearance requirements for injection molded housings.',
          image: '/images/news/electrical-housing-materials.png',
        },
        {
          date: 'February 18, 2026',
          category: 'Quality Control',
          title: 'Batch Traceability System Supports Stable Repeat Orders',
          summary:
            'Production records, testing data and retained samples help customers maintain consistent material performance across orders.',
          image: '/images/news/batch-traceability.png',
        },
      ],
    },
    newsPage: {
      title: 'News & Technical Updates',
      body:
        'Follow company activity, material platform upgrades and application-focused updates from GJ Guangjun.',
    },
    newsDetail: {
      back: 'Back to news',
      sidebarKicker: 'Material support',
      sidebarTitle: 'Need more technical details?',
      sidebarBody:
        'Share your application, processing method and target properties. The GJ Guangjun team can provide material direction and sample support.',
      contactCta: 'Contact Us',
      relatedTitle: 'Related News',
      fallbackParagraph:
        'GJ Guangjun continues to connect formulation development, production control and export service so customers can evaluate material options with clearer information.',
      fallbackClosing:
        'For project-specific requirements, the team can review target performance, processing conditions and delivery expectations before recommending the next step.',
    },
    homeContact: {
      title: 'Need a material recommendation or export quotation?',
      body:
        'Share the application, processing method, target property and annual demand. Our team will recommend a suitable direction.',
      button: 'Start an Inquiry',
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Send your material requirements and our trade team will respond quickly.',
      factoryAlt: 'Modern Guangjun Plastics Technology manufacturing campus',
      mapTitle: 'Guangjun Plastics Technology location map',
      mapLocation: 'Taizhou, Zhejiang, China',
      addressTitle: 'Address',
      address: 'No. 168, Guangjun Road, Huangyan, Taizhou, Zhejiang, China',
      phoneTitle: 'Phone',
      emailTitle: 'Email',
      webTitle: 'Website',
      hoursTitle: 'Hours',
      hours: 'Mon - Fri 8:30 - 17:30 GMT+8',
      name: 'Your name',
      email: 'Business email',
      message: 'Material grade, application, annual demand',
      submit: 'Submit Inquiry',
    },
  },
  zh: {
    brandName: 'Guangjun Plastics Technology',
    brandCn: '广俊塑料科技',
    openMenu: '打开导航',
    closeMenu: '关闭导航',
    nav: {
      home: '首页',
      about: '关于我们',
      products: '产品中心',
      news: '新闻资讯',
      contact: '联系我们',
    },
    hero: {
      title: '面向全球制造的改性塑料解决方案',
      subtitle: '为汽车、电气、能源与精密工业客户提供高性能、可持续、可定制的改性材料。',
      primaryCta: '查看产品',
      secondaryCta: '联系销售',
      trustLabel: '制造能力',
      proof: ['外贸交付支持', '材料定制开发', '稳定质量管控'],
      imageAlt: '改性塑料材料与工厂生产线',
    },
    about: {
      label: '企业视频',
      title: '以创新驱动材料价值，以稳定交付服务客户。',
      body:
        '广俊塑料科技集配方开发、改性造粒、应用支持与外贸服务于一体，为全球合作伙伴提供可靠的工程塑料解决方案。',
      points: ['配方研发支持', '批量稳定生产', '国际贸易响应'],
      button: '观看视频',
      videoLabel: '企业介绍视频预览',
      videoAlt: '广俊现代化厂房',
    },
    aboutPage: {
      title: '关于广俊塑料科技',
      body: '通过企业视频了解广俊如何把配方研发、改性造粒、材料检测和外贸服务串联成稳定响应全球客户的制造体系。',
      videoTag: '工厂视频介绍',
      proof: ['专注改性塑料', '生产与检测一体化', '支持外贸技术资料'],
      capabilityTitle: '面向外贸客户的实用制造体系',
      capabilityBody: '从需求评估、样品匹配到批量交付，每个环节都围绕稳定性能、清晰规格和快速响应展开。',
      features: [
        {
          title: '配方开发',
          body: '围绕强度、阻燃、韧性、外观和加工性能进行材料平台调整。',
        },
        {
          title: '生产管控',
          body: '通过批量生产记录、检测数据和可追溯规格保障稳定质量。',
        },
        {
          title: '外贸支持',
          body: '提供出口资料、样品协调和技术回复，帮助海外客户提高沟通效率。',
        },
      ],
      equipmentTitle: '工厂设备与检测能力',
      equipmentBody: '生产和实验室设备覆盖改性造粒、热分析、阻燃性能、电气安全和材料识别等关键环节。',
      equipment: [
        {
          title: '双螺杆挤出生产线',
          tag: '改性造粒',
          body: '用于玻纤增强、阻燃和功能改性材料的稳定混炼与切粒生产。',
          image: '/images/设备仪器/挤出机.jpg',
        },
        {
          title: 'DSC 差示扫描量热仪',
          tag: '热性能分析',
          body: '检测熔融、结晶和热转变行为，为配方评估提供数据支持。',
          image: '/images/设备仪器/DSC.jpg',
        },
        {
          title: 'TGA 热重分析仪',
          tag: '热稳定性',
          body: '分析材料在升温过程中的失重和分解行为，辅助判断耐热表现。',
          image: '/images/设备仪器/TGA.jpg',
        },
        {
          title: '垂直燃烧测试仪',
          tag: '阻燃测试',
          body: '用于电气电子材料的阻燃性能验证，支持客户选材确认。',
          image: '/images/设备仪器/垂直燃烧测试仪.jpg',
        },
        {
          title: '灼热丝测试仪',
          tag: '安全测试',
          body: '检测材料在灼热丝条件下的起燃和自熄表现，适配电器部件要求。',
          image: '/images/设备仪器/灼热丝测试仪.jpg',
        },
        {
          title: '漏电起痕测试仪',
          tag: '电气安全',
          body: '验证材料在污染和电应力条件下的耐漏电起痕能力。',
          image: '/images/设备仪器/漏电起痕测试仪.jpg',
        },
        {
          title: '红外光谱仪',
          tag: '材料识别',
          body: '用于树脂识别、配方对比和来料确认，提升检测追溯效率。',
          image: '/images/设备仪器/红外.jpg',
        },
      ],
      reportTitle: 'UL 认证报告',
      reportBody: '广俊塑料科技有限公司的各规格阻燃产品均通过UI阻燃测试。',
      reportLinkText: '查看原始报告',
      reports: [
        {
          code: 'GJ-QC-01',
          type: 'UL 检测报告',
          title: '320G3 UL 认证报告',
          image: '/images/reports/320G3.png',
          link: 'https://iq.ul.com/ul/cert.aspx?ULID=104758973',
          meta: [
            { name: '牌号', value: '320G3' },
            { name: '来源', value: 'UL Prospector' },
            { name: '链接', value: 'ULID 104758973' },
          ],
        },
        {
          code: 'GJ-QC-02',
          type: 'UL 检测报告',
          title: '320G4 UL 认证报告',
          image: '/images/reports/320G4.png',
          link: 'https://iq.ul.com/ul/cert.aspx?ULID=104758972',
          meta: [
            { name: '牌号', value: '320G4' },
            { name: '来源', value: 'UL Prospector' },
            { name: '链接', value: 'ULID 104758972' },
          ],
        },
        {
          code: 'GJ-QC-03',
          type: 'UL 检测报告',
          title: '320G6 UL 认证报告',
          image: '/images/reports/320G6.png',
          link: 'https://iq.ul.com/ul/cert.aspx?ULID=104761111',
          meta: [
            { name: '牌号', value: '320G6' },
            { name: '来源', value: 'UL Prospector' },
            { name: '链接', value: 'ULID 104761111' },
          ],
        },
      ],
    },
    products: {
      title: '产品系列',
      subtitle: '围绕严苛制造场景打造的材料平台。',
      inquire: '咨询',
      items: [
        {
          title: '玻纤增强材料',
          description: '用于结构件的高强度、高刚性解决方案。',
          image: productImages.pa66,
        },
        {
          title: '阻燃改性材料',
          description: '面向电气电子部件的安全性能提升。',
          image: productImages.pbt,
        },
        {
          title: '增韧改性材料',
          description: '适用于复杂环境下的耐冲击与耐久需求。',
          image: productImages.pcabs,
        },
        {
          title: '特殊功能材料',
          description: '按客户工况定制耐候、导电、耐磨等性能。',
          image: productImages.pom,
        },
        {
          title: '定制开发与技术服务',
          description: '从材料选型、打样测试到批量交付全流程支持。',
          image: productImages.pp,
        },
      ],
    },
    productsPage: {
      title: '改性塑料产品中心',
      body: '浏览面向汽车、电气电子、能源、家电和精密工业应用的材料系列。',
    },
    solutions: {
      label: '技术平台',
      title: '从树脂选型到出口交付，每一个规格都可追溯。',
      body: '我们支持颜色匹配、增强、阻燃、耐候与加工优化，服务注塑和挤出客户的多样化需求。',
      imageAlt: '实验室材料测试与改性塑料研发',
      specs: [
        { name: '基材体系', value: 'PA6、PA66、PBT、PC/ABS、PP、POM' },
        { name: '应用领域', value: '汽车、电气、能源、家电' },
        { name: '配套支持', value: 'TDS、样品匹配、出口资料' },
      ],
    },
    news: {
      title: '新闻资讯',
      subtitle: '了解企业动态、技术进展与国际市场活动。',
      featureLabel: '重点动态',
      readMore: '阅读',
      categories: [
        {
          kicker: '企业',
          title: '企业动态',
          body: '展会活动、客户来访与外贸服务相关信息，展示广俊的市场响应。',
        },
        {
          kicker: '技术',
          title: '研发进展',
          body: '实验室能力、检测设备与配方平台升级，体现材料创新能力。',
        },
        {
          kicker: '应用',
          title: '材料发布',
          body: '围绕高要求制造场景，更新改性材料系列与应用方案。',
        },
      ],
      items: [
        {
          date: '2026年5月15日',
          category: '企业动态',
          title: '感谢客户莅临 2026 国际橡塑展广俊展位',
          summary: '展会期间，广俊围绕汽车、电气与精密部件应用，与客户进行了多轮改性塑料需求沟通。',
          image: '/images/news/chinaplas-2026.png',
        },
        {
          date: '2026年4月28日',
          category: '技术进展',
          title: '研发实验室升级，进一步强化材料创新能力',
          summary: '新增检测与样品评估能力后，团队可更快响应客户对强度、阻燃、韧性和外观的定制需求。',
          image: '/images/news/rd-lab-upgrade.png',
        },
        {
          date: '2026年4月10日',
          category: '新品发布',
          title: '面向高要求应用的玻纤增强系列新品发布',
          summary: '新系列重点提升刚性、尺寸稳定性与加工一致性，适用于结构件和复杂注塑场景。',
          image: '/images/news/glass-fiber-series.png',
        },
        {
          date: '2026年3月26日',
          category: '外贸服务',
          title: '出口资料协同流程优化，提升海外客户响应效率',
          summary: '围绕报价、样品确认与技术资料准备，广俊进一步梳理跨境项目沟通流程。',
          image: '/images/news/export-documentation.png',
        },
        {
          date: '2026年3月8日',
          category: '应用指南',
          title: '电气部件外壳材料选型要点整理',
          summary: '从阻燃、耐漏电起痕、韧性与外观稳定性等角度，梳理注塑外壳材料选择方向。',
          image: '/images/news/electrical-housing-materials.png',
        },
        {
          date: '2026年2月18日',
          category: '质量管控',
          title: '批次追溯体系支持客户稳定复购',
          summary: '生产记录、检测数据和留样管理协同，为客户持续订单提供稳定的材料性能依据。',
          image: '/images/news/batch-traceability.png',
        },
      ],
    },
    newsPage: {
      title: '新闻与技术动态',
      body: '了解广俊塑料科技的企业活动、材料平台升级和应用技术进展。',
    },
    newsDetail: {
      back: '返回新闻列表',
      sidebarKicker: '材料支持',
      sidebarTitle: '需要更多技术资料？',
      sidebarBody: '请提供应用场景、加工方式与目标性能，广俊团队可协助提供材料方向、样品与技术资料支持。',
      contactCta: '联系我们',
      relatedTitle: '相关新闻',
      fallbackParagraph: '广俊持续打通配方研发、生产管控与外贸服务，让客户能够基于更清晰的信息评估材料方案。',
      fallbackClosing: '针对具体项目需求，团队可结合目标性能、加工条件与交付节奏，进一步确认适合的材料方向。',
    },
    homeContact: {
      title: '需要材料推荐或出口报价？',
      body: '请提供应用场景、加工方式、目标性能和年需求量，广俊团队将为您推荐合适方向。',
      button: '提交询盘',
    },
    contact: {
      title: '联系我们',
      subtitle: '请发送材料需求，外贸团队将尽快与您联系。',
      factoryAlt: '广俊塑料科技现代化制造园区',
      mapTitle: '广俊塑料科技位置地图',
      mapLocation: '中国浙江台州',
      addressTitle: '地址',
      address: '中国浙江省台州市黄岩区广俊路168号',
      phoneTitle: '电话',
      emailTitle: '邮箱',
      webTitle: '官网',
      hoursTitle: '时间',
      hours: '周一至周五 8:30 - 17:30 GMT+8',
      name: '您的姓名',
      email: '商务邮箱',
      message: '材料牌号、应用场景、年需求量',
      submit: '提交询盘',
    },
  },
};
