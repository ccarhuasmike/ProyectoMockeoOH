const fs = require('fs');
const path = require('path');
exports.solicitudes_ahorros_filtro_fecha = async (req, res) => {    
    const filePath = path.join(__dirname, 'utils', 'solicitudes_ahorros_filtro.json');
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
exports.agora_persona = async (req, res) => {    
    const filePath = path.join(__dirname, 'utils', 'cuentacliente.json');
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