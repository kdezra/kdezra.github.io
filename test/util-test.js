import "../js/parser.js";
import "../js/utils.js";

export const BLOCKLIST_SOURCES_PAGES = new Set([
	// region Sources which only exist in digital form
	Parser.SRC_DC,
	Parser.SRC_SLW,
	Parser.SRC_SDW,
	Parser.SRC_VD,
	Parser.SRC_AATM,
	Parser.SRC_HFStCM,
	Parser.SRC_SjA,
	Parser.SRC_GotSF,
	Parser.SRC_DitLCoT,
	Parser.SRC_VNotEE,

	// region Sources which are screens, and therefore "pageless"
	Parser.SRC_SCREEN,
	Parser.SRC_SCREEN_WILDERNESS_KIT,
	Parser.SRC_SCREEN_DUNGEON_KIT,
	Parser.SRC_SCREEN_SPELLJAMMER,
	// endregion
]);
