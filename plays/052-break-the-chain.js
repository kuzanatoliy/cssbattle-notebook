module.exports = `
<div f><p></div><div><p></div><div a><p></div><div><p></div><div><p></div><div><p></div><div><p></div><p y><p y t><p y>
<style>
  * {
    background: #6592CF;
  }
  div, p {
    background: #243D83;
  }
  div {
    z-index: 1;
    float: left;
    width: 10px;
    height: 52px;
    margin: 130px 17px 0 18px;
    position: relative;
  }
  [a] {
    margin-right: 47px;
  }
  [f] {
    margin-left: 37px;
  }
  p {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 90px;
    left: -5px;
    top: -24px;
  }
  [y] {
    margin-left: 27px;
    float: left;
    position: relative;
    background: #EEB850;
    width: 40px;
    height: 40px;
    top: -86px
  }
  [y] + [y] {
    margin-left: -5px;
  }
  [t] {
    width: 60px;
    height: 60px;
    top: -105px
  }
</style>
`;
