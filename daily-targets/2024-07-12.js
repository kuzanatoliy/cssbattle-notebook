module.exports = `
<dl><p></dl><dl><p>
<style>
  * {
    background: #243D83;
    margin: 0;
    dl {
      height: 100px;
      box-shadow: inset 50vw 0 #6592CF;
      & + dl {
        scale: -1;
        margin-top: 100px;
      }
    }
    p {
      height: 100px;
      width: 80px;
      margin: 0 60px;
      clip-path: polygon(0 0, 100% 0, 50% 100%);
    }
  }
</style>
`;
