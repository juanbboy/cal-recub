const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let recubrir = new Schema(
    {
        name: {
            type: String,
        },
        tipo: {
            type: String,
        },
        uno: {
            type: Number,
        },
        dos: {
            type: Number,
        },
        tres: {
            type: Number,
        },
        cuatro: {
            type: Number,
        },
        cinco: {
            type: Number,
        },
        seis: {
            type: Number,
        },
        siete: {
            type: Number,
        },
        ocho: {
            type: Number,
        },
        nueve: {
            type: Number,
        },
        diez: {
            type: Number,
        },
        once: {
            type: Number,
        },
        doce: {
            type: Number,
        },
        tspand: {
            type: Number,
        },
        tnylonext: {
            type: Number,
        },
        tnylonint: {
            type: Number,
        },
        psup: {
            type: Number,
        },
        pinf: {
            type: Number,
        },
        puestos: {
            type: Number,
        },
        alm: {
            type: Number,
        },
        velcrom: {
            type: Number,
        },
        velest: {
            type: Number,
        },
        velreco: {
            type: Number,
        },
        tpminf: {
            type: Number,
        },
        tpmsup: {
            type: Number,
        },
        rpmhuso: {
            type: Number,
        },
        rpmhusos: {
            type: Number,
        },
        titfin: {
            type: Number,
        },
        tiempo: {
            type: Number,
        },
        grhora: {
            type: Number,
        },
        proddia: {
            type: Number,
        },
        relcogida: {
            type: Number,
        },
        rendimiento: {
            type: Number,
        },
        spandex: {
            type: Number,
        },
        nylon: {
            type: Number,
        },
        cobertura: {
            type: Number,
        },
        trece: {
            type: Number,
        },
        catorce: {
            type: Number,
        },
        date: {
            type: Date,
            default: Date.now
        },
    },
    {
        collection: "recubrir",
    }
);

module.exports = mongoose.model("recubrir", recubrir);