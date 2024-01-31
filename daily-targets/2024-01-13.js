module.exports = `
<dl>
<style>
  * {
    background: #7BAFDE;
    & * {
      margin: 50px 210px 50px 100px;
      -webkit-box-reflect: right 5vw;
      & dl {
        margin: 0;
        background: linear-gradient(#000039 30%, 0, #7BAFDE 40%, 0, #6867D4 60%, 0, #7BAFDE 70%, 0, #000039);
        height: 100%;
        clip-path: polygon(0 0, 0 100%, 100% 70%, 100% 30%);
      }
    }
  }
</style>
`;
