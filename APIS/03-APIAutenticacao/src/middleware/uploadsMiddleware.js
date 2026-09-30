import multer from "multer";

// 1º - Criar as configurações do arquivo

const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null, "uploads/")
    },
    filename: (req, file, cb)=> {
       const novoArquivo = Date.now() + "-" + file.originalname
       cb(null, novoArquivo)
    }
})

const upload = multer({
    storage: storage
    //ou nomear/declarar storage apenas
})

export default upload;