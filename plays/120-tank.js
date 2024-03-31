module.exports = `
<p b><p><p><p a><dl><dl>
<style>
  * {
    background: var(--b, #54C144);
    * {
      --b: #000;
      margin: 20px;
      padding: 20px;
    }
    p {
      float: right;
      width: 40px;
      --b: #C74E4E;
    }
    [a] {
      width: 160px;
    }
    [b] {
      width: 0;
      height: 140px;
    }
    dl {
      color: #54C144;
      position: fixed;
      padding: 5px;
      --b: #54C144;
      width: 30px;
      bottom: 40px;
      box-shadow: 0 -30px, 10px -5vh;
      & dl {
        width: 10px;
        height: 10px;
        box-shadow: none;
        bottom: 50px;
        left: 50px;
        box-shadow: 45px 0 0 -5px #fff, 65px 0 0 -5px #fff;
      }
    }
  }
</style>
`;
