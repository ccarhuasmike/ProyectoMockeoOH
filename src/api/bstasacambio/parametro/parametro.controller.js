const fs = require('fs');
const path = require('path');

exports.nomTabla = async (req, res) => {
    let filePath = "";
    switch (req.params.nomTabla) {
        case 'VARIACION_TIPO_CAMBIO':
            filePath = path.join(__dirname, 'utils', 'variacion_tipo_cambio.json');
            break;
    }

    console.log('File Path:', filePath);
    fs.readFile(filePath, 'utf8', (error, data) => {
        if (error) {
            return res.status(500).json({
                content: 'READ FILE ERROR',
                error
            });
        }
        try {
            const jsonData = JSON.parse(data);
            // 🔥 Evita caché del navegador
            //res.setHeader('Cache-Control', 'no-store');
            return res.status(200).json(jsonData);

        } catch (error) {
            return res.status(500).json({
                content: 'INVALID JSON',
                error
            });
        }
    });
};
