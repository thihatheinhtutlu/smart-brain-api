const Clarifai = require ('clarifai');
 
const app = new Clarifai.App({
     apiKey: 'ac3b5db909834053b6eb61529b35e5cc'
    });

const handleApiCall = (req,res) => {
    app.models
    .predict(Clarifai.FACE_DETECT_MODEL, request.body.input)
    .then(data=> {
        res.json(data);
    })
    .catch(err => res.status(400).json('unable to work with API'))
}


const handleImage = (req,res)=> {
    const { id } = req.body;
    db('users').where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {
        res.json(entries[0]);
    })
    .catch(err => res.status(400).json('unable to get entries'))
 }
 module.exports = {
    handleImage: handleImage,
    handleApiCall: handleApiCall
 }