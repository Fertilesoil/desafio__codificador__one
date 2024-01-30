import { templateVazio } from "./modulos/emptyTemplate"
import { copia } from "./modulos/copy"
import { restauraPadrao } from "./modulos/ensureDefault"
import { botaoCripto, botaoDecripto } from "./modulos/cript"
import { corretor } from "./modulos/watcher"
import { alternarModoLive } from "./modulos/switch"

restauraPadrao()
templateVazio()
copia()
botaoCripto()
botaoDecripto()
corretor()
alternarModoLive()