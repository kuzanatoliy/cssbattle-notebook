module.exports = `
<p><p a><p><p a><p b><dl>
<style>
  * {
    background: #107640;
    margin: 0;
    body {
      border-radius: 9in;
      scale: -1;
      padding: 0 47px 0 53px;
      margin: 35px 85px;
    }
    * {
      background: #161D1A;
    }
    p, dl {
      background: #107640;
      height: 104px;
    }
    p + p {
      margin-top: 7px;
      height: 56px;
      width: 22px;
      float: left;
    }
    p + p + p {
      margin-left: 14px;
    }
    [a] {
      height: 51px;
    }
    [b] {
      height: 31px;
    }
    dl {
      position: fixed;
      height: 42px;
      width: 86px;
      top: 72px;
      left: 43px;
      box-shadow: 0 0 0 7px #161D1A;
    }
  }
</style>
`;
