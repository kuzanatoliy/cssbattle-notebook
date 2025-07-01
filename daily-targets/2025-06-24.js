module.exports = `
<dl><p></dl><dl><p>
<style>
  * {
    background: #F7BED9;
    * {
      margin: 90px 0;
      dl {
        background: #EC007B;
        height: 50px;
        margin: 20px 0;
        p {
          height: 50px;
          margin: 0 150px 0 200px;
          color: #EC007B;
          box-shadow: -25px -25px 0 25px, 25px -25px 0 25px;
        }
        & + dl {
          scale: -1;
        }
      }
    }
  }
</style>
`;
