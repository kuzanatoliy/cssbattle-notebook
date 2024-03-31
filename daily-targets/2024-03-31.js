module.exports = `
<p>
<style>
  * {
    background: var(--b, #512B2A);
    * {
      --b: #EA6B62;
      margin: 60px 135px;
    }
    p {
      position: fixed;
      top: 65px;
      left: -90px;
      width: 50px;
      height: 50px;
      -webkit-box-reflect: right 210px;
      color: #512B2A;
      box-shadow: 130px 0, 130px -90px, 130px 90px;
    }
  }
</style>
`;
