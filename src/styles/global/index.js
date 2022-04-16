import { createGlobalStyle } from 'styled-components';
import { palette, font } from 'styled-theme';
import 'antd/dist/antd.min.css';

const GlobalStyles = createGlobalStyle`
font-family: ${font('primary', 0)};

h1, h2, h3, h4, h5, h6, button, a, p {
  text-transform: capitalize;
}
a {
  color: inherit;
  &:hover {
    color: inherit;
  }
}
.container,.container-fluid{
    width: 100%;
    /* padding-right: .75rem;
    padding-left: .75rem; */
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }
  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }
  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }
  @media (min-width: 1400px) {
    .container {
      max-width: 1320px;
    }
  }

  .flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .noti-wrapper {
    display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
      background-color: ${palette('grayscale', 1)};
      outline: 0;
      border: 0;
      border-radius: 6px;
      cursor: pointer;
  }
  .heading-1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: ${palette('grayscale', 10)};
  }
  .heading-2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: ${palette('grayscale', 10)};
  }
  .heading-3 {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: ${palette('grayscale', 10)};
  }
  .heading-4 {
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: ${palette('grayscale', 10)};
  }
  .p-title {
    font-weight: 400;
    font-size: 11px;
    line-height: 14px;
    color: ${palette('grayscale', 7)};
  }
  /* Network Page */
  .article-network {
    background: white;
    display: flex;
    flex-direction: column;
    padding: 0.75rem;
    border: 1px solid ${palette('grayscale', 3)};
    border-radius: 6px;
  }
  .article-network-icon {
    font-weight: 400;
    font-size: 11px;
    line-height: 14px;
    display: flex;
    align-items: center;
    gap: .25rem;
    color: ${palette('grayscale', 5)};
    svg {
      color: ${palette('grayscale', 7)};
    }
  }
  /* Section No data container */
  section.no-data {
    display: flex;
    flex-direction: column;
    height: 300px;
    .icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      margin: auto;
      align-self: center;
      svg {
        color: ${palette('grayscale', 4)};
      }
      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: ${palette('grayscale', 10)};
        text-transform: none;
      }
      button {
        margin-top: 1rem;
        text-transform: none;
      }
    }
  }
  /* Inputs Style */
  input {
    display: inline-block;
    width: 100%;
    padding: 0.5rem 1rem 0.5rem 2.25rem;
    color: rgba(0, 0, 0, 0.85);
    border-radius: 6px;
    outline: 0;
    border: 1px solid ${palette('grayscale', 1)};
    transition: all 0.2s ease;
    &:hover {
      border: 1px solid ${palette('primary', 1)};
    }
    &:focus {
      border-color: ${palette('primary', 1)};
      box-shadow: 0 0 0 2px rgb(81 38 123 / 20%);
    }
  }
  /* Modal Styles */
  
  .ant-modal-title {
    font-weight: 500;
    font-size: 18px !important;
    line-height: 22px;
    color: ${palette('grayscale', 10)};
  }
  .ant-modal-footer .share {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: .5rem;
    cursor: pointer;
    span {
      display: flex;
      align-items: center;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      color: ${palette('grayscale', 10)};
      svg {
        margin-right: 0.35rem;
        color: ${palette('primary', 1)};
      }
    }
  }
  .ant-btn{
    border-radius: 4px;
  }
  .ant-typography{
    white-space: pre-line;
  }

  

  .logo {
    font-size: 32px;
    font-weight: 700;
    color: #fff;
  }

  .ant-table-thead > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td, .ant-table-tbody > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td, .ant-table-thead > tr:hover:not(.ant-table-expanded-row) > td, .ant-table-tbody > tr:hover:not(.ant-table-expanded-row) > td {
    background: #f8f8f8!important;
  }

  .ant-row.ant-form-item {
    margin-bottom: 0;
  }
  .ant-col.ant-form-item-label label{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: ${palette('grayscale', 11)};
    &::before {
      display: none !important;
    }
  }

  .has-success.has-feedback {
    .ant-select {
      .ant-select-selection {
        .ant-select-selection__rendered {
          .ant-select-selection__placeholder {
            display: none !important;
          }
        }
      }
    }
  }


/*-----------------------------------------------*/
  // style form previous GlobalStyles
  /*-----------------------------------------------*/

  .ant-table-thead > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td, .ant-table-tbody > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td, .ant-table-thead > tr:hover:not(.ant-table-expanded-row) > td, .ant-table-tbody > tr:hover:not(.ant-table-expanded-row) > td {
    background: #f8f8f8!important;
}



h1,
h2,
h3,
h4,
h5,
h6,
a,
p,
li,
input,
textarea,
span,
div,
img,
svg {
  &::selection {
    background: ${palette('primary', 0)};
    color: #fff;
  }
}

.ant-row:not(.ant-form-item) {
  ${
    '' /* margin-left: -8px;
  margin-right: -8px; */
  };
  &:before,
  &:after {
    display: none;
  }
}

.ant-row > div {
  padding: 0;
}

/********** Add Your Global CSS Here **********/

body {
  -webkit-overflow-scrolling: touch;
}

html h1,
html h2,
html h3,
html h4,
html h5,
html h6,
html a,
html p,
html li,
input,
textarea,
span,
div,
html,
body,
html a {
  margin-bottom: 0;
  font-family: ${font('primary', 0)};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
}

html ul {
  -webkit-padding-start: 0px;
  list-style: none;
  margin-bottom: 0;
}

.scrollbar-track-y,
.scrollbar-thumb-y {
  width: 5px !important;
}

.scrollbar-track-x,
.scrollbar-thumb-x {
  height: 5px !important;
}

.scrollbar-thumb {
  border-radius: 0 !important;
}

.scrollbar-track {
  background: rgba(222, 222, 222, 0.15) !important;
}

.scrollbar-thumb {
  border-radius: 0 !important;
  background: rgba(0, 0, 0, 0.5) !important;
}

.ant-popover-placement-bottom > .ant-popover-content > .ant-popover-arrow:after,
.ant-popover-placement-bottomLeft
  > .ant-popover-content
  > .ant-popover-arrow:after,
.ant-popover-placement-bottomRight
  > .ant-popover-content
  > .ant-popover-arrow:after,
.ant-popover-placement-top > .ant-popover-content > .ant-popover-arrow:after,
.ant-popover-placement-topLeft
  > .ant-popover-content
  > .ant-popover-arrow:after,
.ant-popover-placement-topRight
  > .ant-popover-content
  > .ant-popover-arrow:after {
  left: 0;
  margin-left: -4px;
}
/* cvme Icons */

/* Icon Containers - End */

.div-64 {
    width: 64px;
    height: 64px;
}

.div-48 {
    width: 48px;
    height: 48px;
}

.div-32 {
    width: 32px;
    height: 32px;
}

.div-24 {
    width: 24px;
    height: 24px;
}

.div-20 {
    width: 20px;
    height: 20px;
}

.div-16 {
    width: 16px;
    height: 16px;
}

.div-12 {
    width: 12px;
    height: 12px;
}

.div-8 {
    width: 8px;
    height: 8px;
}

/* Icon Containers - End */

/* Icons Styling Defaults - Begin */

.cvme-icon {
    display: inline-block;
    width: 1rem; /* Default 1rem (16px) */
    height: 1rem; /* Default 1rem (16px) */
    stroke-width: 0;
    stroke: #000; /* Default Black */
    fill: #000; /* Default Black */
}

/* Icons Styling Defaults - Begin */

/* Icon Sizing - Begin */

.cvme-icon-64 {
    width: 64px;
    height: 64px;
}

.cvme-icon-48 {
    width: 48px;
    height: 48px;
}

.cvme-icon-32 {
    width: 32px;
    height: 32px;
}

.cvme-icon-24 {
    width: 24px;
    height: 24px;
}

.cvme-icon-20 {
    width: 20px;
    height: 20px;
}

.cvme-icon-16 {
    width: 16px;
    height: 16px;
}

.cvme-icon-12 {
    width: 12px;
    height: 12px;
}

.cvme-icon-8 {
    width: 8px;
    height: 8px;
}

/* Icon Sizing - End */

/* Icon Customization - Begin */

.cvme-icon-text-color {
    stroke: ${palette('text', 2)};
    fill: ${palette('text', 2)};
}

.cvme-icon-info {
    stroke: ${palette('info', 0)};
    fill: ${palette('info', 0)};
}

.cvme-icon-success {
  stroke: ${palette('success', 0)};
    fill: ${palette('success', 0)};
}

.cvme-icon-warning {
  stroke: ${palette('success', 0)};
    fill: ${palette('success', 0)};
}

.cvme-icon-danger {
  stroke: ${palette('success', 0)};
    fill: ${palette('success', 0)};
}

.cvme-icon-white {
  stroke: ${palette('grayscale', 0)};
    fill: ${palette('grayscale', 0)};
}

.cvme-icon-disabled {
  stroke: ${palette('grayscale', 4)};
    fill: ${palette('grayscale', 4)};
}

/* Icon Customization - End */
`;

export default GlobalStyles;
