module.exports = `
<a><p><a>
<style>
  * {
    background: var(--b, #191919);
    position: relative;
  }
  a {
    display: block;
    width: 200px;
    height: 200px;
    --b: #4F77FF;
    rotate: 45deg;
    left: 92px;
    top: 192px;
  }
  p {
    --b: #F9E492;
    width: 200px;
    height: 200px;
    border-radius: 9in;
    overflow: hidden;
    top: -174px;
    left: 92px;
  }
  p a {
    --b: #191919;
    top: 159q;
    left: 0;
  }
</style>
`;
