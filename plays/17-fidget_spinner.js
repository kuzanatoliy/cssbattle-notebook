module.exports = `
<p t><p a><p b><p c><p d>
<style>
  * {
    background: #09042A;
    position: absolute;
  }
  p {
    width: 60px;
    height: 60px;
    background: #F5BB9C;
    border-radius: 50px;
  }
  [t] {
    height: 50px;
    top: 100px;
    left: 140px;
    background: #E78481;
    width: 100px;
  }
  [a] {
    top: 33px;
  }
  [b] {
    top: 139px;
  }
  [c] {
    left: 92px;
  }
  [d] {
    left: 212px;
  }
  [a],[b] {
    left: 152px;
    border: solid 10px #09042A;
  }
  [c],[d] {
    top: 86px;
    border: solid 10px #E78481;
    background: #09042A;
  }
</style>
`;
