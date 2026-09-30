module.exports = `
<p><p a><p>
<style>
  * {
    background: #F8F5F1;
    * {
      border: solid 10px #4355CC;
    }
    body, [a] {
      border-radius: 0 0 9in 9in;
    }
    [a] {
      border-top: 0;
      padding: 70px 40px;
      & + * {
        margin: -10px;
      }
    }
    body {
      background: #FCC9E3;
      margin: 60px 120px;
      p {
        float: left;
        margin: -10px 0 0 -10px;
        padding: 10px;
      }
    }
  }
</style>
`;
