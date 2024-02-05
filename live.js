import { textoLive, botaoDecripto, textoLiveDecripto, bloquearBotaoLive } from "./src/modulos/cript";
import { copia, copiaLive } from "./src/modulos/copy";
import { restauraPadraoLive } from "./src/modulos/ensureDefault";
import { templateVazio, templateVazioLive } from "./src/modulos/emptyTemplate";
import { corretor } from "./src/modulos/watcher";

restauraPadraoLive()
templateVazioLive()
textoLive()
textoLiveDecripto()
copiaLive()
botaoDecripto()
bloquearBotaoLive()
corretor()
