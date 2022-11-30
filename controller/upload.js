import cloudinary from "../utils/cloudinary.js";


export const uploadController = async (req, res) => {
    try{
        const fileStr = req.body.data;
        const uploadedResponse = await cloudinary.cloudinary.v2.uploader.upload(fileStr, {
            upload_preset: 'demo',
        });
        console.log(uploadedResponse);
        res.json({msg: 'YAYAya'});
    } catch (error){
        console.log(error);
        res.status(500).json({err: 'Error!!'});
    }
}