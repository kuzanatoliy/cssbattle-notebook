module.exports = `
<p o><p><p s><p s o><dl>
<style>
  * {
    background: #8B0051;
  }
  body {
    margin: 90px 100px;
  }
  p {
    position: relative;
    width: 80px;
    height: 40px;
    border: solid 5vw #FCDDEB;
    border-bottom: none;
    border-radius: 9in 9in 0 0;
    float: left;
    margin: 0 -10px;
  }
  [s] {
    scale: -1;
  }
  [o] {
    border-color: #F74444;
    z-index: 1;
  }
  dl {
    background: #FCDDEB;
    color: #F74444;
    position: fixed;
    height: 20px;
    width: 20px;
    z-index: 1;
    border-radius: 9in;
    top: 124px;
    left: 90px;
    box-shadow: 50vw 0;
  }
</style>
`;
