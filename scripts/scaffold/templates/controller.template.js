const TTTModelNameTTTService = require("../services/TTTModelNameTTTService");

const {ValidationError, DatabaseError, ForeignKeyConstraintError} = require("sequelize");
const NotFoundError = require("../../errors/NotFoundError");
const ConflictError = require("../../errors/ConflictError");
const UnprocessableEntityError = require("../../errors/UnprocessableEntityError");

module.exports = {

    getAll : async (req, res) => {
        res.json(await TTTModelNameTTTService.getAll());
    },

    getById : async (req, res, next) => {
        const result = await TTTModelNameTTTService.getById(req.params.TTTModelNameTTTId);
        if (result) res.json(result);
        else next(new NotFoundError());
    },

    create : async (req, res, next) => {
        try {
            res.json(await TTTModelNameTTTService.create(req.body));
        } catch(e) {
            if(e instanceof ValidationError) next(new UnprocessableEntityError(e.errors));
            else if (e instanceof DatabaseError) next(new UnprocessableEntityError(e.message));
            else if (e instanceof ForeignKeyConstraintError) next(new ConflictError());
            else next(e);
        }
    },

    update : async (req, res, next) => {
        try {
            const result = await TTTModelNameTTTService.update(req.body, req.params.TTTModelNameTTTId);
            if(result[0]) res.sendStatus(204);
            else next(new NotFoundError())
        } catch(e) {
            if(e instanceof ValidationError) next(new UnprocessableEntityError(e.errors));
            else if (e instanceof DatabaseError) next(new UnprocessableEntityError(e.message));
            else if (e instanceof ForeignKeyConstraintError) next(new ConflictError());
            else next(e);
        }
    },

    delete : async (req,res, next) => {
        try {
            const result = await TTTModelNameTTTService.delete(req.params.TTTModelNameTTTId);
            if(result)
                res.sendStatus(204);
            else next(new NotFoundError())
        } catch(e) {
            if(e instanceof ValidationError) next(new UnprocessableEntityError(e.errors));
            else if (e instanceof DatabaseError) next(new UnprocessableEntityError(e.message));
            else if (e instanceof ForeignKeyConstraintError) next(new ConflictError());
            else next(e);
        }
    }

}