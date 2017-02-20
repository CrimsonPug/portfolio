const express = require('express');
const app = express();


const PORT = process.env.PORT || 8080

app.use(express.static('public'));

app.listen(PORT, () => {
	console.log('Server Started on http://localhost:8080');
	console.log('Press CTRL + C to stop server');
});
