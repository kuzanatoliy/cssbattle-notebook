module.exports = `
<dl><p><p><dl>
<style>
  * {
    background: #6F234F;
  }
  dl, p {
    position: fixed;
    background: #F7BED9;
    width: 30px;
    border-radius: 9in;
  }
  dl {
    height: 210px;
    inset: 29px 185px;
    & > dl {
      rotate: 90deg;
    }
  }
  p {
    height: 150px;
    inset: 59px 185px;
    rotate: 45deg;
    & + p {
      rotate: 135deg;
    }
  }
</style>
`;
