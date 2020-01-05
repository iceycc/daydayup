let express = require('express');
const app = express();
app.use(express.static(__dirname));
app.get('/clock',function(req,res){
 setInterval(() => {
     res.write(`
      <script>
         parent.document.getElementById('clock').innerHTML = "${new Date().toLocaleString()}";
      </script>
   `);
 }, 1000);  

});
app.listen(8080);