module.exports = `
<p><p w b><p><p h b><p w h><p h b><p><p w b><p><p h b><p w h><p h b><p><p w b><p>
<style>
  * {
    background: #504B72;
    * {
      margin: 40px;
      * {
        margin: 0;
        float: left;
        background: #FFFBCC;
        padding: 30px 50px;
      }
      [w] {
        padding-inline: 60px;
      }
      [h] {
        padding-block: 10px;
      }
      [b] {
        background: #504B72;
      }
    }
  }
</style>
`;
