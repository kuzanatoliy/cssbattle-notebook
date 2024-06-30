module.exports = `
<p><p><dl>
<style>
  * {
    background: #4F77FF;
    * {
      margin: 25px;
    }
    * * {
      position: fixed;
    }
    p {
      margin: 0;
      background: #FFF;
      height: 150px;
      width: 150px;
    }
    p + p {
      margin: 100px 200px;
    }
    dl {
      inset: 100px 75px;
    }
  }
</style>
`;
