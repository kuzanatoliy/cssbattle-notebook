module.exports = `
<p><a><dl><p></dl><p a>
<style>
  * {
    background: #E3516E;
    margin: 0;
    body {
      margin: 70px 150px;
    }
    * * {
      background: #FADE8B;
    }
    p, a {
      height: 30px;
      border-radius: 9in;
    }
    dl > p {
      height: 100px;
      background: #E3516E;
      width: 35px;
      border-radius: 0 10px 10px 0;
      -webkit-box-reflect: right 30px;
    }
    a {
      display: block;
      width: 30px;
      height: 30px;
      position: relative;
      left: 110px;
    }
    [a] {
      scale: -1;
    }
  }
</style>
`;
