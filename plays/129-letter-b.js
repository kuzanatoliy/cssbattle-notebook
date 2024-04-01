module.exports = `
<dl><dl><style>
  * {
    background: var(--b, #6592CF);
    * {
      --b: #515DBD;
      margin: 80px 110px 140px;
      border-radius: 0 9in 9in 0;
      -webkit-box-reflect: below -5vw; 
    }
    dl {
      margin: 0;
      height: 80px;
      --b: #2E3B9F;
      margin-right: 40px;
      & dl {
        --b: #060F55;
      }
    }
  }
</style>
`;
