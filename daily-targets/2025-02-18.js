module.exports = `
<p>
<style>
  * {
    background: var(--b, #46BA67);
    * {
      --b: #D9D9D9;
      margin: 100px 50px 0;
      p {
        --b: #343D42;
        height: 80px;
        width: 80px;
        margin: 0;
        -webkit-box-reflect: right 35vw;
      }
    }
  }
</style>
`;
