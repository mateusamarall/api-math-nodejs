import mathAPI from "mathjax-node"; //pegando a biblioteca mathjax
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
          math: mathbody,
          format: "TeX", //the input format (TeX, inline-TeX, AsciiMath, or MathML)//FORMATOS

          mml: true, // or svg:true, or html:true //SAIDAS
        },
        function (data) {
          console.log(data);
          if (!data.errors) {
            return response
              .status(200)
              .json({
                messasge: "Convertido com sucesso",
                output: data.speakText,
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
        error: "errro interno ao tentar converter",
      });
    }
  }
}

export default new MathController();
