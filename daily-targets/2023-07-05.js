module.exports = `
<a><a><a><a><a><a><a><p><p a><p b>
<style>
  * {
    background: #4F77FF;
    border-radius: var(--r);
  }
  body {
    background: #fff;
    margin: 70px 130px 80px;
    --r: 9in 9in 0 0;
  }
  a, p {
    position: relative;
    --r: 9in;
    display: block;
    height: 20px;
    width: 20px;
  }
  a {
    bottom: -140px;
    float: left;
  }
  a:nth-of-type(odd) {
    background: #fff;
  }
  p {
    top: -106px;
    left: -60px;
  }
  [a] {
    top: -142px;
    left: -20px;
  }
  [b] {
    width: 60px;
    height: 30px;
    --r: 0 0 9in 9in;
    top: -148px;
  }
</style>
`;
