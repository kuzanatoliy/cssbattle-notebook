module.exports = `
<p><p><p>
<style>
  * {
    background: #924A4A;
    * {
      border-radius: 50%;
      background: #EEB850;
      margin: 50px 100px;
      p {
        position: fixed;
        width: 50px;
        height: 70px;
        margin: -25px 75px;
        transform-origin: 50% 178%;
        -webkit-box-reflect: below 110px;
      }
      p + p {
        rotate: 60deg;
      }
      p + p + p {
        rotate: 120deg;
      }
    }
  }
</style>
`;
