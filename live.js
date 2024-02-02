import { textoLive, botaoDecripto, botaoLive, textoLiveDecripto } from "./src/modulos/cript";
import { copia } from "./src/modulos/copy";
import { restauraPadrao } from "./src/modulos/ensureDefault";
import { templateVazio } from "./src/modulos/emptyTemplate";
import { corretor } from "./src/modulos/watcher";
import { alternarModoSincrono } from "./src/modulos/switch";

restauraPadrao()
templateVazio()
textoLive()
textoLiveDecripto()
copia()
botaoDecripto()
botaoLive()
corretor()
alternarModoSincrono()