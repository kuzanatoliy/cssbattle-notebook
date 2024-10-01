module.exports = `
<p>
<style>
  * {
    background: #F5D18C;
    border: solid var(--b, 0) #328FC1;
    body {
      border-bottom: 0;
    }
    * {
      --b: 80px;
      margin: 70px 70px 100px;
      height: 55px;
      border-radius: 9in 9in 0 0;
      p {
        --b: 10px;
        height: 60px;
        width: 60px;
        border-radius: 9in;
        margin: 10px -80px;
        -webkit-box-reflect: right 25vw;
      }
    }
  }
</style>
`;
