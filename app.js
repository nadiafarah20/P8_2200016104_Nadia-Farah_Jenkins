const express = require('express');
const app = express();

// Mendefinisikan rute GET /
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Membuat server agar aplikasi bisa dijalankan
if (require.main === module) {
    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });
}

module.exports = app;  // Mengekspos aplikasi agar bisa diuji
