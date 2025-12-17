const fs = require('fs');
const path = require('path');

exports.estado = async (req, res) => {

    const filePath = path.join(__dirname, 'utils', 'estado.json');
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
exports.moneda_campana_con_estado = async (req, res) => {

    const filePath = path.join(__dirname, 'utils', 'moneda_campana_con_estado.json');
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

exports.moneda_campana_operacion_res_buscar = async (req, res) => {

    const filePath = path.join(__dirname, 'utils', 'moneda_campana_operacion_res_buscar.json');
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

exports.moneda_campana_operacion_det_id_cambio_moneda_ope_res = async (req, res) => {

    const filePath = path.join(__dirname, 'utils', 'moneda_campana_operacion_det_id_cambio_moneda_ope_res.json');
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



