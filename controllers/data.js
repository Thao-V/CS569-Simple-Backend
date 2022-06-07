var data = [
    {
        id: "1",
        first_name: "Thao",
        last_name: "Vu",
        emai: "thaovu@miu.edu",
        phone: "123"
    },
]
exports.getAll = (req, res) => {
    res.send({success: true, data: data})
}

exports.getData = (req, res) => {
    let { id } = req.params;
    let item = data.find(item => item.id === id)
    res.send({success: true, data: item});
}

exports.create = (req, res) => {
    let item = { ...req.body };
    console.log(req.body);
    item.id = '' + (data.length + 1);
    data.push(item);
    res.send({success: true, data: item});
}

exports.update = (req, res) => {
    const { id } = req.body;
    for (var i = 0; i < data.length; ++i) {
        if (data[i].id === id) {
            data[i] = { ...req.body }
        }
    }
    res.send({ success: true });
}

exports.delete = (req, res) => {
    data = data.filter(item => item.id !== req.body.id)
    res.send({ success: true });
}