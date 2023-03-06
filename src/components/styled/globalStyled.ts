import { css } from '@emotion/react';

export const globalStyle = css`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,ol,li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }
  
  body{
    background-color: #efefef;
  }

  .inner{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
`;