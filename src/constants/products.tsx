import { IHero, TFeature } from '@/modules/product';

export type TProductItem = {
  hero: IHero;
  features: Array<TFeature>;
  siteLink?: string;
  img?: string;
  metadata: {
    title: string;
    description: string;
  };
};

export const productConfig: Record<string, TProductItem> = {
  gamiui: {
    img: 'https://i.pinimg.com/originals/02/61/18/0261188a351ebd989dd394761403da28.jpg',
    siteLink: 'https://www.gamiui.com',
    metadata: {
      title: 'GamiUI',
      description: 'Library UI to implement gamification components',
    },
    hero: {
      title:
        'Make beautiful and gamificated sites with all the powerful of GamiUI',
      description: 'Fun, Gamificated and moderm React UI Library',
      githubLink: 'https://github.com/Yei-Linux/GamiUI',
      productSiteExternalLink: 'http://gamiui.com',
      imageProduct:
        'https://camo.githubusercontent.com/932885e5602a4e8f8dc6d07e5d0ac057424ef75eef8d18faa4d5d235832a34d9/68747470733a2f2f692e696d6775722e636f6d2f38456b577948542e706e67',
    },
    features: [
      {
        title: 'Themeable',
        description:
          'Provides a plugin to customize default themes, you can change all semantic tokens or create an entire new theme.',
        icon: <></>,
      },
      {
        title: 'Interactive',
        description:
          'Components with a gamification approach to build a site like duolingo o whatever gamificated site',
        icon: <></>,
      },
      {
        title: 'Fast',
        description:
          'Provides staf of components to implement in a fast way and with a nice way to play with it.',
        icon: <></>,
      },
    ],
  },
  contentCreatorIA: {
    img: 'https://cdn-icons-png.flaticon.com/512/5731/5731863.png',
    metadata: {
      title: 'Content Creator IA',
      description:
        'Generates reels and removing parts uploading a video with IA',
    },
    hero: {
      title:
        'Make beautiful and gamificated sites with all the powerful of GamiUI',
      description: 'Fun, Gamificated and moderm React UI Library',
      githubLink: 'https://github.com/Yei-Linux/youtube-mixer',
      productSiteExternalLink: 'http://gamiui.com',
      imageProduct:
        'https://camo.githubusercontent.com/932885e5602a4e8f8dc6d07e5d0ac057424ef75eef8d18faa4d5d235832a34d9/68747470733a2f2f692e696d6775722e636f6d2f38456b577948542e706e67',
    },
    features: [
      {
        title: 'Themeable',
        description:
          'Provides a plugin to customize default themes, you can change all semantic tokens or create an entire new theme.',
        icon: <></>,
      },
      {
        title: 'Interactive',
        description:
          'Components with a gamification approach to build a site like duolingo o whatever gamificated site',
        icon: <></>,
      },
      {
        title: 'Fast',
        description:
          'Provides staf of components to implement in a fast way and with a nice way to play with it.',
        icon: <></>,
      },
    ],
  },
  workloverIA: {
    img: 'https://cdn-icons-png.flaticon.com/512/5731/5731863.png',
    metadata: {
      title: 'Workbook Lover IA',
      description: 'Generates podcast audio uploading a PDF',
    },
    hero: {
      title:
        'Make beautiful and gamificated sites with all the powerful of GamiUI',
      description: 'Fun, Gamificated and moderm React UI Library',
      githubLink: 'hhttps://github.com/Yei-Linux/workbook-lover-lang',
      productSiteExternalLink: 'http://gamiui.com',
      imageProduct:
        'https://camo.githubusercontent.com/932885e5602a4e8f8dc6d07e5d0ac057424ef75eef8d18faa4d5d235832a34d9/68747470733a2f2f692e696d6775722e636f6d2f38456b577948542e706e67',
    },
    features: [
      {
        title: 'Themeable',
        description:
          'Provides a plugin to customize default themes, you can change all semantic tokens or create an entire new theme.',
        icon: <></>,
      },
      {
        title: 'Interactive',
        description:
          'Components with a gamification approach to build a site like duolingo o whatever gamificated site',
        icon: <></>,
      },
      {
        title: 'Fast',
        description:
          'Provides staf of components to implement in a fast way and with a nice way to play with it.',
        icon: <></>,
      },
    ],
  },
  datingAPP: {
    img: 'https://cdn-icons-png.flaticon.com/512/5731/5731863.png',
    metadata: {
      title: 'Dating APP',
      description: 'App where you can find competitive people',
    },
    hero: {
      title:
        'Make beautiful and gamificated sites with all the powerful of GamiUI',
      description: 'Fun, Gamificated and moderm React UI Library',
      githubLink: 'https://github.com/Yei-Linux/dating-app',
      productSiteExternalLink: 'http://gamiui.com',
      imageProduct:
        'https://camo.githubusercontent.com/932885e5602a4e8f8dc6d07e5d0ac057424ef75eef8d18faa4d5d235832a34d9/68747470733a2f2f692e696d6775722e636f6d2f38456b577948542e706e67',
    },
    features: [
      {
        title: 'Themeable',
        description:
          'Provides a plugin to customize default themes, you can change all semantic tokens or create an entire new theme.',
        icon: <></>,
      },
      {
        title: 'Interactive',
        description:
          'Components with a gamification approach to build a site like duolingo o whatever gamificated site',
        icon: <></>,
      },
      {
        title: 'Fast',
        description:
          'Provides staf of components to implement in a fast way and with a nice way to play with it.',
        icon: <></>,
      },
    ],
  },
  anna: {
    siteLink: 'https://www.annasalud.com',
    img: 'https://media.licdn.com/dms/image/D4E0BAQGrmI2eBf251g/company-logo_200_200/0/1691002269457/annasalud_logo?e=1709769600&v=beta&t=nRYDoRvlROYxRUo9CdrF2E66v_4sOGYczV04uQVidZU',
    metadata: {
      title: 'Anna',
      description: 'Platform where we can take care people',
    },
    hero: {
      title:
        'Make beautiful and gamificated sites with all the powerful of GamiUI',
      description: 'Fun, Gamificated and moderm React UI Library',
      githubLink: 'https://github.com/Yei-Linux/anna-landing',
      productSiteExternalLink: 'https://www.annasalud.com',
      imageProduct:
        'https://camo.githubusercontent.com/932885e5602a4e8f8dc6d07e5d0ac057424ef75eef8d18faa4d5d235832a34d9/68747470733a2f2f692e696d6775722e636f6d2f38456b577948542e706e67',
    },
    features: [
      {
        title: 'Themeable',
        description:
          'Provides a plugin to customize default themes, you can change all semantic tokens or create an entire new theme.',
        icon: <></>,
      },
      {
        title: 'Interactive',
        description:
          'Components with a gamification approach to build a site like duolingo o whatever gamificated site',
        icon: <></>,
      },
      {
        title: 'Fast',
        description:
          'Provides staf of components to implement in a fast way and with a nice way to play with it.',
        icon: <></>,
      },
    ],
  },
  qeto: {
    siteLink:
      'https://play.google.com/store/apps/details?id=com.apayqhatu.qeto',
    img: 'https://media.licdn.com/dms/image/D4E0BAQFqb3X7FabFRw/company-logo_200_200/0/1696122815422?e=1709769600&v=beta&t=PAlOUvtznbfzVKe0c0PwK3vVJ5AqZDbGgYIZgyTSfuc',
    metadata: {
      title: 'Qeto',
      description: 'Platform where markets and stores can be exposed',
    },
    hero: {
      title:
        'Make beautiful and gamificated sites with all the powerful of GamiUI',
      description: 'Fun, Gamificated and moderm React UI Library',
      productSiteExternalLink:
        'https://play.google.com/store/apps/details?id=com.apayqhatu.qeto',
      imageProduct:
        'https://camo.githubusercontent.com/932885e5602a4e8f8dc6d07e5d0ac057424ef75eef8d18faa4d5d235832a34d9/68747470733a2f2f692e696d6775722e636f6d2f38456b577948542e706e67',
    },
    features: [
      {
        title: 'Themeable',
        description:
          'Provides a plugin to customize default themes, you can change all semantic tokens or create an entire new theme.',
        icon: <></>,
      },
      {
        title: 'Interactive',
        description:
          'Components with a gamification approach to build a site like duolingo o whatever gamificated site',
        icon: <></>,
      },
      {
        title: 'Fast',
        description:
          'Provides staf of components to implement in a fast way and with a nice way to play with it.',
        icon: <></>,
      },
    ],
  },
  easyMenu: {
    img: 'https://cdn-icons-png.flaticon.com/512/1012/1012232.png',
    metadata: {
      title: 'EasyMenu',
      description: 'Platform where people can share their foods',
    },
    hero: {
      title:
        'Make beautiful and gamificated sites with all the powerful of GamiUI',
      description: 'Fun, Gamificated and moderm React UI Library',
      githubLink: 'https://github.com/GamiLife/EasyMenuWeb',
      productSiteExternalLink: 'http://gamiui.com',
      imageProduct:
        'https://camo.githubusercontent.com/932885e5602a4e8f8dc6d07e5d0ac057424ef75eef8d18faa4d5d235832a34d9/68747470733a2f2f692e696d6775722e636f6d2f38456b577948542e706e67',
    },
    features: [
      {
        title: 'Themeable',
        description:
          'Provides a plugin to customize default themes, you can change all semantic tokens or create an entire new theme.',
        icon: <></>,
      },
      {
        title: 'Interactive',
        description:
          'Components with a gamification approach to build a site like duolingo o whatever gamificated site',
        icon: <></>,
      },
      {
        title: 'Fast',
        description:
          'Provides staf of components to implement in a fast way and with a nice way to play with it.',
        icon: <></>,
      },
    ],
  },
  noteSpace: {
    img: 'https://cdn-icons-png.flaticon.com/512/1012/1012232.png',
    metadata: {
      title: 'NoteSpace',
      description: 'Application where people can creating their notes',
    },
    hero: {
      title:
        'Make beautiful and gamificated sites with all the powerful of GamiUI',
      description: 'Fun, Gamificated and moderm React UI Library',
      githubLink: 'https://github.com/GamiLife/Noteverse',
      productSiteExternalLink: 'http://gamiui.com',
      imageProduct:
        'https://camo.githubusercontent.com/932885e5602a4e8f8dc6d07e5d0ac057424ef75eef8d18faa4d5d235832a34d9/68747470733a2f2f692e696d6775722e636f6d2f38456b577948542e706e67',
    },
    features: [
      {
        title: 'Themeable',
        description:
          'Provides a plugin to customize default themes, you can change all semantic tokens or create an entire new theme.',
        icon: <></>,
      },
      {
        title: 'Interactive',
        description:
          'Components with a gamification approach to build a site like duolingo o whatever gamificated site',
        icon: <></>,
      },
      {
        title: 'Fast',
        description:
          'Provides staf of components to implement in a fast way and with a nice way to play with it.',
        icon: <></>,
      },
    ],
  },
  useScreenRecording: {
    img: 'https://cdn-icons-png.flaticon.com/512/1012/1012232.png',
    metadata: {
      title: 'useScreenRecording',
      description: 'Hook Library to control screen recording',
    },
    hero: {
      title:
        'Make beautiful and gamificated sites with all the powerful of GamiUI',
      description: 'Fun, Gamificated and moderm React UI Library',
      githubLink: 'https://github.com/Yei-Linux/useScreeRecording-YL',
      productSiteExternalLink: 'http://gamiui.com',
      imageProduct:
        'https://camo.githubusercontent.com/932885e5602a4e8f8dc6d07e5d0ac057424ef75eef8d18faa4d5d235832a34d9/68747470733a2f2f692e696d6775722e636f6d2f38456b577948542e706e67',
    },
    features: [
      {
        title: 'Themeable',
        description:
          'Provides a plugin to customize default themes, you can change all semantic tokens or create an entire new theme.',
        icon: <></>,
      },
      {
        title: 'Interactive',
        description:
          'Components with a gamification approach to build a site like duolingo o whatever gamificated site',
        icon: <></>,
      },
      {
        title: 'Fast',
        description:
          'Provides staf of components to implement in a fast way and with a nice way to play with it.',
        icon: <></>,
      },
    ],
  },
};
