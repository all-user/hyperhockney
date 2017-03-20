const colors = {
  lightWhite: '#0B210A',
  lightRed: '#C31606',
  lightGreen: '#28791C',
  lightYellow: '#cd8217',
  lightBlue: '#2C83B0',
  lightMagenta: '#ec516a',
  lightCyan: '#3daece',
  lightBlack: '#FFFBEF',
  white: '#222222',
  red: '#D2361F',
  green: '#398F34',
  yellow: '#d8912d',
  blue: '#3684B5',
  magenta: '#f3536d',
  cyan: '#4cb7d6',
  black: '#ffffff'
};

exports.decorateConfig = (config) => {

  // New configuration template
  const confObj = Object.assign({}, config, {
    foregroundColor: '#0B210A',
    backgroundColor: `rgba(246, 246, 222, ${ config.backgroundOpacity || '1' })`,
    borderColor: '#CDCCAD',
    cursorColor: '#000000',
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

      .tab_tab {
        border: none;
        color: #444444;
      }

      .tab_tab:hover {
        color: #222222;
      }

      .tab_tab.tab_active {
        color: #444444;
        background-color: #F2E39E;
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
