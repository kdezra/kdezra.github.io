import {PAGE_GENERATORS_LISTPAGE} from "./generate-pages-page-generator-config-list.js";
import {PAGE_GENERATORS_ADVENTURE_BOOK} from "./generate-pages-page-generator-config-advbook.js";
import {PageGeneratorGeneric} from "./generate-pages-page-generator.js";
import {PAGE_GENERATORS_TABLEPAGE} from "./generate-pages-page-generator-config-tablepage.js";
import {PAGE_GENERATORS_MANAGER} from "./generate-pages-page-generator-config-manager.js";

class _PageGeneratorMaps extends PageGeneratorGeneric {
	_filename = "page/template-page-maps.hbs";
	_page = UrlUtil.PG_MAPS;

	_pageTitle = "Maps";
	_navbarDescription = "Browse maps from adventures and books.";

	_stylesheets = [
		"maps",
	];

	_scriptsRenderAdditional = [
		"render-map.js",
	];

	_scripts = [
		"maps-util.js",
		"maps.js",
	];
}

class _PageGeneratorDmscreen extends PageGeneratorGeneric {
	_filename = "page/template-page-dmscreen.hbs";
	_page = UrlUtil.PG_DM_SCREEN;

	_pageTitle = "DM Screen";
	_navbarDescription = "Build a personalised DM screen.";

	_isFontAwesome = true;
	_stylesheets = [
		"dmscreen",
	];

	_scriptsLibAdditional = [
		"peerjs.js",
		"jquery.panzoom.js",
		"lzma.js",
	];

	_scriptsUtilsAdditional = [
		"utils-list.js",
		"utils-p2p.js",
	];

	_scriptsRenderAdditional = [
		"render-map.js",
	];

	_scriptsModules = [
		"dmscreen.js",
	];
}

class _PageGeneratorBlocklist extends PageGeneratorGeneric {
	_filename = "page/template-page-blocklist.hbs";
	_page = "blocklist.html";

	_pageTitle = "Content Blocklist";
	_navbarDescription = "Exclude content and export configurations.";

	_scripts = [
		"blocklist-ui.js",
		"blocklist.js",
	];
}

class _PageGeneratorCrcalculator extends PageGeneratorGeneric {
	_filename = "page/template-page-crcalculator.hbs";
	_page = "crcalculator.html";

	_pageTitle = "CR Calculator";
	_navbarDescription = "Easily build custom creatures.";

	_stylesheets = [
		"crcalculator",
	];

	_scripts = [
		"crcalculator.js",
	];
}

class _PageGeneratorIndex extends PageGeneratorGeneric {
	_filename = "page/template-page-index.hbs";
	_page = "index.html";
	_pageDescription = "A suite of tools for 5th Edition Dungeons & Dragons players and Dungeon Masters.";

	_navbarTitleHtml = `5e<span>tools</span>`;
	_navbarDescription = "A suite of tools for 5th Edition Dungeons & Dragons players and Dungeon Masters.";
	_navbarPageTitleStyleAdditional = "page__title--home";

	_isFontAwesome = true;
	_stylesheets = [
		"index",
	];

	_scriptsModules = [
		"index.js",
	];
}

class _PageGeneratorInittrackerplayerview extends PageGeneratorGeneric {
	_filename = "page/template-page-inittrackerplayerview.hbs";
	_page = "inittrackerplayerview.html";

	_pageTitle = "Initiative Tracker Player View";
	_navbarDescription = "Press F to toggle fullscreen. Good luck.";

	_stylesheets = [
		"inittrackerplayerview",
	];

	_scriptsLibAdditional = [
		"peerjs.js",
		"lzma.js",
	];

	_scriptsUtilsAdditional = [
		"utils-p2p.js",
	];

	_scriptsModules = [
		"inittrackerplayerview.js",
	];
}

class _PageGeneratorLifegen extends PageGeneratorGeneric {
	_filename = "page/template-page-lifegen.hbs";
	_page = "lifegen.html";

	_pageTitle = "This Is Your Life";
	_navbarDescription = "Select options, and hit generate.";

	_stylesheets = [
		"lifegen",
	];

	_scriptsUtilsAdditional = [
		"utils-generate.js",
	];

	_scripts = [
		"lifegen.js",
	];
}

class _PageGeneratorLootgen extends PageGeneratorGeneric {
	_filename = "page/template-page-lootgen.hbs";
	_page = "lootgen.html";

