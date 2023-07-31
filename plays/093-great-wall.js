module.exports = `
<div><p><a><p><a><p><a>
<style>
  * {
    background: #4F77FF;
    position: relative;
  }
  * * {
    background: inherit;
  }
  div {
    margin: 50px 92px;
    width: 200px;
    height: 200px;
    border-radius: 9in;
    background: #F9E492;
    box-shadow: inset -40px -40px 0 80px #191919;
    overflow: hidden;
  }
  p {
    top: 112px;
    left: -90px;
    margin: 10px;
    height: 16px;
    box-shadow: 200px -13px #F9E492;
  }
  a {
    display: block;
    background: #D6B73F;
    height: 100%;
    width: 20px;
    left: 100%;
    transform: skew(0, -33deg);
    top: -7px;
  }
</style>
`;
