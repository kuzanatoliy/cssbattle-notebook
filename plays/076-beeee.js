module.exports = `
<p a><p b><p c><p d>
<style>
  body {
    background: #998235;
    margin: 75px 125px
  }
  p {
    margin: 0;
    float: left;
    height: 75px;
    width: 75px;
    background: #FFF;
    border-radius: 50q;
  }
  [a] {
    border-bottom-right-radius: 0;
  }
  [b] {
    border-bottom-left-radius: 0;
  }
  [c] {
    width: 150px;
    background: linear-gradient(90deg, #191919 25px, 0, #EFF33C 35px, 0, #191919 60px, 0, #EFF33C 70px, 0, #191919 95px, 0, #EFF33C);
  }
  [d] {
    position: fixed;
    width: 15px;
    height: 15px;
    background: #191919;
    top: 170px;
    left: 240px;
  }
</style>
`;
