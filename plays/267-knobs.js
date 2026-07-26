module.exports = `
<dl a><p></dl><dl><p></dl><dl a><p></dl><dl><p></dl><dl a><p></dl><dl a><p></dl><dl><p></dl><dl a><p></dl><dl><p></dl><dl a><p></dl><div>
<style>
  * * {
    background: #E25C57;
    margin: 80px 75px;
    color: #3F4869;
    div {
      width: 20px;
      height: 60px;
      box-shadow: -60px -80px, 40px -80px, 35vw -80px, -10px 40vw, 90px 40vw;
    }
    dl {
      float: left;
      height: 50px;
      width: 20px;
      margin: 10px 15px;
      box-shadow: inset 0 -5vw;
      &[a] {
        scale: -1;
      }
      p {
        padding: 20px;
        background: #F0F0F0;
        margin: 0 -10px;
        border-radius: 9in;
      }
    }
  }
</style>
`;
