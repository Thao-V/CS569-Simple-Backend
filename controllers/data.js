var data = [
    {id: "1", name: "John", phone: "123", address: "1000 N 4th ST"},
]
exports.getAll = (req, res) => {
    res.send(data)
}

exports.getData = (req, res) => {
    let {id} = req.params;
    let item = data.find(item => item.id === id)
    res.send(item);
}

exports.create = (req, res) => {
    let item = {...req.body};
    console.log(req.body);
    item.id = '' + (data.length + 1);
    data.push(item);
    res.send(item);
}

exports.update = (req, res) => {
    const {id} = req.body;
    for(var i = 0; i < data.length; ++i){
        if(data[i].id === id){
            data[i] = {...req.body}
        }
    }
    res.send({success: 1});
}

exports.delete = (req, res) => {
    data = data.filter(item => item.id !== req.body.id)
    res.send({success: 1});
}