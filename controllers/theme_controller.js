const Themes = require("../model/model_theme");

const getAllThemes = async (req, res, next) => {
    let themes;
    try {
        themes = await Themes.find();
    } catch (err) {
        console.log(err);
    }

    if (!themes) {
        return res.status(404).json({ message: "No Themes Found" })
    }
    return res.status(200).json({ themes });
};

const addTheme = async (req, res, next) => {
    const { main_theme, left_theme, right_theme, header_theme, footer_theme, footer_bg_color, header_bg_color, left_bg_color, right_bg_color, status } = req.body;
    let theme;
    try {
        theme = new Themes({
            main_theme, left_theme, right_theme, header_theme, footer_theme, footer_bg_color, header_bg_color, left_bg_color, right_bg_color, status
        });
        await theme.save();

    } catch (err) {
        console.log(err);
    }

    if (!theme) {
        return res.status(500).json({ message: "Unable add new theme" });
    }
    return res.status(201).json({ theme });
};

const getThemeById = async (req, res, next) => {
    const id = req.params.id;
    let theme;
    try {
       // theme=await theme.findOne({_id:tid});
       theme = await Themes.findById(id);
    } catch (err) {
        console.log(err);
    }

    if (!theme) {
        return res.status(404).json({ message: "No theme found" });
    }
    return res.status(200).json({ theme });

};

const updateThemeById = async (req, res, next) => {
    const id = req.params.id;
    const { main_theme, left_theme, right_theme, header_theme, footer_theme, footer_bg_color, header_bg_color, left_bg_color, right_bg_color, status } = req.body;
    let theme;
    try {
        theme = await Themes.findByIdAndUpdate(id, {
            main_theme, left_theme, right_theme, header_theme, footer_theme, footer_bg_color, header_bg_color, left_bg_color, right_bg_color, status
        });
        theme = await theme.save();
    } catch (err) {
        console.log(err);
    }

    if (!theme) {
        return res.status(404).json({ message: "unable to update" });
    }
    return res.status(200).json({ theme });
};

exports.getAllThemes = getAllThemes;
exports.addTheme = addTheme;
exports.getThemeById = getThemeById;
exports.updateThemeById = updateThemeById;