module.exports = `
<p><a><p><a><a>
<style>
  * {
    background: #E38F66;
    * {
      margin: 85px 95px 70px;
    }
    p {
      --c: #FFFBDA;
      width: 60px;
      height: 115px;
      border: solid 30px var(--c);
      border-top: none;
      margin: 0 0 0 -30px;
      float: right;
      border-radius: 0 0 9in 9in;
    }
    p + p {
      --c: #62306D;
    }
    a {
      position: relative;
      height: 30px;
      width: 30px;
      border-radius: 9in;
      display: block;
      background: var(--c);
      margin: -15px 60px;
    }
    a + a {
      margin: -30px;
    }
  }
</style>
`;
