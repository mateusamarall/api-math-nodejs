"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _MathController = require('../controllers/MathController'); var _MathController2 = _interopRequireDefault(_MathController);

const router = new (0, _express.Router)();

router.post('/',_MathController2.default.store);


exports. default = router;
