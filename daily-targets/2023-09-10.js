module.exports = `
<p><a><p><a>
<style>
  * {
    background: var(--b, #FEFAE3);
  }
  p {
    --b: #D4A469;
    height: 40px;
    margin: 50px 92px;
  }
  a {
    display: block;
    margin: 0 0 0 160px;
    background: #B17036;
    height: 160px;
    width: 40px;
  }
  p + p {
    rotate: 180deg;
    margin-top: 120px
  }
</style>
`;
