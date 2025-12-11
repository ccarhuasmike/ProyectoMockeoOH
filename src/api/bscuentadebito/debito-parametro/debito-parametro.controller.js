const fs = require('fs');
const path = require('path');
exports.nomTabla = async (req, res) => {
    let filePath = "";

    switch (req.params.nomTabla) {
        case 'TIPO_RETENCION':
            filePath = path.join(__dirname, 'utils', 'tipo_retencion.json');
            break;
        case 'TIPO_CUENTA':
            filePath = path.join(__dirname, 'utils', 'tipo_cuenta.json');
            break;
        case 'TIPO_MONEDA_TRAMA':
            filePath = path.join(__dirname, 'utils', 'tipo_moneda_trama.json');
            break;
        case 'PAIS_ISO':
            filePath = path.join(__dirname, 'utils', 'pais_iso.json');
            break;
        case 'TIPO_DOCUMENTO':
            filePath = path.join(__dirname, 'utils', 'tipo_documento.json');
            break;
        case 'BANCO_TIN_INTEROP':
            filePath = path.join(__dirname, 'utils', 'banco_tin_interop.json');
            break;
        case 'TIPO_SOLUCION_TRX_OBS':
            filePath = path.join(__dirname, 'utils', 'tipo_solucion_trx_obs.json');
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



// exports.obtener = async (req, res) => {
//     const persona = await service.obtener(req.params.id);
//     persona ? res.json(persona) : res.status(404).json({ msg: "No encontrado" });
// };

// exports.crear = async (req, res) => {
//     await service.crear(req.body);
//     res.json({ msg: "Persona creada" });
// };

// exports.actualizar = async (req, res) => {
//     await service.actualizar(req.params.id, req.body);
//     res.json({ msg: "Persona actualizada" });
// };

// exports.eliminar = async (req, res) => {
//     await service.eliminar(req.params.id);
//     res.json({ msg: "Persona eliminada" });
// };