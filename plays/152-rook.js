module.exports = `
<div><p><p o r><p><p o r><p></div><p b><p c><p><p d><p e r><p e r>
<style>
  body {
    margin: 55px 130px;
    background: #62306D;
  }
  p, div {
    margin: 5px auto;
    height: 10px;
    width: 110px;
    border-radius: 5px;
    background: #F7EC7D;
  }
  div {
    height: 60px;
    width: 90px;
    border-radius: 0 0 10px 10px;
    box-shadow: inset 0 5px #62306D;
  }
  div > p {
    margin: 0;
    height: 45px;
    width: 10px;
    float: left;
    border-radius: 5px 5px 0 0;
  }
  div > [o] {
    height: 45px;
    width: 30px;
    float: left;
    border-radius: 0 0 5px 5px;
  }
  [r] {
    background: #62306D;
  }
  [b] {
    width: 60px;
  }
  [c] {
    z-index: -1;
    position: relative;
    height: 65px;
  }
  [d] {
    height: 25px;
    width: 100%;
    border-radius: 20px 20px 10px 10px;
  }
  [e] {
    z-index: -1;
    top: 65px;
    left: 30px;
    position: fixed;
    width: 150px;
    border-radius: 50%;
    height: 150px;
  }
  [e] + [e] {
    left: 220px;
  }
</style>
`;
