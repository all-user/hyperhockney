const colors = {
  lightWhite: '#0B210A',
  lightRed: '#8B3031',
  lightGreen: '#21584B',
  lightYellow: '#716343',
  lightBlue: '#4180bf',
  lightMagenta: '#655e7d',
  lightCyan: '#5996AF',
  lightBlack: '#CDC19E',
  white: '#1D2B1A',
  red: '#A94E4E',
  green: '#27665D',
  yellow: '#8B825A',
  blue: '#4789c7',
  magenta: '#787292',
  cyan: '#87BAD0',
  black: '#DDD5B6'
};

exports.decorateConfig = (config) => {

  // New configuration template
  const confObj = Object.assign({}, config, {
    foregroundColor: '#0B210A',
    backgroundColor: `rgba(246, 238, 218, ${ config.backgroundOpacity || '1' })`,
    borderColor: '#CDC19E',
    cursorColor: '#6EB293',
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
        background-color: #E4DCCB;
      }

      .tab_tab:hover {
        color: #222222;
      }

      .tab_tab.tab_active {
        color: #444444;
        background-color: rgba(246, 238, 218, ${ config.backgroundOpacity || '1' });
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
