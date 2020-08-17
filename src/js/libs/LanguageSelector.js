import createModule from "./create-module"
import KeyCodes from '../utils/key-codes';

const LanguageSelector = CreateModule({
    // Default options
    options: () => ({
        togglerSelector: '.plf-language-selector-button',
        listSelector: '.plf-language-selector-list',
        togglerActiveClass: '-expanded',
        listActiveClass: '-active',
        listItemsSelector: '.plf-language-selector-link',
        selectedItemSelector: '.-selected',
    }),
    constructor({ el, state, options }) {
        const toggler = el.querySelector(options.togglerSelector);
        const list = el.querySelector(options.listSelector);
        const items = Array.from(
            list.querySelectorAll(
                `${options.listItemsSelector}:not(${options.selectedItemSelector})`,
            ),
        );
        let isExpanded = false;
        let focusIndex;

        const deactivate = () => {
            toggler.setAttribute('aria-expanded', 'false');
            toggler.classList.remove(options.togglerActiveClass);
            list.classList.remove(options.listActiveClass);
            focusIndex = null;
        };

        const activate = () => {
            toggler.setAttribute('aria-expanded', 'true');
            toggler.classList.add(options.togglerActiveClass);
            list.classList.add(options.listActiveClass);
        };

        const toggleExpanded = () => {
            isExpanded = !isExpanded;
            if (isExpanded) {
                activate();
            } else {
                deactivate();
            }
        };

        // Private Methods
        const handleClick = event => {
            if (event.target.closest(options.togglerSelector)) {
                toggleExpanded();
                toggler.focus();
            } else {
                isExpanded = false;
                deactivate();
            }
        };

        const focusItem = () => {
            items[focusIndex].focus();
        };

        const handleDirectionUp = target => {
            const idx = items.indexOf(target) - 1;
            if (idx > -1) {
                focusIndex = idx;
            } else {
                focusIndex = items.length - 1;
            }
            focusItem();
        };

        const handleDirectionDown = target => {
            const idx = items.indexOf(target) + 1;
            if (idx > 0 && idx < items.length) {
                focusIndex = idx;
            } else {
                focusIndex = 0;
            }
            focusItem();
        };

        const handleKeyDirection = (key, target) => {
            if (key === KeyCodes.UP) {
                handleDirectionUp(target);
            } else {
                handleDirectionDown(target);
            }
        };

        const focusFirstItem = () => {
            focusIndex = 0;
            focusItem();
        };

        const focusLastItem = () => {
            focusItem();
        };

        const handleKeydown = evt => {
            const key = evt.which || evt.keyCode;

            if (!items || !isExpanded) {
                return;
            }

            switch (key) {
            case KeyCodes.PAGE_UP:
            case KeyCodes.PAGE_DOWN:
                evt.preventDefault();
                handleKeyDirection(key, evt.target);

                break;
            case KeyCodes.UP:
            case KeyCodes.DOWN:
                evt.preventDefault();
                handleKeyDirection(key, evt.target);

                break;
            case KeyCodes.HOME:
                evt.preventDefault();
                focusFirstItem();
                break;
            case KeyCodes.END:
                evt.preventDefault();
                focusLastItem();
                break;
            case KeyCodes.ESC:
            case KeyCodes.TAB:
                isExpanded = false;
                deactivate();
                toggler.focus();
                break;
            default:
                // eslint default-case
            }
        };

        const bindEvents = () => {
            document.addEventListener('click', handleClick);
            el.addEventListener('keydown', handleKeydown);
        };

        const unbindEvents = () => {
            document.removeEventListener('click', handleClick);
            el.removeEventListener('keydown', handleKeydown);
        };

        // Public method

        /**
         * init
         * @return {undefined}
         */
        state.init = () => {
            bindEvents();
        };

        /**
         * destroy
         * @return {undefined}
         */
        state.destroy = () => {
            unbindEvents();
        };

        return state;
    },
});

export default LanguageSelector;
