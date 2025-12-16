const fs = require('fs');
const path = require('path');
exports.consultas_cambio_moneda = async (req, res) => {
    const filePath = path.join(__dirname, 'utils', 'consultas_cambio_moneda.json');
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
exports.transacciones_cambio_moneda = async (req, res) => {
    const filePath = path.join(__dirname, 'utils', 'transacciones_cambio_moneda.json');
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
exports.cambio_moneda_log_nro_operacion = async (req, res) => {
    const filePath = path.join(__dirname, 'utils', 'cambio_moneda_log_nro_operacion.json');
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
