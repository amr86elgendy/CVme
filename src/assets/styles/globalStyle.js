import { createGlobalStyle } from 'styled-components'
import { palette, font } from 'styled-theme'
// import 'antd/dist/antd.css';

const GlobalStyles = createGlobalStyle`
 .container,.container-fluid{
    width: 100%;
    padding-right: .75rem;
    padding-left: .75rem;
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

  .ant-btn{
    border-radius: 4px;
  }
  .ant-typography{
    white-space: pre-line;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
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

font-family: ${font('primary', 0)};
/* *{font-family: ${font('primary', 0)};} */
h1,
h2,
h3,
h4,
h5,
h6 {
  text-transform: capitalize
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
`

export default GlobalStyles
