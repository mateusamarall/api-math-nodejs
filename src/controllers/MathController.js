import mathAPI from "mathjax-node"; //pegando a biblioteca mathjax
import base64 from 'base-64';
mathAPI.config({
  MathJax: {},
});
mathAPI.start();
class MathController {
  store(request, response) {
    try {
      const { mathbody } = request.body;

      mathAPI.typeset(
        {
          linebreaks: true,
          math: base64.decode(mathbody),
          format: "TeX", //the input format (TeX, inline-TeX, AsciiMath, or MathML)//FORMATOS

          mml: true, // or svg:true, or html:true //SAIDAS
        },
        function (data) {

          if (!data.errors) {
            return response
              .status(200)
              .json({
                messasge: "Convertido com sucesso",
                output: base64.encode(data.speakText),

              });
          } else {
            return response
              .status(400)
              .json({ erro: "erro ao tentar converter" });
          }
        }
      );
    } catch (error) {
      return response.status(500).json({
        error: "errro  ao tentar converter",
      });
    }
  }
}

export default new MathController();
