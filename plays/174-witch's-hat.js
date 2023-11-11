module.exports = `
<p b><p><dl><dl>
<style>
  * {
    background: #F4DCBF;
    position: relative;
  }
  body * {
    background: #30383F;
  }
  p {
    height: 170px;
    margin: 50px 142px;
  }
  [b] {
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
  }
  dl {
    width: 150px;
    height: 60px;
    border-radius: 50%;
    margin: -80px 117px;
    overflow: hidden;
    z-index: 1;
  }
  dl dl {
    margin: -45px -10px;
    border: solid 10px #556D7F;
  }
  p + p {
    position: fixed;
    background: #FBD038;
    height: 20px;
    width: 30px;
    margin: -60px 177px;
    z-index: 2;
    border-radius: 5px;
  }
  </style>
`;
