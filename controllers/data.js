var data = [
    {id: "1", title: "Angular", author: "John"},
    {id: "2", title: "React", author: "Michael"}
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
    const {title, author, id} = req.body;
    for(var i = 0; i < data.length; ++i){
        if(data[i].id === id){
            data[i].title = title;
            data[i].author = author;
        }
    }
    res.send({success: 1});
}

exports.delete = (req, res) => {
    data = data.filter(item => item.id !== req.body.id)
    res.send({success: 1});
}