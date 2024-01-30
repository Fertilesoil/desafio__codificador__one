import { textoLive, botaoDecripto, botaoLive, textoLiveDecripto } from "./modulos/cript";
import { copia } from "./modulos/copy";
import { restauraPadrao } from "./modulos/ensureDefault";
import { templateVazio } from "./modulos/emptyTemplate";
import { corretor } from "./modulos/watcher";
import { alternarModoSincrono } from "./modulos/switch";

restauraPadrao()
templateVazio()
textoLive()
textoLiveDecripto()
copia()
botaoDecripto()
botaoLive()
corretor()
alternarModoSincrono()