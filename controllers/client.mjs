import Member from "../models/member.mjs";

export const getHome = (req, res, next) => {
    res.render("client/home", {
        docTitle: "Taskia",
        path: "/",
        projects: ""
    });
}