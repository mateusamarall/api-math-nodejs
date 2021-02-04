"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mathjaxnode = require('mathjax-node'); var _mathjaxnode2 = _interopRequireDefault(_mathjaxnode); //pegando a biblioteca mathjax
var _base64 = require('base-64'); var _base642 = _interopRequireDefault(_base64);

_mathjaxnode2.default.start();
class MathController {
  store(request, response) {
    try {
      const { mathbody } = request.body;
      _mathjaxnode2.default.typeset(
        {
          linebreaks:false,
          math: _base642.default.decode(mathbody),
          format: "AsciiMath", //the input format (TeX, inline-TeX, AsciiMath, or MathML)//FORMATOS

          mml: true, // or svg:true, or html:true //SAIDAS
        },
        function (data) {



          if (!data.errors) {
            return response.status(200).json({
              messasge: "Convertido com sucesso",
              output: _base642.default.encode(data.mml),
            });
          } else {
            return response
              .status(400)
              .json({ message: "erro ao tentar converter", erro: data.errors });
          }
        }
      );
    } catch (err) {
      return response.status(500).json({
        error: "errro  ao tentar converter",
        message_error:err
      });
    }
  }
}

exports. default = new MathController();
