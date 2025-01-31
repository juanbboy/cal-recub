const express = require("express");
const ruta = express.Router();

let recubrir = require("../Modelo/recubrir");
let ficha = require("../Modelo/ficha");

ruta.get('/', (req, res) => {
  recubrir.find((error, data, next) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

ruta.get('/recubrir', (req, res) => {
  recubrir.find((error, data, next) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

ruta.get('/ficha', (req, res) => {
  ficha.find((error, data, next) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

const bcrypt = require("bcrypt");

ruta.post('/regrecubrir', async (req, res, next) => {

  const ingreso = new recubrir({
    name: req.body.name,
    tipo: req.body.tipo,
    uno: req.body.uno,
    dos: req.body.dos,
    tres: req.body.tres,
    cuatro: req.body.cuatro,
    cinco: req.body.cinco,
    seis: req.body.seis,
    siete: req.body.siete,
    ocho: req.body.ocho,
    nueve: req.body.nueve,
    diez: req.body.diez,
    once: req.body.once,
    doce: req.body.doce,
    tspand: req.body.tspand,
    tnylonext: req.body.tnylonext,
    tnylonint: req.body.tnylonint,
    psup: req.body.psup,
    pinf: req.body.pinf,
    puestos: req.body.puestos,
    alm: req.body.alm,
    velcrom: req.body.velcrom,
    velest: req.body.velest,
    velreco: req.body.velreco,
    tpminf: req.body.tpminf,
    tpmsup: req.body.tpmsup,
    rpmhuso: req.body.rpmhuso,
    rpmhusos: req.body.rpmhusos,
    titfin: req.body.titfin,
    tiempo: req.body.tiempo,
    grhora: req.body.grhora,
    proddia: req.body.proddia,
    relcogida: req.body.relcogida,
    rendimiento: req.body.rendimiento,
    spandex: req.body.spandex,
    nylon: req.body.nylon,
    cobertura: req.body.cobertura,
    trece: req.body.trece,
    catorce: req.body.catorce,
    modelo: req.body.modelo,
    tipohuso: req.body.tipohuso,
    tipocarre: req.body.tipocarre,
    capcarre: req.body.capcarre,
    huso: req.body.huso,
  })

  recubrir.create(ingreso, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

ruta.post('/regficha', async (req, res, next) => {

  const ingreso = new ficha({
    name: req.body.name,
    tipo: req.body.tipo,
    uno: req.body.uno,
    dos: req.body.dos,
    tres: req.body.tres,
    cuatro: req.body.cuatro,
    cinco: req.body.cinco,
    seis: req.body.seis,
    siete: req.body.siete,
    ocho: req.body.ocho,
    nueve: req.body.nueve,
    diez: req.body.diez,
    once: req.body.once,
    doce: req.body.doce,
    tspand: req.body.tspand,
    tnylonext: req.body.tnylonext,
    tnylonint: req.body.tnylonint,
    psup: req.body.psup,
    pinf: req.body.pinf,
    puestos: req.body.puestos,
    alm: req.body.alm,
    velcrom: req.body.velcrom,
    velest: req.body.velest,
    velreco: req.body.velreco,
    tpminf: req.body.tpminf,
    tpmsup: req.body.tpmsup,
    rpmhuso: req.body.rpmhuso,
    rpmhusos: req.body.rpmhusos,
    titfin: req.body.titfin,
    tiempo: req.body.tiempo,
    grhora: req.body.grhora,
    proddia: req.body.proddia,
    relcogida: req.body.relcogida,
    rendimiento: req.body.rendimiento,
    spandex: req.body.spandex,
    nylon: req.body.nylon,
    cobertura: req.body.cobertura,
    trece: req.body.trece,
    catorce: req.body.catorce,
    modelo: req.body.modelo,
    tipohuso: req.body.tipohuso,
    tipocarre: req.body.tipocarre,
    capcarre: req.body.capcarre,
    huso: req.body.huso,
    opcion: req.body.opcion,
    tipoe: req.body.tipoe,
    tiponi: req.body.tiponi,
    proveeni: req.body.proveeni,
    proveene: req.body.proveene,
    tipos: req.body.tipos,
    provees: req.body.provees,
    obs: req.body.obs,
    elong: req.body.elong,
    encog: req.body.encog,
    cliente: req.body.cliente,
    descrip: req.body.descrip,
    nylontex: req.body.nylontex,
    nylontexi: req.body.nylontexi,
    spantex: req.body.spantex,
    nylone: req.body.nylone,
  })

  ficha.create(ingreso, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});


ruta.get("/edit-student/:id", (req, res) => {
  recubrir.findById(req.params.id, (error, data, next) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

ruta.put("/update-student/:id", (req, res, next) => {
  recubrir.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("Student successfully updated!");
      }
    }
  );
});

ruta.put("/updateficha/:id", (req, res, next) => {
  ficha.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("Student successfully updated!");
      }
    }
  );
});


ruta.delete("/delrecubrir/:id", (req, res, next) => {
  recubrir.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

ruta.delete("/delficha/:id", (req, res, next) => {
  ficha.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});



const jwt = require("jsonwebtoken")

ruta.post("/login", async (req, res) => {
  const user = await recubrir.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).json({
      error: "usuario no esta registrado"
    })
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password)
  if (!validPassword) {
    return res.status(400).json({
      error: "contraseña invalida"
    })
  }

  res.json({
    error: null,
    data: "acceso exitoso"
  })
  const token = jwt.sign({
    email: user.email,
    id: user._id
  }, "claveSecreta")
  res.header("auth-token", token).json({
    error: null,
    data: { token }
  })
})
module.exports = ruta;