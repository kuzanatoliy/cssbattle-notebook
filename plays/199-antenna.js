module.exports = `
<p><p><p><div><dl c><dl>
<style>
  *, [c] {
    background: #F48B26;
  }
  * * {
    background: #FEFF58;
    margin: 0 190px;
  }
  * * * {
    border-radius: 0 var(--r, 60px) 0 0;
  }
  p, div {
    position: fixed;
  }
  p {
    border-radius: 9in;
    height: 20px;
    width: 160px;
    margin: 30px -70px;
  }
  p + p {
    width: 240px;
    margin: 80px -110px;
  }
  p + p + p {
    width: 320px;
    margin: 130px -150px;
  }
  div {
    height: 120px;
    width: 160px;
    margin: 180px -190px;
    -webkit-box-reflect: right 80px;
  }
  dl {
    margin: 20px 20px 0 0;
    height: 100%;
    padding: 30px 0;
    --r: 40px;
    & dl {
      margin: 0 30px 0 0;
      --r: 10px;
    }
  }
</style>
`;
