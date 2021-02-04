import mathAPI from "mathjax-node"; //pegando a biblioteca mathjax
import base64 from "base-64";

mathAPI.start();
class MathController {
  store(request, response) {
    try {
      const { mathbody } = request.body;
      mathAPI.typeset(
        {
          linebreaks:false,
          math: base64.decode(mathbody),
          format: "AsciiMath", //the input format (TeX, inline-TeX, AsciiMath, or MathML)//FORMATOS

          mml: true, // or svg:true, or html:true //SAIDAS
        },
        function (data) {



          if (!data.errors) {
            return response.status(200).json({
              messasge: "Convertido com sucesso",
              output: base64.encode(data.mml),
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

export default new MathController();
