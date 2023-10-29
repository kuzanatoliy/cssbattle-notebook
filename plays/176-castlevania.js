module.exports = `
<p a><p a><p><a><p b><p><a><p c>
<style>
  * {
    background: #A6D6AE;
  }
  body {
    margin: 60px 100px;
  }
  p {
    position: relative;
    float: left;
    margin: 0;
    background: #3A0F09;
    width: 50px;
    height: 35px;
  }
  [a] {
    height: 60px;
    width: 80px;
    left: -15px;
  }
  [a] + [a] {
    left: 55px;
  }
  [b] {
    width: 100px;
  }
  [c] {
    width: 200px;
    height: 85px;
  }
  [a], [b] {
    clip-path: polygon(50% 0, 100% 101%, 0 101%);
  }
  a {
    display: block;
    background: #BB9213;
    position: absolute;
    inset: 10px 15px 0;
    border-radius: 9in 9in 0 0;
  }
  [c] > a {
    inset: 35px 70px 0;
  }
</style>
`;
