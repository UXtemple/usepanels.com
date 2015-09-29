import { alignSelfStretch } from 'browser-vendor-prefix';
import { set } from 'panels-pages/actions';
import pagesReducer from 'panels-pages/reducer';

const DUMMY = {
  '/': {
    title: 'Use Panels',
    style: {
      backgroundColor: '#323232',
      color: 'white',
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 100,
      paddingBottom: 200,
      paddingLeft: 35,
      paddingRight: 35
    },
    blocks: [{
      element: 'title',
      data: {
        text: 'Use Panels'
      },
      style: {
        marginTop: 170
      }
    }, {
      element: 'text',
      data: {
        text: 'Browsing re-imagined with Futuristic Twist.'
      },
      style: {
        marginTop: 18,
        fontSize: 20
      }
    }, {
      element: 'action',
      data: {
        href: 'browsing-reimagined/',
        text: 'Browsing re-imagined'
      },
      style: {
        active: {
          paddingLeft: 15
        },
        hover: {
          paddingLeft: 15
        },
        base: {
          ...alignSelfStretch,
          borderBottomColor: 'rgba(255,255,255,0.75)',
          borderBottomWidth: 1,
          borderStyle: 'solid',
          color: 'white',
          marginTop: 97,
          paddingTop: 15,
          paddingBottom: 15,
          textTransform: 'uppercase',
          transition: 'padding-left 0.25s linear'
        }
      }
    }, {
      element: 'link',
      data: {
        href: 'https://github.com/uxtemple/panels',
        text: 'Open Source on GitHub'
      },
      style: {
        ...alignSelfStretch,
        borderBottomColor: 'rgba(255,255,255,0.75)',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        color: 'white',
        paddingTop: 15,
        paddingBottom: 15,
        textDecoration: 'none',
        textTransform: 'uppercase'
      }
    }, {
      element: 'action',
      data: {
        href: 'https://uxtemple.com/',
        text: 'by UXtemple'
      },
      style: {
        active: {
          paddingLeft: 15
        },
        hover: {
          paddingLeft: 15
        },
        base: {
          ...alignSelfStretch,
          borderBottomColor: 'rgba(255,255,255,0.75)',
          borderBottomWidth: 1,
          borderStyle: 'solid',
          color: 'white',
          paddingTop: 15,
          paddingBottom: 15,
          textTransform: 'uppercase',
          transition: 'padding-left 0.25s linear'
        }
      }
    }]
  },
  '/browsing-reimagined': {
    title: 'Browsing reimagined with Panels',
    style: {
      backgroundColor: '#323232',
      color: 'white',
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 100,
      lineHeight: '1.5em',
      paddingBottom: 200,
      paddingLeft: 35,
      paddingRight: 35
    },
    blocks: [{
      element: 'title',
      data: {
        text: 'Browsing re-imagined'
      },
      style: {
        marginTop: 175,
        lineHeight: '1em'
      }
    }, {
      element: 'text',
      data: {
        text: 'In a world full of tabs and (hamburger) menus, we thought it was time for a change ' +
          'and created a contextual browsing experience that lets people build streamlined apps that ' +
          'connect the web in any way they want through what we call teleports.'
      },
      style: {
        marginTop: 25
      }
    }, {
      element: 'text',
      data: {
        text: 'Today, when you click a link, the page will reload, open in a new tab a new window or ' +
          'animate itself to a new state. In any case, you are most likely to loose the context of previously viewed content.'
      },
      style: {
        marginTop: 10
      }
    }, {
      element: 'text',
      data: {
        text: 'With Panels you are able to compose applications as you go in any way you want and always keep the trail that got you there.'
      },
      style: {
        marginTop: 10
      }
    }, {
      element: 'text',
      data: {
        text: 'That is what we call The Futuristic Twist. In a gist, Panels stands for:'
      },
      style: {
        marginTop: 20
      }
    }, {
      element: 'text',
      data: {
        text: '- No reloads, no tabs, no menus!'
      }
    }, {
      element: 'text',
      data: {
        text: '- Just content'
      }
    }, {
      element: 'text',
      data: {
        text: '- Breadcrumbs reinvented as a filmstrip of content!'
      }
    }, {
      element: 'text',
      data: {
        text: '- New and contextual browsing pattern!'
      }
    }, {
      element: 'text',
      data: {
        text: '- One user experience across all devices and screen sizes (without responsive design)!'
      }
    }]
  }
};

export default function getInitialState(panelProps) {
  return {
    pages: pagesReducer(undefined, set(DUMMY))
  };
}
