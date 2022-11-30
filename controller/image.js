import cloudinary from "../utils/cloudinary.js";


export const imagesInFolder = async (req, res) => {
    const {resources} = await cloudinary.cloudinary.v2.search
    .expression('folder: ' + req.params.folder)
    .sort_by('public_id', 'desc')
    .max_results(30)
    .execute();

    res.json({
        resources: resources
    });
}

export const imagesAll = async (req, res) => {
    const {resources} = await cloudinary.cloudinary.v2.search
    .expression()
    .sort_by('public_id', 'desc')
    .max_results(30)
    .execute();

    res.json({
        resources: resources
    });
    
}
