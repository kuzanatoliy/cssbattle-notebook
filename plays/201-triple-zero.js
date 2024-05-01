module.exports = `
<p><a><a><p b><a><p><a><a>
<style>
  * {
    background: var(--b, #998235);
    * {
      margin: 45px;
    }
    * * {
      margin: 0;
    }
    p {
      --b: #FCBE5C;
      height: 150px;
      width: 30px;
      border-radius: 25px;
      padding: 30px;
      float: left;
    }
    p + p {
      margin-left: 20px;
      scale: -1;
    }
    a {
      display: block;
      --b: #998235;
      height: 150px;
      width: 30px;
    }
    [b] {
      --b: #0B2429;
    }
    a + a {
      height: 30px;
      width: 60px;
      --b: #FCBE5C;
      margin: -90px;
    }
  }
</style>
`;
