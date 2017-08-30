'use strict';
const foregroundColor = '#eff0eb';
const backgroundColor = '#282a36';
const red = '#ff5c57';
const green = '#5af78e';
const yellow = '#f3f99d';
const blue = '#57c7ff';
const magenta = '#ff6ac1';
const cyan = '#9aedfe';

exports.decorateConfig = config => Object.assign({}, config, {
	backgroundColor,
	foregroundColor,
	borderColor: '#222430',
	cursorColor: '#97979b',
	colors: {
		black: backgroundColor,
		red,
		green,
		yellow,
		blue,
		magenta,
		cyan,
		white: '#f1f1f0',
		lightBlack: '#686868',
		lightRed: red,
		lightGreen: green,
		lightYellow: yellow,
		lightBlue: blue,
		lightMagenta: magenta,
		lightCyan: cyan,
		lightWhite: foregroundColor
	},
	css: `
		${config.css}

		/* Hide title when only one tab */
		.tabs_title {
			/*display: none !important;*/
			opacity: 0.2;
			color(255, 255, 255, 1);
		}

		.tab_active {
			color: rgba(255, 255, 255, 0.6);
		}

		.tab_active:hover {
			color: rgba(255, 255, 255, 0.6);
		}

		.tab_active:before {
			border-color: rgba(255, 106, 193, 0.25);
		}

		.tab_icon {
			color: rgba(255, 255, 255, 0.4);
		}

		.tab_icon:hover {
			color: rgba(255, 255, 255, 0.6);
			background-color: rgba(255, 255, 255, 0.1);
		}

		.tab_icon:active {
			color: rgba(255, 255, 255, 0.4);
			background-color: rgba(255, 255, 255, 0.05);
		}

		.term_fit:not(.term_term) {
			opacity: 0.6;
		}

		.term_fit.term_active {
			opacity: 1;
			transition: opacity 0.12s ease-in-out;
			will-change: opacity;
		}

		.tab_tab::before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 1px;
			/*background-color: rgba(255, 106, 193, 0.4);*/
			background-color: rgba(255, 255, 255, 0.6);
			transform: scaleX(0);
		}

		.tab_first {
			border-left-color: transparent !important;
		}

		/*.tabs_nav {
			border-style: none;
			background-color: rgba(0, 0, 0, 0);
			color: rgba(0, 0, 0, 0);
			opacity: 0;
		}
		*/

		.tabs_borderShim {
			display: none;
		}

		.tab_tab {
			border-style: none;
		}

		.tab_tab:not(.tab_active) {
			/*color: #666;*/
			color: rgba(255, 255, 255, 0.2);
		}

		.tab_tab.tab_active::before {
			transform: scaleX(1);
			transition: all 200ms cubic-bezier(0.0, 0.0, 0.2, 1);
		}
	`
});
