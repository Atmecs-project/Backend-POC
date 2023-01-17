const Layouts = require("../model/model_layout");

const getAllLayouts = async (req, res, next) => {
    let louts;
    try {
        louts = await Layouts.find();
    } catch (err) {
        console.log(err);
    }

    if (!louts) {
        return res.status(404).json({ message: "No Layouts Found" })
    }
    return res.status(200).json({ louts });
};

const addLayout = async (req, res, next) => {
    const { left_layout, right_layout, show_logo, show_leftmenu, font_family, font_size } = req.body;
    let lout;
    try {
        lout = new Layouts({
            left_layout, right_layout, show_logo, show_leftmenu, font_family, font_size
        });
        await lout.save();

    } catch (err) {
        console.log(err);
    }

    if (!lout) {
        return res.status(500).json({ message: "Unable Add New Layout" });
    }
    return res.status(201).json({ lout });
};

const getLayoutById = async (req, res, next) => {
    const id = req.params.id;
    let lout;
    try {
        // lout=await lout.findOne({_id:id});
        lout = await Layouts.findById(id)
    } catch (err) {
        console.log(err);
    }

    if (!lout) {
        return res.status(404).json({ message: "No Layout found" });
    }
    return res.status(200).json({ lout });
};

const updateLayoutById = async (req, res, next) => {
    const id = req.params.id;
    const { left_layout, right_layout, show_logo, show_leftmenu, font_family, font_size } = req.body;
    let lout;
    try {
        lout = await Layouts.findByIdAndUpdate(id, {
            left_layout, right_layout, show_logo, show_leftmenu, font_family, font_size
        });
        lout = await lout.save();
    } catch (err) {
        console.log(err);
    }

    if (!lout) {
        return res.status(404).json({ message: "unable to update" });
    }
    return res.status(200).json({ lout });
};

exports.getAllLayouts = getAllLayouts;
exports.addLayout = addLayout;
exports.getLayoutById = getLayoutById;
exports.updateLayoutById = updateLayoutById;