module.exports = `
<p a><p a><p b><p b><p d><p d><p e>
<style>
  * {
    background: var(--b, #ED6A9D);
    border-radius: var(--r, 50%);
  }
  * * {
    --b: #050044;
    margin: 90px 110px 60px;
  }
  p {
    position: fixed;
  }
  [a] {
    width: 40px;
    height: 40px;
    --b: #FFC100;
    --r: 50% 0;
    rotate: 45deg;
    top: 40px;
    left: 35px;
  }
  [a] + [a] {
    left: 105px;
  }
  [b] {
    width: 10px;
    height: 30px;
    top: 45px;
    left: 50px;
  }
  [b] + [b] {
    left: 120px;
  }
  [d] {
    --r: 0;
    width: 100px;
    height: 65px;
    clip-path: polygon(0 0, 99% 100%, 4% 100%);
    top: -26px;
    left: 10px;
  }
  [d] + [d] {
    left: 70px;
    scale: -1 1;
  }
  [e] {
    --r: 0;
    width: 30px;
    height: 15px;
    --b: #ED6A9D;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
    top: 95px;
    left: 75px;
  }
</style>
`;
