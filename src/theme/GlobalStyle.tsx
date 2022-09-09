import { createGlobalStyle } from '@xstyled/styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --toastify-color-light: #fff;
    --toastify-color-dark: #121212;
    --toastify-color-info: #3498db;
    --toastify-color-success: #07bc0c;
    --toastify-color-warning: #f1c40f;
    --toastify-color-error: #e74c3c;
    --toastify-color-transparent: rgba(255, 255, 255, 0.7);

    --toastify-icon-color-info: var(--toastify-color-info);
    --toastify-icon-color-success: var(--toastify-color-success);
    --toastify-icon-color-warning: var(--toastify-color-warning);
    --toastify-icon-color-error: var(--toastify-color-error);

    --toastify-toast-width: 320px;
    --toastify-toast-background: #fff;
    --toastify-toast-min-height: 64px;
    --toastify-toast-max-height: 800px;
    --toastify-font-family: sans-serif;
    --toastify-z-index: 9999;

    *::-webkit-scrollbar {
      width: 8px;
      background-color: transparent;
    }

    *::-webkit-scrollbar-thumb {
      background-color: #9855ff;
      border-radius: 12px;
    }

    *::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 12px;
      margin: 0.1rem 0;
    }

    button[disabled] {
      cursor: not-allowed;
    }
  }

  a {
    text-decoration: none;
  }

  .slide-in-left {
    -webkit-animation: slide-in-left 0.5s cubic-bezier(0.075, 0.820, 0.165, 1.000) both;
            animation: slide-in-left 0.5s cubic-bezier(0.075, 0.820, 0.165, 1.000) both;
  }

  .fade-out {
    -webkit-animation: fade-out 300ms ease-out both;
            animation: fade-out 300ms ease-out both;
  }

  /**
  * ----------------------------------------
  * animation slide-in-left
  * ----------------------------------------
  */
  @-webkit-keyframes slide-in-left {
    0% {
      -webkit-transform: translateX(-1000px);
              transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
              transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-left {
    0% {
      -webkit-transform: translateX(-1000px);
              transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
              transform: translateX(0);
      opacity: 1;
    }
  }

  /**
  * ----------------------------------------
  * animation fade-out
  * ----------------------------------------
  */
  @-webkit-keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

export default GlobalStyle
