const colors = {
  lightWhite: '#0B210A',
  lightRed: '#d7242e',
  lightGreen: '#00a09a',
  lightYellow: '#e76d18',
  lightBlue: '#3F76BC',
  lightMagenta: '#92579E',
  lightCyan: '#71BF67',
  lightBlack: '#f0cce0',
  white: '#1D2B1A',
  red: '#E42C36',
  green: '#00ABAB',
  yellow: '#ED7827',
  blue: '#3a83e0',
  magenta: '#a159b0',
  cyan: '#79C475',
  black: '#f0d2e3'
};

exports.decorateConfig = (config) => {

  // New configuration template
  const confObj = Object.assign({}, config, {
    foregroundColor: '#0B210A',
    backgroundColor: config.backgroundOpacity ? `rgba(253,254,254,${ config.backgroundOpacity })` : '#FDFEFE',
    borderColor: '#CDC19E',
    cursorColor: '#00d7a6',
    theme: `${ config.theme || '' }`,
    colors,
    css: `
      ${config.css || ''}

      .hyper_main {
        border: none;
      }

      .tabs_borderShim {
        display: none;
      }

      .tab_icon {
        color: #000000;
      }

      .tab_icon:hover {
        color: #000000;
        background-color: rgba(0,0,0,.04)
      }

      .tab_tab{
        border: none;
        color: #444444;
        background-color: #EBEBEC;
      }

      .tab_tab:hover {
        color: #222222;
      }

      .tab_tab.tab_active {
        color: #444444;
        background-color: rgba(253,254,254,${ config.backgroundOpacity || '1' });
      }

      .tab_tab.tab_active:hover {
        color: #222222;
      }

      .tab_textInner {
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 100%;
        padding: 0px 24px 0 8px;
      }
    `
  });

  // Check the enableVibrance setting and update background color
  exports.onWindow = (browserWindow) => {
    if (confObj.enableVibrance == true) {
      browserWindow.setVibrancy('dark');
    }
  };

  return confObj;
}
