import videojs from 'video.js';

const Component = videojs.getComponent('Component');

export default class PlaylistArea extends Component {
  cssClass

  constructor(player, options) {
    super(player, options);

    this.cssClass = options.cssClass;
    // this.onClick = options.onClick;
    this.el().setAttribute('title', options.title);
    // this.el().innerHTML = options.innerHTML;
    this.el().className = this.buildCSSClass();
  }

  buildCSSClass() {
    return `${this.cssClass} ${super.buildCSSClass()}`;
  }
}
