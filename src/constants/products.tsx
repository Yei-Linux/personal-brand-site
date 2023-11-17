import { IHero, TFeature } from '@/modules/product';

export type TProductItem = {
  hero: IHero;
  features: Array<TFeature>;
  metadata: {
    title: string;
    description: string;
  };
};

export const productConfig: Record<string, TProductItem> = {
  gamiui: {
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
    metadata: {
      title: 'Content Creator IA',
      description:
        'Generates reels and removing parts uploading a video with IA',
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
  workloverIA: {
    metadata: {
      title: 'Workbook Lover IA',
      description: 'Generates podcast audio uploading a PDF',
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
  datingAPP: {
    metadata: {
      title: 'Dating APP',
      description: 'App where you can find competitive people',
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
  anna: {
    metadata: {
      title: 'Anna',
      description: 'Platform where we can take care people',
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
  qeto: {
    metadata: {
      title: 'Qeto',
      description: 'Platform where markets and stores can be exposed',
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
  easyMenu: {
    metadata: {
      title: 'EasyMenu',
      description: 'Platform where people can share their foods',
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
  noteSpace: {
    metadata: {
      title: 'NoteSpace',
      description: 'Application where people can creating their notes',
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
  useScreenRecording: {
    metadata: {
      title: 'useScreenRecording',
      description: 'Hook Library to control screen recording',
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
};
