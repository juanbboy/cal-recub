const express = require("express");
const ruta = express.Router();

let recubrir = require("../Modelo/recubrir");

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
    puestos: req.body.puestos
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