	_pageTitle = "Loot Generator";
	_navbarDescription = "Configure the generator, then Roll Loot!";

	_stylesheets = [
		"lootgen-bundle",
	];

	_scriptsUtilsAdditional = [
		"utils-generate.js",
		"filter-common.js",
		"filter-items.js",
		"filter-spells.js",
	];

	_scriptsModules = [
		"lootgen.js",
	];
}

class _PageGeneratorMakebrew extends PageGeneratorGeneric {
	_filename = "page/template-page-makebrew.hbs";
	_page = "makebrew.html";

	_pageTitle = "Homebrew Builder";
	_navbarDescription = "Input values on left, view the results on the right.";

	_stylesheets = [
		"makebrew",
	];

	_scriptsLibAdditional = [
		"bootstrap-typeahead.js",
	];

	_scriptsRenderAdditional = [
		"render-markdown.js",
	];

	_scriptsUtilsAdditional = [
		"filter-spells.js",
	];

	_scriptsModules = [
		"makebrew.js",
	];
}

class _PageGeneratorMakecards extends PageGeneratorGeneric {
	_filename = "page/template-page-makecards.hbs";
	_page = "makecards.html";

	_pageTitle = "RPG Cards JSON Builder";
	_navbarDescription = "Build and export card JSON data.";

	_stylesheets = [
		"makecards",
	];

	_scriptsLibAdditional = [
		"bootstrap-typeahead.js",
	];

	_scriptsLibAdditionalRemote = [
		"https://rpg-cards.vercel.app/js/icons.js",
	];

	_scriptsRenderAdditional = [
		"render-card.js",
	];

	_scriptsUtilsAdditional = [
		"filter-common.js",
		"filter-bestiary.js",
		"filter-items.js",
		"filter-spells.js",
		"filter-races.js",
		"filter-backgrounds.js",
		"filter-feats.js",
		"filter-optionalfeatures.js",
	];

	_scripts = [
		"makecards.js",
	];
}

class _PageGeneratorRenderdemo extends PageGeneratorGeneric {
	_filename = "page/template-page-renderdemo.hbs";
	_page = "renderdemo.html";

	_pageTitle = "Renderer Demo";
	_navbarDescription = "Edit the JSON on the left, and see the results on the right.";

	_stylesheets = [
		"renderdemo",
	];

	_scriptsRenderAdditional = [
		"render-markdown.js",
		"render-card.js",
	];

	_scriptsLibAdditional = [
		"ace.js",
	];

	_scripts = [
		"renderdemo.js",
	];
}

class _PageGeneratorSearch extends PageGeneratorGeneric {
	_filename = "page/template-page-search.hbs";
	_page = "search.html";

	_pageTitle = "Search";
	_navbarDescription = "A search engine to add to your browser.";

	_stylesheets = [
		"search",
	];

	_scriptsModules = [
		"search.js",
	];
}

class _PageGeneratorStatgen extends PageGeneratorGeneric {
	_filename = "page/template-page-statgen.hbs";
	_page = "statgen.html";

	_pageTitle = "Statgen";
	_navbarDescription = "Change method on the left, refer to method that appears on the right.";

	_isFontAwesome = true;
	_stylesheets = [
		"statgen-bundle",
	];

	_scriptsUtilsAdditional = [
		"filter-common.js",
		"filter-races.js",
		"filter-backgrounds.js",
		"filter-feats.js",
	];

	_scriptsModules = [
		"statgen.js",
	];
}

export const PAGE_GENERATORS = 	[
	...PAGE_GENERATORS_LISTPAGE,
	...PAGE_GENERATORS_ADVENTURE_BOOK,
	...PAGE_GENERATORS_TABLEPAGE,
	...PAGE_GENERATORS_MANAGER,

	new _PageGeneratorMaps(),
	new _PageGeneratorDmscreen(),
	new _PageGeneratorBlocklist(),
	new _PageGeneratorCrcalculator(),
	new _PageGeneratorIndex(),
	new _PageGeneratorInittrackerplayerview(),
	new _PageGeneratorLifegen(),
	new _PageGeneratorLootgen(),
	new _PageGeneratorMakebrew(),
	new _PageGeneratorMakecards(),
	new _PageGeneratorSearch(),
	new _PageGeneratorStatgen(),
];
