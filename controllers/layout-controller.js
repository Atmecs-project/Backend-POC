const Layout = require("../model/model_layout");

const getAllLayouts = async (req, res, next) => {
    let layouts;
    try {
        layouts = await Layout.find();
    } catch (err) {
        console.log(err);
    }

    if (!layouts) {
        return res.status(404).json({ message: "No Layouts Found" })
    }
    return res.status(200).json({ layouts });
};

const addLayout = async (req, res, next) => {
    const { layout_name, status } = req.body;
    let layout;
    try {
        layout = new layout({
            layout_name, status
        });
        await layout.save();

    } catch (err) {
        console.log(err);
    }

    if (!layout) {
        return res.status(500).json({ message: "Unable Add New Layout" });
    }
    return res.status(201).json({ layout });
};

const getLayoutById = async (req, res, next) => {
    const lid = req.params.lid;
    let layout;
    try {
        // layout=await layout.findOne({_id:id});
        layout = await Layout.findById(lid)
    } catch (err) {
        console.log(err);
    }

    if (!layout) {
        return res.status(404).json({ message: "No Layout found" });
    }
    return res.status(200).json({ layout });

};

const updateLayoutById = async (req, res, next) => {
    const lid = req.params.lid;
    const { layout_name, status  } = req.body;
    let layout;
    try {
        layout = await Layout.findByIdAndUpdate(lid, {
            layout_name, status 
        });
        layout = await layout.save();
    } catch (err) {
        console.log(err);
    }

    if (!layout) {
        return res.status(404).json({ message: "unable to update" });
    }
    return res.status(200).json({ layout });
};

exports.getAllLayouts = getAllLayouts;
exports.addLayout = addLayout;
exports.getLayoutById = getLayoutById;
exports.updateLayoutById = updateLayoutById;