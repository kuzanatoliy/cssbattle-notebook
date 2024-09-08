module.exports = `
<p><dl><p b><p a>
<style>
  * {
    background: #CAE5DC;
    * {
      background: #000;
      margin: 120px 150px;
      * {
        position: fixed;
      }
    }
    p {
      background: repeating-linear-gradient(90deg, #000, #000 16px, #CAE5DC 16px, #CAE5DC 20px);
      height: 93px;
      width: 76px;
      margin: 60px 12px;
    }
    dl {
      height: 140px;
      width: 140px;
      margin: -80px -20px;
      &, [a] {
        border-radius: 9in;
      }
      & > p {
        background: #CAE5DC;
        height: 31px;
        width: 21px;
        margin: 95px 59px;
        &[b] {
          clip-path: polygon(50% 0, 100% 100%, 0 100%);
        }
        & + p {
          margin: 57px 14px;
          height: 46px;
          width: 46px;
          background: linear-gradient(28deg, #CAE5DC 50%, 0, #000);
          -webkit-box-reflect: right 20px;
        }
      }
    }
  }
</style>
`;
