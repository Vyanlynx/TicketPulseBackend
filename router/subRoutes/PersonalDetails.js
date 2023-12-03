const emailData = require('../../MockData/Email.json')

//User nae fetch API
async function emailDetails(req, res) {
    const { organization, value } = req.body
    let dataToSend = [];
    if (organization && value) {
        emailData[organization].forEach((element, index) => {
            if (element.includes(value)) {
                dataToSend.push(element)
            }
            if (emailData[organization].length - 1 === index) {
                if (dataToSend?.length) {
                    res.status(200).json({ data: dataToSend })
                }
                else {
                    res.status(201).send({ message: 'No Data Found' })
                }
            }
        });
    }
}
module.exports = { emailDetails }