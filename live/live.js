import { textoLive, botaoDecripto, textoLiveDecripto, bloquearBotaoLive } from "../src/modulos/cript";
import { copiaLive } from "../src/modulos/copy";
import { restauraPadraoLive } from "../src/modulos/ensureDefault";
import { templateVazioLive } from "../src/modulos/emptyTemplate";
import { corretor } from "../src/modulos/watcher";
import { hideMenu } from "../src/modulos/menu";

restauraPadraoLive()
templateVazioLive()
textoLive()
textoLiveDecripto()
copiaLive()
botaoDecripto()
bloquearBotaoLive()
corretor()
hideMenu()
